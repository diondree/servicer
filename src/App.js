import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Store from './context';
// import reducer from './reducer';

// import { usePersistedContext, usePersistedReducer } from './usePersist';

import Header from './components/Header';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import Signup from './components/SignupForm';
import Login from './components/LoginForm';

function App() {
  // create a global store to store the state
  //   const globalStore = usePersistedContext(useContext(Store), 'state');

  // `todos` will be a state manager to manage state.
  //   const [state, dispatch] = usePersistedReducer(
  //     useReducer(reducer, globalStore),
  //     'state' // The localStorage key
  //   );

  return (
    // <Store.Provider value={{ state, dispatch }}>
    <div>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={ServiceList} />
          <Route exact path="/services" component={ServiceList} />
          <Route exact path="/services/add" component={ServiceForm} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </div>
    // </Store.Provider>
  );
}

export default App;
