import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clerk:
import { ClerkProvider } from '@clerk/clerk-react';
// Redux:
import { Provider } from 'react-redux';
import { store } from './Store/store';
// React Router:
import { HashRouter as Router } from 'react-router-dom';
// Font Awesome:
import '@fortawesome/fontawesome-free/css/all.min.css';
// React Aos:
import 'aos/dist/aos.css';
// React Lazy Loading Image Component:
import 'react-lazy-load-image-component/src/effects/blur.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY} signInForceRedirectUrl="/skillbridge-react/" signUpForceRedirectUrl="/skillbridge-react/" afterSignOutUrl="/skillbridge-react/">
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();