import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar authorization="true"></Navbar>
          <h1>Hello there!</h1>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
