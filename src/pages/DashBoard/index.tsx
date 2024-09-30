import { useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { ContactList } from '../../components/Contact/ContactList';
import { RegisterContact } from '../../components/Contact/RegisterContact';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { ContactContext } from '../../contexts/Contact';
import { UserContext } from '../../contexts/User';
import { ThemeButton } from '../../styles/Button';
import { ThemeText, ThemeTitle } from '../../styles/Typography';
import { StyledDashBoard } from './styles';

export const DashBoard = () => {
  const { user, openModalUpdateUser } = useContext(UserContext);

  const { openModal, setOpenModal, openModalEdit } = useContext(ContactContext);

  return (
    <>
      {openModal && <RegisterContact />}
      {/* {openModalEdit && <EditContact />}
      {openModalUpdateUser && <UpdateUser />} */}
      <Container>
        <StyledDashBoard>
          <Header />
          <div className='container_user'>
            <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
              {`Olá, ${user?.name}`}
            </ThemeTitle>
            <ThemeText> {user?.email}</ThemeText>
          </div>

          <div className='container_technology'>
            <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
              Contatos
            </ThemeTitle>
            <ThemeButton
              $size='small'
              $buttonColor='gray-3'
              onClick={() => setOpenModal(true)}
            >
              <BsPlusLg />
            </ThemeButton>
          </div>

          <ContactList />
        </StyledDashBoard>
      </Container>
    </>
  );
};
