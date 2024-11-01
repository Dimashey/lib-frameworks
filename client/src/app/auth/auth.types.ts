export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginReponse {
  accessToken: string;
  userId: string;
}

export interface SignUpDto {
  username: string;
  password: string;
}

export interface SignUpResponse {
  userId: string;
  message: string;
}
