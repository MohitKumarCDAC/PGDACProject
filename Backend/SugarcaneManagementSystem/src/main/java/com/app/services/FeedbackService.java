package com.app.services;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

import com.app.dto.FeedbackDto;

public interface FeedbackService {

	FeedbackDto saveFeedback(FeedbackDto feedbackDto);

	//List<FeedbackDto> getAllFeedback();
	 Page<FeedbackDto> getAllFeedback(Pageable pageable);
	
}
