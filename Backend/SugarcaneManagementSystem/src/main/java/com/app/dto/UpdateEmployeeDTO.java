package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateEmployeeDTO {
	private String name;
    private String aadharNumber;
    private String accountNumber;
    private String ifscCode;
}
