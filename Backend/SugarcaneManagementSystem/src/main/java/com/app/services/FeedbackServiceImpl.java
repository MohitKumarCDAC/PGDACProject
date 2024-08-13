package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.FeedbackDto;
import com.app.entity.Feedback;
import com.app.repositry.FeedbackRepository;

@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public FeedbackDto saveFeedback(FeedbackDto feedbackDto) {
		Feedback feedback = mapper.map(feedbackDto, Feedback.class);
		feedbackRepository.save(feedback);
		return mapper.map(feedback, FeedbackDto.class);
	}

	public List<FeedbackDto> getAllFeedback() {
		return feedbackRepository.findAll().stream().map(feedback -> {
			FeedbackDto dto = new FeedbackDto();
			dto.setName(feedback.getName());
			dto.setEmail(feedback.getEmail());
			dto.setMessage(feedback.getMessage());
			dto.setProduct(feedback.getProduct());
			return dto;
		}).collect(Collectors.toList());
	}
}
