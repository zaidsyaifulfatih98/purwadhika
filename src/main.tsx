import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './pages/products/page.tsx';
import TailwindPage from './pages/tailwindcss/page.tsx';
import UseRefPage  from './pages/react-hooks/use-ref/page.tsx';
import UseStatePage from './pages/react-hooks/use-state/page.tsx';
import todoPage from './pages/react-hooks/ToDo/todo.tsx';
import useMemoPage from './pages/react-hooks/use-memo/use-memo.tsx';
import crudPage from './pages/react-hooks/CRUD/CRUD.tsx';
import Home from './pages/CompanyWebsite/page.tsx';

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
      Component : todoPage
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

  ]
)


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
