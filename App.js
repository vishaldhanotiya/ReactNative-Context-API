/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RouteStack from './src/navigation/RouteStack';
import {BlogProvider} from './src/context';
import {Provider} from './src/context/ContactContext';

const App = () => {
  return (
    <>
      <Provider>
        <BlogProvider>
          <RouteStack />
        </BlogProvider>
      </Provider>
    </>
  );
};

export default App;
