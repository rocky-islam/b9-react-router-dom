import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Root from './components/Root/Root'
import UserDetails from './components/User/UserDetails'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Root></Root>,
    
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <User></User>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/user/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element : <UserDetails></UserDetails>
      },
    ]
    
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* <App></App> */}
    </RouterProvider>
  </StrictMode>,
)
