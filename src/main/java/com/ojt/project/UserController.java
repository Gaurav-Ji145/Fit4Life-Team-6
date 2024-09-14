package com.ojt.project;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ojt.project.entity.User;
import com.ojt.project.service.UserService;

import jakarta.servlet.http.HttpSession;

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
    public String getVideoPage() {
        return "video";
    }
    
 //Dashboard controller location
    
    @GetMapping("/dashboard")
    public String getdashbordPage() {
        return "dashboard";
    }
    @GetMapping("/history")
    public String gethistoryPage() {
        return "history";
    }
    
    @GetMapping("/reset")
    public String getresetPage() {
        return "reset";
    }
  //Admin Controller Location
	
  	 @GetMapping("/addworkout")
  	    public String getaddworkoutPage() {
  	        return "addworkout";
  	    }

  	    @GetMapping("/admin")
  	    public String getadminPage() {
  	        return "admin";
  	    }

  	    @GetMapping("/data")
  	    public String getdataPage() {
  	        return "data";
  	    }

  	    @GetMapping("/admin_login")
  	    public String getadmin_loginPage() {
  	        return "admin_login";
  	    }
  	    
  	    @GetMapping("/adduser")
  	    public String getadduserPage() {
  	        return "adduser";
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
  }