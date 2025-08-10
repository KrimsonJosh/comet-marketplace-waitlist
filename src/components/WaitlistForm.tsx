"use client"

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useWaitlist } from '../hooks/useWaitlist';
import { Loader2 } from 'lucide-react';
import { Notification } from './Notification';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
  className?: string;
}

export function WaitlistForm({ variant = 'hero', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const { isLoading, error, success, submitWaitlist, reset, showNotification } = useWaitlist();

  // Real-time email validation - must end with @utdallas.edu exactly
  const isValidUTDEmail = email.trim() !== '' && 
    email.toLowerCase().endsWith('@utdallas.edu') &&
    email.split('@')[0].length > 0;
  const canSubmit = isValidUTDEmail;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error || success) {
      reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent submission if email is not valid
    if (!canSubmit) {
      return;
    }
    
    try {
      await submitWaitlist(email);
    } catch {
      // Error is already handled in the hook
    }
  };

  const isHeroVariant = variant === 'hero';
  const inputClass = isHeroVariant 
    ? "flex-1 cursor-text" 
    : "flex-1 bg-white/10 text-white placeholder:text-white/70 border-white/20 focus-visible:ring-white cursor-text";
  
  const buttonClass = isHeroVariant
    ? "bg-orange-500 hover:bg-orange-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
    : "bg-white text-orange-500 hover:bg-white/90 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg";

  return (
    <div className={`w-full max-w-sm space-y-2 ${className}`}>
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter your UTD email"
          value={email}
          onChange={handleEmailChange}
          className={`${inputClass} ${email && !isValidUTDEmail ? 'border-red-300 focus-visible:ring-red-500' : ''} ${email && isValidUTDEmail ? 'border-green-300 focus-visible:ring-green-500' : ''}`}
          disabled={isLoading}
          required
        />
        <Button 
          type="submit" 
          className={buttonClass}
          disabled={isLoading || !canSubmit}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            isHeroVariant ? 'Join Waitlist' : 'Join Now'
          )}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500">
        Be the first to know when we launch. UTD email required.
      </p>
      
      {/* Email validation feedback */}
      {email && !isValidUTDEmail && (
        <p className="text-xs text-red-500">
          Please enter a valid UTD email address (must end with @utdallas.edu)
        </p>
      )}
      {email && isValidUTDEmail && (
        <p className="text-xs text-green-500">
          ✓ Valid UTD email address
        </p>
      )}

      {/* Show success popup */}
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Success!</h3>
              <p className="text-sm text-gray-500 mb-4">{success}</p>
              <button
                onClick={() => {
                  setEmail('');
                  reset();
                }}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-red-400">✗</div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
            <button
              onClick={() => {
                setEmail('');
                reset();
              }}
              className="ml-auto text-red-400 hover:text-red-600"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 