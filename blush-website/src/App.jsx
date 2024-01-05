import Home from './pages/Home'
import Guidelines from './pages/Guidelines'
import ErrorPage from './pages/ErrorPage'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'

import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/guidelines',
    element: <Guidelines />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
])

function App() {

  return (
      <div className='App'>

        <RouterProvider router={router} />
        
      </div>
  )
}

export default App
