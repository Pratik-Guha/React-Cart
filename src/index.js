import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

