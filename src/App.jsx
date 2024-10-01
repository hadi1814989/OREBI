import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}></Route>
      </Route>
  ))
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
