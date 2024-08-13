package com.app.repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entity.Employee;
import com.app.entity.Salary;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Long> {
//	List<Salary> findByAccountant(Accountant accountant);

	List<Salary> findByEmployee(Employee employee);

//	@Query("SELECT s FROM SalaryDetails s WHERE s.accountant = :accountant AND MONTH(s.paymentDate) = :month AND YEAR(s.paymentDate) = :year")
//	List<SalaryDetails> findByAccountantAndPaymentDateMonthAndPaymentDateYear(@Param("accountant") Accountant accountant, @Param("month") int month, @Param("year") int year);

	@Query("SELECT s FROM Salary s WHERE s.employee = :employee AND MONTH(s.paymentDate) = :month AND YEAR(s.paymentDate) = :year")
	List<Salary> findByEmployeeAndPaymentDateMonthAndPaymentDateYear(@Param("employee") Employee employee,
			@Param("month") int month, @Param("year") int year);
}
