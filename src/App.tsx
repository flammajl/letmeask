import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
