// src/apiService.js
const API_BASE_URL = 'http://localhost:8080/api/user'; // Adjust according to your backend URL

export const getCustomers = async () => {
    const response = await fetch(`${API_BASE_URL}/customers`);
    if (!response.ok) {
        throw new Error('Failed to fetch customers');
    }
    return response.json();
};

export const getFarmers = async () => {
    const response = await fetch(`${API_BASE_URL}/farmers`);
    if (!response.ok) {
        throw new Error('Failed to fetch farmers');
    }
    return response.json();
};

export const getEmployees = async () => {
    const response = await fetch(`${API_BASE_URL}/employees`);
    if (!response.ok) {
        throw new Error('Failed to fetch employees');
    }
    return response.json();
};

export const getAccountants = async () => {
    const response = await fetch(`${API_BASE_URL}/accountants`);
    if (!response.ok) {
        throw new Error('Failed to fetch accountants');
    }
    return response.json();
};
