export interface LoginCredentials {
  email: string;
  password: string;
}

export interface CreateUser extends LoginCredentials {
  firstName: string;
  lastName: string;
}

export interface User extends CreateUser {
  id: string;
}
