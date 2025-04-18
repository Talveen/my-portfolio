import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Define a basic theme or use an empty object
const theme = extendTheme({}) // Or you can omit this entirely and pass an empty object.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ChakraProvider with 'value' prop */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
