// services/contactService.ts
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
apiClient.interceptors.request.use(
  (config) => {
    console.log('🚀 API Request:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export const createContact = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('All fields are required');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    console.log('📤 Sending contact form data:', formData);
    
    const response = await apiClient.post('/contacts/create', formData);
    
    return {
      success: true,
      data: response.data,
      message: 'Message sent successfully!',
    };
    
  } catch (error) {
    console.error('❌ Contact service error:', error);
    
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      
      // Network error
      if (axiosError.code === 'ECONNREFUSED' || axiosError.code === 'ERR_NETWORK') {
        throw new Error('Unable to connect to server. Please check your connection and try again.');
      }
      
      // Timeout error
      if (axiosError.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please try again.');
      }
      
      // HTTP error responses
      if (axiosError.response) {
        const status = axiosError.response.status;
        // Safely extract error message or error string from response data
        let errorMessage = 'Unknown server error';
        const data = axiosError.response.data;
        if (data && typeof data === 'object') {
          if ('message' in data && typeof data.message === 'string') {
            errorMessage = data.message;
          } else if ('error' in data && typeof data.error === 'string') {
            errorMessage = data.error;
          }
        }
        
        switch (status) {
          case 400:
            throw new Error(`Bad Request: ${errorMessage}`);
          case 401:
            throw new Error('Unauthorized. Please check your credentials.');
          case 403:
            throw new Error('Access forbidden. You don\'t have permission to perform this action.');
          case 404:
            throw new Error('API endpoint not found. Please check the server configuration.');
          case 422:
            throw new Error(`Validation Error: ${errorMessage}`);
          case 429:
            throw new Error('Too many requests. Please wait a moment and try again.');
          case 500:
            throw new Error('Internal server error. Please try again later.');
          case 502:
            throw new Error('Bad gateway. The server is temporarily unavailable.');
          case 503:
            throw new Error('Service unavailable. Please try again later.');
          default:
            throw new Error(`Server error (${status}): ${errorMessage}`);
        }
      }
      
      // Request was made but no response received
      if (axiosError.request) {
        throw new Error('No response from server. Please check your internet connection.');
      }
    }
    
    // Handle validation errors
    if (error instanceof Error) {
      throw error;
    }
    
    // Fallback error
    throw new Error('An unexpected error occurred. Please try again later.');
  }
};

// Optional: Add a test function to check API connectivity
export const testConnection = async (): Promise<boolean> => {
  try {
    const response = await apiClient.get('/health'); // Assumes you have a health check endpoint
    return response.status === 200;
  } catch (error) {
    console.error('❌ Connection test failed:', error);
    return false;
  }
};