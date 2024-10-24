export interface UserModel {
  id: string;
  username: string;
  password: string;
}

export interface PublicUserModel extends Omit<UserModel, 'password'> {}