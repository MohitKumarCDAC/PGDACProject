
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/loginSliceReducer'; // Import the logout action
import './Header.css';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { userInfo } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout()); // Dispatch the logout action
        navigate('/'); // Redirect to login page or home page after logout
    };

    return (
        
       
        <Navbar expand="lg" className="header">

            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
                    <Nav className="mr-auto">
                        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                       

                        {/* Render additional links based on user role */}
                        {userInfo?.role === 'ADMIN' && (
                            <>
                                <NavDropdown title="Registration Page" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/Registration">Registration Page</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Products" id="products-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/RefinedSugar">Refined Sugar</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/BrownSugar">Brown Sugar</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/Jaggery">Jaggery (Gud)</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/Molasses">Molasses</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="UserDetails" id="userDetails-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/UserListPage">Details</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/FeedbackTable">GetFeedBack Details</NavDropdown.Item>

                                </NavDropdown>

                                <NavDropdown title="Marketing" id="marketing-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/SalesRegister">Selling Form</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/PurchaseRegister">Purchasing Form</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/AddFarmer">Add Registered Farmer</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/AddCustomer">Add Registered Customer</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Salary" id="salary-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/SalaryRegister">Employee Salary</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/EmployeeRegister">Add Registered Employee</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/EmployeePage">Search Salary By Aadhar Number</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/DeleteEmployeePage">Delete Employee</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Fetch Details (Sells/Purchase)" id="fetch-details-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/SellsListPage">Sells List By Aadhar Number</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/PurchaseListPage">Purchase List By Aadhar Number</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}

                        {userInfo?.role === 'ACCOUNTANT' && (
                            <>
                                
                                <NavDropdown title="Products" id="products-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/RefinedSugar">Refined Sugar</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/BrownSugar">Brown Sugar</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/Jaggery">Jaggery (Gud)</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/Molasses">Molasses</NavDropdown.Item>
                                </NavDropdown>                  

                                <NavDropdown title="Marketing" id="marketing-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/SalesRegister">Selling Form</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/PurchaseRegister">Purchasing Form</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/AddFarmer">Add Registered Farmer</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/AddCustomer">Add Registered Customer</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Fetch Details" id="fetch-details-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/SellsListPage">Sells List By Aadhar Number</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/PurchaseListPage">Purchase List By Aadhar Number</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}

                        {(userInfo?.role === 'FARMER' || userInfo?.role === 'CUSTOMER' || userInfo?.role === 'EMPLOYEE') && (
                            <>
                                
                                {/* <Nav.Link as={NavLink} to="/products">Products</Nav.Link> */}
                                <NavDropdown title="Products" id="products-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/RefinedSugar">Refined Sugar</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/BrownSugar">Brown Sugar</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/Jaggery">Jaggery (Gud)</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/Molasses">Molasses</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={NavLink} to="/FeedbackForm">Feedback</Nav.Link> 

                            </>
                            
                        )}
                         

                        {!userInfo && (
                           <NavDropdown title="Login" id="login-dropdown">
                                <NavDropdown.Item as={NavLink} to="/LoginPage"><FaUser/>Login Page</NavDropdown.Item>
                            </NavDropdown>
                        )}

                        {userInfo && (
                            <NavDropdown title="Logout" id="logout-dropdown">
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        )}
                                {/* contact */}
                         <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        

        
       
    );
};

export default Header;




