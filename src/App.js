import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  )
}

export default App
