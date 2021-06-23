import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';
import { AuthProvider } from './contexts/AuthContext';
import { Room } from './Pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
