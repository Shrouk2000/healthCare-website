
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact/Contact';

const routes=createBrowserRouter(createRoutesFromElements(
<Route path='/'  element={<Layout/>}>
    <Route index path='/home' element={<Home/>}/>
    <Route  path='/contact' element={<Contact/>}/>

</Route>
))
function App() {
  return (
 
<>
<RouterProvider router={routes}/>
</>
  );
}

export default App;
