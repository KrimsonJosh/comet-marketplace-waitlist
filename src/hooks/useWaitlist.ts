import { useState } from 'react';
import { WaitlistAPI, WaitlistResponse } from '../lib/api';

export interface UseWaitlistReturn {
  isLoading: boolean;
  error: string | null;
  success: string | null;
  submitWaitlist: (email: string, name?: string) => Promise<void>;
  reset: () => void;
  showNotification: (message: string, type: 'success' | 'error') => void;
}

export function useWaitlist(): UseWaitlistReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const submitWaitlist = async (email: string, name?: string) => {
    // Validate email before making API call
    if (!email || !email.trim()) {
      setError('Please enter your UTD email address');
      return;
    }

    if (!email.toLowerCase().endsWith('@utdallas.edu')) {
      setError('Please use your UTD email address (must end with @utdallas.edu)');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response: WaitlistResponse = await WaitlistAPI.joinWaitlist(email, name);
      setSuccess(response.message);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to join waitlist. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(null);
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    if (type === 'success') {
      setSuccess(message);
    } else {
      setError(message);
    }
  };

  return {
    isLoading,
    error,
    success,
    submitWaitlist,
    reset,
    showNotification,
  };
} 