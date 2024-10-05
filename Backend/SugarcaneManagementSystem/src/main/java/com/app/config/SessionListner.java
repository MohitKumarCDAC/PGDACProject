package com.app.config;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.springframework.stereotype.Component;

@Component
public class SessionListner implements HttpSessionListener{
	@Override
	public void sessionCreated(HttpSessionEvent event)
	{
		System.out.println("Session created with ID:->"+event.getSession().getId());
	}
	@Override
	public void sessionDestroyed(HttpSessionEvent even)
	{
		System.out.println("Session destroyd with ID:->"+even.getSession().getId());
	}

}
