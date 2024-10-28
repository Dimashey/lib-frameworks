export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginReponse {
  accessToken: string;
  userId: string;
}
