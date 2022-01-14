import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Alert from './components/layout/Alert';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <>
      <AlertProvider>
        <Alert />
      </AlertProvider>
    </>
  );
}

export default App;
