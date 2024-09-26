import { GlobalProvider } from './contexts';
import { GlobalStyle } from './styles/global';
import { ResetStyle } from './styles/reset';

function App() {
  return (
    <GlobalProvider>
      <ResetStyle />
      <GlobalStyle />
    </GlobalProvider>
  );
}

export default App;
