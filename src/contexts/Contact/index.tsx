import { createContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import {
    IContact,
    IContactContext,
    IContactProviderProps,
    IRegisterContactResponse,
} from './interfaces';

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [currentContact, setCurrentContact] = useState<IContact>({
    id: 'uuid',
    name: 'Name',
    email: 'email@mail.com',
    phone: '0000000',
  });
  const [rechargeContact, setRechargeContact] = useState(false);

  const [contacts, setContacts] = useState<IContact[]>([]);

  const registerContact = async (data: IContact) => {
    const token = localStorage.getItem('@usercontacts:token');

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const responseRegisterContact = api.post<IRegisterContactResponse>(
      '/contact',
      data,
    );

    toast.promise(responseRegisterContact, {
      loading: 'Registrando...',
      success: () => {
        setOpenModal(false);
        setRechargeContact(!rechargeContact);
        return 'Contato registrado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const editContact = async (data: IContact) => {
    const token = localStorage.getItem('@usercontacts:token');
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const { id } = currentContact;

    const { name, email, phone } = data;
    const responseEditContact = api.patch(`/contact/${id}`, {
      name,
      email,
      phone,
    });

    toast.promise(responseEditContact, {
      loading: 'Editando...',
      success: () => {
        setOpenModalEdit(false);
        setRechargeContact(!rechargeContact);
        return 'Contato alterado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteContact = async () => {
    const token = localStorage.getItem('@usercontacts:token');
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const { id } = currentContact;
    const responseDeleteContact = api.delete(`/contact/${id}`);

    toast.promise(responseDeleteContact, {
      loading: 'Deletando...',
      success: () => {
        setOpenModalEdit(false);
        setRechargeContact(!rechargeContact);
        return 'Contato deletado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const values = useMemo(
    () => ({
      openModal,
      setOpenModal,
      registerContact,
      rechargeContact,
      setRechargeContact,
      openModalEdit,
      setOpenModalEdit,
      currentContact,
      setCurrentContact,
      editContact,
      deleteContact,
      contacts,
      setContacts,
    }),
    [openModal, rechargeContact, openModalEdit, currentContact, contacts],
  );

  return (
    <ContactContext.Provider value={values}>{children}</ContactContext.Provider>
  );
};
