import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import AllProducts from './Components/AllProductsPage/AllProducts';
import {Provider} from 'react-redux';
import { store } from './Redux/store';

const router = createBrowserRouter([
  {path: "/", element:<NavBar/>,
    children: [
      {path: '', element:<AllProducts/>}
    ]
  }
])

function App() {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </>
  );
}

export default App;
