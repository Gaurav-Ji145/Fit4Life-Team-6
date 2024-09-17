package com.ojt.project;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ojt.project.entity.User;
import com.ojt.project.service.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/index")
    public String getHome() {
        return "index";
    }

    @GetMapping("/workout")
    public String getWorkoutPage() {
        return "workout";
    }

    @GetMapping("/about")
    public String getAboutPage() {
        return "about";
    }

    @GetMapping("/contact")
    public String getContactPage() {
        return "contact";
    }

    @GetMapping("/team")
    public String getTeamPage() {
        return "team";
    }

    @GetMapping("/forgot")
    public String getForgetPage() {
        return "forgot";
    }

    @GetMapping("/video")
    public String getVideoPage(HttpSession session, Model model) {
        User user = (User) session.getAttribute("user");

        if (user == null) {
            model.addAttribute("error", "You need to log in to access the video page.");
            return "redirect:/login";
        }

        return "video";
    }

    // Dashboard controller location
    @GetMapping("/dashboard")
    public String getDashboardPage(HttpSession session, Model model) {
        User user = (User) session.getAttribute("user");

        if (user == null) {
            model.addAttribute("error", "You need to log in to access the dashboard.");
            return "redirect:/login";
        }

        return "dashboard";
    }

    @GetMapping("/history")
    public String getHistoryPage(HttpSession session, Model model) {
        User user = (User) session.getAttribute("user");

        if (user == null) {
            model.addAttribute("error", "You need to log in to access the history page.");
            return "redirect:/login";
        }

        return "history";
    }

    @GetMapping("/reset")
    public String getResetPage(HttpSession session, Model model) {
        User user = (User) session.getAttribute("user");

        if (user == null) {
            model.addAttribute("error", "You need to log in to access the reset page.");
            return "redirect:/login";
        }

        return "reset";
    }

    // Admin Controller Location
    @GetMapping("/addworkout")
    public String getAddWorkoutPage() {
        return "addworkout";
    }

    @GetMapping("/admin")
    public String getAdminPage() {
        return "admin";
    }

    @GetMapping("/data")
    public String getDataPage(Model model) {
        // Fetch all users from the service
        List<User> users = userService.getAllUsers();

        // Add the list of users to the model
        model.addAttribute("users", users);

        // Return the data page
        return "data";
    }

    @GetMapping("/admin_login")
    public String getAdminLoginPage() {
        return "admin_login";
    }

    @GetMapping("/adduser")
    public String getAddUserPage() {
        return "adduser";
    }

    @GetMapping("/message")
    public String getMessagePage() {
        return "message";
    }

    @GetMapping("/workout_table")
    public String getWorkoutTablePage() {
        return "workout_table";
    }

    @GetMapping("/update_user")
    public String getUpdateUserPage() {
        return "update_user";
    }

    @GetMapping("/update_workout")
    public String getUpdateWorkoutPage() {
        return "update_workout";
    }

    @GetMapping("/signup")
    public String showSignUpForm(Model model) {
        User user = new User();
        user.setFname("Default First Name");
        model.addAttribute("user", user);
        return "signup";
    }

    @PostMapping("/signup")
    public String registerUser(@ModelAttribute User user, Model model) {
        User savedUser = userService.saveUser(user);
        if (savedUser != null) {
            model.addAttribute("status", "Success");
        } else {
            model.addAttribute("status", "Failed");
        }
        return "login";
    }

    @GetMapping("/login")
    public String showLoginForm(Model model) {
        User user = new User();
        model.addAttribute("user", user);
        return "login"; // Refers to login.jsp under WEB-INF/jsp/
    }

    // Handle login form submission
    @PostMapping("/login")
    public String login(@RequestParam String email, 
                        @RequestParam String password, 
                        @RequestParam(required = false) String redirect,  // Optional redirect URL
                        HttpSession session, 
                        Model model) {
        // Authenticate the user with email and password
        User user = userService.authenticate(email, password);

        if (user != null) {
            // If authentication is successful, store user in session
            session.setAttribute("user", user);

            // Redirect to the original page (video) if the redirect URL is provided
            if (redirect != null && !redirect.isEmpty()) {
                return "redirect:/" + redirect;
            }
            // Otherwise, redirect to the home page
            return "redirect:/index";
        } else {
            // If authentication fails, show an error message
            model.addAttribute("error", "Invalid email or password");
            return "login";
        }
    }

    // Handle user logout
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        // Invalidate the session to log the user out
        session.invalidate();
        return "redirect:/index";  // Redirect to the login page after logout
    }

    @GetMapping("/api/getSessionAttributes")
    @ResponseBody
    public Map<String, Object> getSessionAttributes(HttpSession session) {
        User user = (User) session.getAttribute("user");
        Map<String, Object> response = new HashMap<>();
        if (user != null) {
            response.put("isLoggedIn", true);
            response.put("fname", user.getFname());  // Send the first name
        } else {
            response.put("isLoggedIn", false);
        }
        return response;
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestParam String email, 
                                @RequestParam String password, 
                                @RequestParam String confirmPassword,
                                Model model) {
        // Check if the passwords match
        if (!password.equals(confirmPassword)) {
            model.addAttribute("error", "Passwords do not match.");
            return "reset_password"; // Return to the reset password page
        }

        // Call UserService to update the user's password
        boolean success = userService.updatePassword(email, password);

        if (success) {
            model.addAttribute("status", "Password successfully updated.");
            return "login"; // Redirect to the login page after successful password reset
        } else {
            model.addAttribute("error", "Failed to update the password. Please try again.");
            return "reset_password"; // Return to the reset password page
        }
    }

    @PostMapping("/adduser")
    public String addUser(@Valid @ModelAttribute User user, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "adduser";  // Return back to form if validation errors exist
        }
        User savedUser = userService.saveUser(user);
        if (savedUser != null) {
            model.addAttribute("status", "User added successfully.");
            return "redirect:/adduser";
        } else {
            model.addAttribute("status", "Failed to add user.");
            return "adduser";
        }
    }
}
