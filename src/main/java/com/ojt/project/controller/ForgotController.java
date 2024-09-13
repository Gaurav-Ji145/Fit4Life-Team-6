package com.ojt.project.controller;

import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.ojt.project.service.EmailService;
import jakarta.servlet.http.HttpSession;

@Controller
public class ForgotController {
    Random random = new Random();

    @Autowired
    private EmailService emailService;

    @RequestMapping("/forgot")
    public String openEmailForm() {
        return "forgot";
    }

    @PostMapping("/send-otp")
    public String sendOTP(@RequestParam("email") String email, HttpSession session) {
        System.out.println("EMAIL " + email);
        
        // Generate OTP of 6 digits
        int otp = 100000 + random.nextInt(900000); // Ensure 6 digits
        System.out.println("OTP " + otp);

        // Sending OTP via email
        String subject = "Fit4Life: Your OTP for Password Reset";
        String message = "Your OTP is: " + otp;
        boolean flag = emailService.sendEmail(subject, message, email);

        if (flag) {
            // Store OTP in session
            session.setAttribute("otp", otp);
            session.setAttribute("email", email);
            session.setAttribute("message", "OTP has been sent successfully to your email.");

            // Redirect to OTP verification page
            return "redirect:/verify-otp";
        } else {
            // If email sending fails, return to forgot password page
            session.setAttribute("message", "Failed to send OTP. Please check your email address.");
            return "redirect:/forgot";
        }
    }

    @RequestMapping("/verify-otp")
    public String openVerifyOtpForm() {
        return "verify_otp";
    }

    // Add POST method to verify OTP
    @PostMapping("/verify-otp")
    public String verifyOTP(@RequestParam("otp") int inputOtp, HttpSession session) {
        int sessionOtp = (int) session.getAttribute("otp");
        String email = (String) session.getAttribute("email");

        if (inputOtp == sessionOtp) {
            // Proceed to reset password page or logic
            session.setAttribute("message", "OTP verified successfully!");
            return "redirect:/reset-password";
        } else {
            // If OTP is incorrect
            session.setAttribute("message", "Invalid OTP. Please try again.");
            return "redirect:/verify-otp";
        }
    }
}
