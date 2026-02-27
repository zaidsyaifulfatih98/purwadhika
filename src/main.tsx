import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import ProductsPage from './pages/products/page.tsx';
import TailwindPage from './pages/tailwindcss/page.tsx';
import UseRefPage  from './pages/react-hooks/use-ref/page.tsx';
import UseStatePage from './pages/react-hooks/use-state/page.tsx';
import TodoPage from './pages/react-hooks/ToDo/todo.tsx';
import useMemoPage from './pages/react-hooks/use-memo/use-memo.tsx';
import crudPage from './pages/react-hooks/CRUD/CRUD.tsx';
import Home from './pages/CompanyWebsite/page.tsx';
import HomePage from './pages/profile/page.tsx' ;
import PrivateRoute from './pages/react-hooks/components/PrivateRoute.tsx';
// import Login from './pages/react-hooks/ToDo/login.tsx';
import CartItems from './pages/profile/CartItems.tsx';
import RegisterPage from './pages/profile/components/RegisterPage.tsx';
import Login from './pages/profile/components/login.tsx';
import AdminDashboard from './pages/crudBackendless/pages/AdminDashboard.tsx';
import BlogFeeds from './pages/crudBackendless/pages/BlogFeeds.tsx';
import BlogDetail from './pages/crudBackendless/pages/BlogDetail.tsx';
// import RegisterPage from './pages/registerLogin/RegisterPage.tsx';
// import LoginPage from './pages/registerLogin/LoginPage.tsx';

const router = createBrowserRouter(
  [
    {
      path : '/',
      Component: App
    },
    {
      path : '/products',
      Component : ProductsPage
    },
    
    {
      path : '/tailwindcss',
      Component : TailwindPage
    },
    {
      path : '/react-hooks/use-ref',
      Component : UseRefPage
    },
    {
      path : '/react-hooks/use-state',
      Component : UseStatePage
    },
    {
      path : '/react-hooks/todo',
      element : (
        <PrivateRoute>
          <TodoPage />
        </PrivateRoute>
      )
    },
    {
      path : '/react-hooks/use-memo',
      Component : useMemoPage
    },
    {
      path : '/react-hooks/crud',
      Component : crudPage
    },
    {
      path : '/company-page',
      Component : Home
    },
    // {
    //   path : '/login',
    //   element : <Login/>
    // },
    {
      path : '/tokopedia',
      Component : HomePage
    },
    {
      path : '/tokopedia/cart-item',
      Component : CartItems
    },
    {
      path : '/tokopedia/register',
      Component : RegisterPage
    },
    {
      path : '/tokopedia/login',
      Component : Login
    },
    {
    path: "/crud/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/crud/feeds",
    element: <BlogFeeds />,
  },
  {
    path: "/crud/feeds/:id",
    element: <BlogDetail />,
  },
  {
    path: "*",
    element: <BlogFeeds />,
  },
  // {
  //   path: "/register-login/register",
  //   element: <RegisterPage />,
  // },
  // {
  //   path: "/register-login/login",
  //   element: <LoginPage />,
  // },
    
    
    

  ]
)


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
