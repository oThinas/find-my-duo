import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { App } from './App'
import { ModalContextProvider } from './contexts/ModalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />

      <Toaster
        toastOptions={{
          style: {
            maxWidth: '1000px',
            fontFamily: 'Inter, sans-serif;',
            fontWeight: '600',
            color: 'white',
            backgroundColor: '#2a2634'
          },
          success: {
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#e73f5d',
              secondary: 'white',
            },
          }
        }}
      />
    </ModalContextProvider>
  </React.StrictMode>
)
