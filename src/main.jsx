// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import { Provider } from 'react-redux'
import {store} from '../src/redux/Store/store.js'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
      <main className="dark text-foreground bg-background w-lvw h-lvh">
      <App />
      </main>
      </Provider>
      
    </NextUIProvider>
  </React.StrictMode>
)