import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Register from './components/section/Register.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.tsx'
import { Toaster } from 'react-hot-toast'



const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
  },
  {
    
      path : '/register',
      element : <Register/>
    
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
       
   <Provider store={store}>

     <RouterProvider router={router}/>
     <Toaster position='top-right' />
   </Provider>
   
  </StrictMode>,
)
