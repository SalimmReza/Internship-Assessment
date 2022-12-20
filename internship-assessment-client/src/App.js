import logo from './logo.svg';
import './App.css';
import Layout1 from './Pages/Layout1/Layout1';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Layout3 from './Pages/Layout3/Layout3';
import Layout2 from './Pages/Layout2/Layout2';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/layout1",
          element: <Layout1></Layout1>,
        },
        {
          path: "/layout2",
          element: <Layout2></Layout2>,
        },
        {
          path: "/layout3",
          element: <Layout3></Layout3>,
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
