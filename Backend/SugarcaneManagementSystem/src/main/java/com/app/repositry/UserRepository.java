package com.app.repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Role;
import com.app.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByAadharNumber(String aadharNumber);

	User findByEmailAndPassword(String email, String password);

	User findByAadharNumberAndPassword(String aadharNumber, String password);

	List<User> findByRole(Role role);
	User findByEmail(String email);
}
