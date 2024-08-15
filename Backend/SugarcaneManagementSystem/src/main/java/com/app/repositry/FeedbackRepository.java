package com.app.repositry;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

	Page<Feedback> findAll(Pageable pageable);

}
