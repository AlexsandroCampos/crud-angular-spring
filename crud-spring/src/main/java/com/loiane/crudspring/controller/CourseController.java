package com.loiane.crudspring.controller;

import java.util.List;

import com.loiane.crudspring.model.Course;
import com.loiane.crudspring.repository.CourseRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> lista() {
        return courseRepository.findAll();
    }

    @PostMapping
    //@ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Course> create(@RequestBody Course course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.courseRepository.save(course));
    }
}
