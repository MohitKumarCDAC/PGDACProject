package com.app.exception;

public class AccountantAlreadyExistsException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AccountantAlreadyExistsException(String msg) {
		super(msg);
	}
}