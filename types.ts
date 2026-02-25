
export interface Trip {
  id: string;
  driverId: string;
  driverName: string;
  driverImage: string;
  driverRating: number;
  origin: string;
  destination: string;
  time: string;
  duration: string;
  price: number;
  seats: number;
  hasMate: boolean;
  vibe?: string[];
  description?: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  image: string;
  rating: number;
  tripsCount: number;
  isVerified: boolean;
  joinedYear: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}
