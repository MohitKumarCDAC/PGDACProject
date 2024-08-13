package com.app.services;

import java.util.List;

import com.app.dto.FeedbackDto;

public interface FeedbackService {

	FeedbackDto saveFeedback(FeedbackDto feedbackDto);

	List<FeedbackDto> getAllFeedback();
}
