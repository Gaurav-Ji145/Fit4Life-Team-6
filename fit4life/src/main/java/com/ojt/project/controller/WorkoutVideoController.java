package com.ojt.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ojt.project.entity.WorkoutVideo;
import com.ojt.project.service.WorkoutVideoService;

import java.util.List;

@RestController
@RequestMapping("/workouts")
public class WorkoutVideoController {

    private final WorkoutVideoService workoutService;

    @Autowired
    public WorkoutVideoController(WorkoutVideoService workoutService) {
        this.workoutService = workoutService;
    }

    @GetMapping
    public List<WorkoutVideo> getAllWorkouts() {
        return workoutService.getAllWorkouts();
    }
    @GetMapping("/workoutdetails")
    public List<WorkoutVideo> getWorkoutsByCategoryAndType(
            @RequestParam String workoutCategory,
            @RequestParam String workoutType) {
        System.out.println("Category: " + workoutCategory);
        System.out.println("Type: " + workoutType);
        return workoutService.getWorkoutsByCategoryAndType(workoutCategory, workoutType);
    }
    // New POST mapping for adding a new workout
    @PostMapping("/add")
public WorkoutVideo addWorkout(
        @RequestParam String workoutCategory,
        @RequestParam String workoutType,
        @RequestParam String workoutName,
        @RequestParam(required = false) String instructions,
        @RequestParam(required = false) String focusArea,
        @RequestParam(required = false) String commonMistakes,
        @RequestParam(required = false) String breathingTips,
        @RequestParam(required = false) String animationUrl,
        @RequestParam(required = false) String musclesUrl,
        @RequestParam(required = false) String howToDoUrl,
        @RequestParam(required = false) Integer workoutDuration) {
    WorkoutVideo workoutVideo = new WorkoutVideo();
    workoutVideo.setWorkoutCategory(workoutCategory);
    workoutVideo.setWorkoutType(workoutType);
    workoutVideo.setWorkoutName(workoutName);
    workoutVideo.setInstructions(instructions);
    workoutVideo.setFocusArea(focusArea);
    workoutVideo.setCommonMistakes(commonMistakes);
    workoutVideo.setBreathingTips(breathingTips);
    workoutVideo.setAnimationUrl(animationUrl);
    workoutVideo.setMusclesUrl(musclesUrl);
    workoutVideo.setHowToDoUrl(howToDoUrl);
    workoutVideo.setWorkoutDuration(workoutDuration);
    return workoutService.saveWorkout(workoutVideo);
}

}
