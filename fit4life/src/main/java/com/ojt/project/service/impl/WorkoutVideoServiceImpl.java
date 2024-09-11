package com.ojt.project.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojt.project.entity.WorkoutVideo;
import com.ojt.project.repository.WorkoutVideoRepository;
import com.ojt.project.service.WorkoutVideoService;

import java.util.List;

@Service
public class WorkoutVideoServiceImpl implements WorkoutVideoService {

    private final WorkoutVideoRepository workoutRepository;

    @Autowired
    public WorkoutVideoServiceImpl(WorkoutVideoRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    @Override
    public List<WorkoutVideo> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    @Override
    public List<WorkoutVideo> getWorkoutsByCategoryAndType(String workoutCategory, String workoutType) {
        return workoutRepository.findByWorkoutCategoryAndWorkoutType(workoutCategory, workoutType);
    }

    @Override
    public WorkoutVideo saveWorkout(WorkoutVideo workoutVideo) {
        return workoutRepository.save(workoutVideo);
    }
}
