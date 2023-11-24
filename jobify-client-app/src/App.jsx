import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomeLayout, Register, Login, DashboarLayout, Landing, Error, AnotherLanding, AnotherRegister
        ,Admin, AllJob, AddJob, EditJob, Profile, Stats} from './pages';
import {loader as dashboardLoader} from "./pages/DashboardLayout.jsx";
import {loader as allJobsLoader} from "./pages/AllJob.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element : <HomeLayout/>,
    errorElement : <Error/>,
    children : [
      {
        index : true,
        element : <AnotherLanding/>
      },
      {
        path: 'home',
        element : <Landing/>,
      },
      {
        path: 'reg',
        element : <Register/>,
      },
      {
        path: 'login',
        element : <Login/>,
      },
      {
        path: 'register',
        element : <AnotherRegister/>,
      },
      {
        path: 'dashboard',
        element : <DashboarLayout/>,
        loader : dashboardLoader,
        children : [
          {
            index :true,
            element : <AddJob/>
          },
          {
            path : 'admin',
            element : <Admin/>
          },
          {
            path : 'stats',
            element : <Stats/>
          },
          {
            path : 'all-job',
            element : <AllJob/>,
            loader : allJobsLoader,
          },
          {
            path : 'profile',
            element : <Profile/>
          },
          {
            path : 'edit-job/:id',
            element : <EditJob/>
          },
        ]
      }
    ]
  }

]);
const App = ()=> {
  return <RouterProvider router={router}/>;
};
export default App;
