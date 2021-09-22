import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBook from './components/add-book';
import Books from './components/books';
import Login from './components/login';
import Navbar from './components/navbar';
import SignUp from './components/signup';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route exact path="/addBook">
              <AddBook />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
