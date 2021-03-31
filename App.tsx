import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Home from './src/screens/Home';
import {SafeAreaProvider} from "react-native-safe-area-context";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
