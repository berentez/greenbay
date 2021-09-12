import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/common/login/Login';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/signup';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar authorization="true"></Navbar>
          <Switch>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
