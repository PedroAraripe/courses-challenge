import React from 'react';
import { createRoot } from 'react-dom/client';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faPhoneAlt,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import './styles/global.css';

import App from './App';
import Footer from './common/components/Footer';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

library.add(
  faCheck,
  faPhoneAlt,
  faUser,
  faSearch,
)

const WrapperContainerX = styled.div`
  max-width: 100vw;
  overflow: clip;
`;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrapperContainerX>
      <Provider store={store}>
          <App />
        <Footer />
      </Provider>   
    </WrapperContainerX>
  </React.StrictMode>
);