import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IContactProviderProps {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ICont {
  contact: IContact;
}

export interface IRegisterContactResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface IContactContext {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  currentContact: IContact | null;
  setCurrentContact: Dispatch<SetStateAction<IContact>>;

  contacts: IContact[] | [];
  setContacts: Dispatch<SetStateAction<IContact[] | []>>;

  rechargeContact: boolean;
  setRechargeContact: Dispatch<SetStateAction<boolean>>;

  registerContact: (data: IContact) => void;
  editContact: (data: IContact) => void;
  deleteContact: () => void;
}
