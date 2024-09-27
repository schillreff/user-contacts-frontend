import { GlobalProvider } from './contexts';
import { RoutesMain } from './routes';
import { GlobalStyle } from './styles/global';
import { ResetStyle } from './styles/reset';

function App() {
  return (
    <GlobalProvider>
      <ResetStyle />
      <GlobalStyle />
      <RoutesMain />
    </GlobalProvider>
  );
}

export default App;
