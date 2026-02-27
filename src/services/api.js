const API_BASE_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    
    if (data.token) {
      localStorage.setItem('jwtToken', data.token);
    }
    
    // Return both data and status code so the component can handle different responses
    return { data, status: response.status };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    
    if (data.token) {
      localStorage.setItem('jwtToken', data.token);
    }
    
    // Return both data and status code so the component can handle different responses
    return { data, status: response.status };
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('jwtToken');
};

export const getToken = () => {
  return localStorage.getItem('jwtToken');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('jwtToken');
};
