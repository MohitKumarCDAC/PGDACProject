package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
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

	
	//new pagination technique

@Override
public Page<FeedbackDto> getAllFeedback(Pageable pageable) {
    // Fetch the paginated data from the repository
    Page<Feedback> feedbackPage = feedbackRepository.findAll(pageable);
    
    // Convert the list of Feedback entities to FeedbackDto
    List<FeedbackDto> feedbackDtos = feedbackPage.stream()
            .map(feedback -> mapper.map(feedback, FeedbackDto.class))
            .collect(Collectors.toList());
    
    // Return the paginated list of FeedbackDto, with metadata
    return new PageImpl<FeedbackDto>(feedbackDtos, pageable, feedbackPage.getTotalElements());
}
}
