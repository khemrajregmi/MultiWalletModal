import axios from 'axios';

interface SignupResponse {
  success: boolean;
  message: string;
  token: string;
}

export const signup = async (walletToken: string): Promise<SignupResponse> => {
  try {
    const response = await axios.post('/api/signup', { walletToken });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 