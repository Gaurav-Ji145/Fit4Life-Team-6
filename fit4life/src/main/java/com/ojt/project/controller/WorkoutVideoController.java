package com.ojt.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<WorkoutVideo>> getWorkoutsByCategoryAndType(
            @RequestParam String workoutCategory,
            @RequestParam String workoutType) {
        List<WorkoutVideo> workouts = workoutService.getWorkoutsByCategoryAndType(workoutCategory, workoutType);
        return new ResponseEntity<>(workouts, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<WorkoutVideo> addWorkout(@RequestBody WorkoutVideo workoutVideo) {
        try {
            WorkoutVideo savedWorkout = workoutService.saveWorkout(workoutVideo);
            return new ResponseEntity<>(savedWorkout, HttpStatus.CREATED);
        } catch (Exception e) {
            // Log the error and return a 400 Bad Request response
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
