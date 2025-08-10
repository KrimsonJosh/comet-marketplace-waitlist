const API_BASE_URL = '/api/waitlist';

export interface WaitlistEntry {
  email: string;
  name?: string;
}

export interface WaitlistResponse {
  message: string;
  entry?: Record<string, unknown>;
}

export class WaitlistAPI {
  private static async makeRequest(endpoint: string, data: WaitlistEntry): Promise<WaitlistResponse> {
    try {
      console.log('Making API request to:', `${API_BASE_URL}${endpoint}`);
      console.log('Request data:', data);

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error response:', errorData);
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Success response:', result);
      return result;
    } catch (error) {
      console.error('Waitlist API error:', error);
      throw error;
    }
  }

  static async joinWaitlist(email: string, name?: string): Promise<WaitlistResponse> {
    const data: WaitlistEntry = {
      email: email.trim().toLowerCase(),
      ...(name && { name: name.trim() }),
    };

    return this.makeRequest('/join', data);
  }
} 