import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme} >
      <ColorModeSwitcher/>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

