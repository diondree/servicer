import React from 'react';

// import Store from './context';
// import reducer from './reducer';

// import { usePersistedContext, usePersistedReducer } from './usePersist';

import Header from './components/Header';
import ServiceList from './components/ServiceList.js';
import ServiceForm from './components/ServiceForm';

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
      <Header />
      <div className="container">
        <ServiceList />
        <ServiceForm />
      </div>
    </div>
    // </Store.Provider>
  );
}

export default App;
