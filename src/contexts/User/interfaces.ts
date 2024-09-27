import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInResponse {
  user: IUser;
  token: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
}

export interface IRegisterUserResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  avatar_url: string | null;
}

export interface IUserContext {
  openModalUpdateUser: boolean;
  setOpenModalUpdateUser: Dispatch<SetStateAction<boolean>>;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  signIn: (data: ISignIn) => void;
  registerUser: (data: IRegisterUser) => void;
  updateUser: (data: IRegisterUser) => void;
  loading: boolean;
  deleteUser: () => void;
}
