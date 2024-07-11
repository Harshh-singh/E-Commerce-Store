import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import AllProducts from './Components/AllProductsPage/AllProducts';

const router = createBrowserRouter([
  {path: "/", element:<NavBar/>,
    children: [
      {path: '', element:<AllProducts/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
