import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import HomePage from './pages/home/Home';
import Map from './pages/map/Map';
import Post from './pages/posts/Posts'
import './App.css';


import{
    createBrowserRouter,
    Outlet,
    RouterProvider
} from 'react-router-dom';
// import NewsDetail from './pages/SinglePosts';

const Layout = () => {
    return(
        <>
         <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    )
}

// creating layout

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
              {
                path: "/",
                element: <HomePage/>
              },
              {
                path: "/map",
                element: <Map/>
              },
              {
                path: "/posts",
                element: <Post/>
              },
              // {
              //   path: "/post/:id",
              //   element: <NewsDetail/>
              // },
        ]
    }
]) 

// something is here


function Main(){
    return(
         <div className='app'>
            <div className='Maincontainer'>
                <RouterProvider router={router}/>

            </div>

         </div>
    )
}
export default Main