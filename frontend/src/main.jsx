import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<Auth0Provider
domain="dev-48vowqt1azcgd0q5.us.auth0.com"
clientId="uxpRPg3qJ3ExyFE1rx446fExAq1ylMY3"
authorizationParams={{
  redirect_uri: window.location.origin
}}>

<App />
</Auth0Provider>


)
