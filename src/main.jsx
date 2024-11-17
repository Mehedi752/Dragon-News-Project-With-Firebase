import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainRoot from './MainRoot.jsx'
import AuthProvider from './AuthProvider.jsx'
import Home from './Components/Home.jsx'
import CategoryNews from './Components/CategoryNews.jsx'
import Auth from './AuthLayout/Auth.jsx'
import Login from './AuthLayout/Login.jsx'
import Register from './AuthLayout/Register.jsx'
import NewsLayout from './Components/NewsLayout.jsx'
import PrivateRoute from './AuthLayout/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/01' />
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          )
      }
    ]
  },

  {
    path: '/auth',
    element: <Auth></Auth>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },

  {
    path: 'news/:id',
    element: (
      <PrivateRoute>
        <NewsLayout></NewsLayout>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
