import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = 'https://comet-market-backend.onrender.com';
const WAITLIST_API_KEY = process.env.WAITLIST_API_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Proxying request to backend:', body);
    
    const response = await fetch(`${API_BASE_URL}/waitlist/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-waitlist-key': WAITLIST_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    console.log('Backend response:', data);
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
} 