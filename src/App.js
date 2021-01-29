import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styles/styles.css';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config/configStore';
import { login, logout } from './store/actions/auth';

import AppRouter from './routers/AppRouter';
import addDish from './store/reducers/addDish';
import { createStore } from "redux";

const store = createStore(addDish);

// const store = configureStore();
// store.subscribe(() => {
//   console.log(store.getState());
// });


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

store.dispatch(logout());

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
