// apiService.ts
import axios from 'axios';

// dotenv.config(); // Load environment variables

//const apiBaseUrl: string | undefined = process.env.API_BASE_URL;

const apiBaseUrl: string | undefined = "http://localhost:8080/api/v1";

if (!apiBaseUrl) {
  throw new Error('API_BASE_URL is not defined in the environment variables.');
}

// Define API endpoints
enum API_ENDPOINTS {
  USERS = '/users',
  POSTS_NEWEST = '/posts/newest',
  POST_DETAIL = '/posts/:post_id',
  POST_OUTSTANDING = '/posts/mostview'
}

// Function to construct API URLs
// Function to construct API URLs with parameters
const buildApiUrl = (endpoint: API_ENDPOINTS, params: Record<string, string | number> = {}): string => {
  let apiUrl = apiBaseUrl + endpoint;

  // Replace parameter placeholders with actual values
  for (const [param, value] of Object.entries(params)) {
    apiUrl = apiUrl.replace(`:${param}`, String(value));
  }

  return apiUrl;
};

// Function to fetch data from the API
const fetchData = async (endpoint: API_ENDPOINTS, params: Record<string, string | number> = {}): Promise<any> => {
  try {
    const url = buildApiUrl(endpoint, params);
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { API_ENDPOINTS, fetchData };
