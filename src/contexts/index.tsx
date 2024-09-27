import { ContactProvider } from './Contact';
import { IGlobalProvider } from './interfaces';
import { UserProvider } from './User';

export const GlobalProvider = ({ children }: IGlobalProvider) => {
  return (
    <ContactProvider>
      <UserProvider>{children}</UserProvider>
    </ContactProvider>
  );
};
