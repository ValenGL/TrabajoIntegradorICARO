export type Roles = 'READER' | 'ADMIN' | null;
// ojo con este null!

export interface User {
  username: string;
  password: string;
}

export interface UserResponse {
  message: string;
  token: string;
  userId: number;
  role: Roles;
}

export interface UserRegister {
  username: string;
  password: string;
  role: string;
  country: string;
  city: string;
}
