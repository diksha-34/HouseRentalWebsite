import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";

// Get JWT token from local storage
const jwt = localStorage.getItem("jwt");

// Check if JWT token exists
const headers = jwt ? {
    "Authorization": `Bearer ${jwt}`,
    "Content-Type": "application/json"
} : {
    "Content-Type": "application/json"
};

// Create axios instance with conditional headers
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: headers
});