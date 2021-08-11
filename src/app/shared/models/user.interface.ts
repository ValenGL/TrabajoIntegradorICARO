export type Roles = 'READER' | 'ADMIN';

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
