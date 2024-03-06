// User interface (if implementing user registration and login)
export interface User {
  id: number;
  username: string;
  password: string; // Remember, in real applications store hashed passwords!
  email: string;
  registerTime: Date;
  userType: 'customer' | 'restaurantOwner';
}
