package com.ojt.project.service;

import java.util.List;

import com.ojt.project.entity.WorkoutVideo;

public interface WorkoutVideoService {
    List<WorkoutVideo> getAllWorkouts();
    List<WorkoutVideo> getWorkoutsByCategoryAndType(String workoutCategory, String workoutType);
    // New method to save a workout
    WorkoutVideo saveWorkout(WorkoutVideo workoutVideo);
}