import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import {Home,About,Contact,Services,Admin,Worker, Farmer, Customer, Accountant,RefinedSugar,BrownSugar,Jaggery,Molasses} from "../pages";
import { Home, About, Contact, Services, RefinedSugar, BrownSugar, Jaggery, Molasses } from "../pages";
import { AuthProvider } from '../context/AuthContext';
import AddFarmer from "../MarketingData/AddFarmer";
import AddCustomer from "../MarketingData/AddCustomer";



import Registration from '../pages/Registration';
import LoginPage from '../pages/Login';
import AdminPage from '../pages/Admin';
import AccountantPage from '../pages/Accountant';
import EmployeePage from '../pages/Employee';
import FarmerPage from '../pages/Farmer';
import CustomerPage from '../pages/Customer';
import SalesRegister from '../MarketingData/SalesRegister';
import PurchaseRegister from '../MarketingData/purchase';
import EmployeeRegister from '../salaryData/AddEmployee';
import SalaryRegister from '../salaryData/salaryRegister';
import SellsListPage from '../pages/FetchData/SellsListByAadhar';
import PurchaseListPage from '../pages/FetchData/PurchaseListByAadhar';
import UserListPage from '../pages/userDetails/UserListPage';
import DeleteEmployeePage from '../salaryData/DeleteEmployee';
import UpdateUserPage from '../pages/userDetails/UpdateUserDetails';
import FeedbackForm from '../pages/feedbackPage';
import FeedbackTable from '../pages/userDetails/feedbackdetails';
// import EmployeeSalaryPage from '../salaryData/SearchEmployeeSalary';
const Router = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />


          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/accountant" element={<AccountantPage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/farmer" element={<FarmerPage />} />
          <Route path="/customer" element={<CustomerPage />} />


          <Route path="/refinedSugar" element={<RefinedSugar />} />
          <Route path="brownSugar" element={<BrownSugar />} />
          <Route path="jaggery" element={<Jaggery />} />
          <Route path="molasses" element={<Molasses />} />

{/* User Registration */}
          <Route path="/Registration" element={<Registration />} />

{/* MarketingData */}
          <Route path="/AddFarmer" element={<AddFarmer />} />
          <Route path="/AddCustomer" element={<AddCustomer />} />
          <Route path="/SalesRegister" element={<SalesRegister />}/>
          <Route path="/PurchaseRegister" element={<PurchaseRegister/>}/>

{/* SalaryData */}
          <Route path="/EmployeeRegister" element={<EmployeeRegister/>}/>
          <Route path="/SalaryRegister" element={<SalaryRegister/>}/>
          <Route path="/DeleteEmployeePage" element={<DeleteEmployeePage/>}/>
          {/* here EmployeePage reused */}
          <Route path="/EmployeePage" element={<EmployeePage/>}/>


          <Route path="/SellsListPage" element={<SellsListPage/>} />
          <Route path='/PurchaseListPage' element={<PurchaseListPage/>}/>

          {/* userDetails */}
          <Route path="/UserListPage" element={<UserListPage/>}/>
          <Route path="/UpdateUserPage/:aadharNumber" element={<UpdateUserPage/>}/>
          <Route path="/FeedbackTable" element={<FeedbackTable/>}/>

          {/* feedbackform */}

          <Route path="/FeedbackForm" element={<FeedbackForm/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default Router



