package com.ojt.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
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
    
    @GetMapping("/dashboard")
    public String getdashbordPage() {
        return "dashboard";
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

      
      @PostMapping("/login")
      public String loginUser(@ModelAttribute User user, HttpSession session, Model model) {
          User loggedInUser = userService.findByEmailAndPassword(user.getEmail(), user.getPassword());
          System.out.println("Logged In User: " + loggedInUser);  // Debugging line
          if (loggedInUser != null) {
              // Store user's first name and login status in the session
              session.setAttribute("fname", loggedInUser.getFname());
              session.setAttribute("isLoggedIn", true);

              return "redirect:/index";  // Redirect to the home page after successful login
          } else {
              model.addAttribute("status", "Invalid email or password");
              return "login";  // Stay on the login page if login fails
          }
      }

      @GetMapping("/logout")
      public String logout(HttpSession session) {
          session.invalidate();  // Invalidate the session to log the user out
          return "redirect:/index";  // Redirect to the homepage after logout
      }
  }