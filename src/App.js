import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *    - RestaurantCard
 *      - Image
 *      - Name of Restaurant, Rating, cusine, etc
 * Footer
 * - copyright
 * - Links
 * - Address
 * - Contact
 */


const AppLayout=()=>{
    return (
        <div className="app"> 
        <Header />
        <Outlet />
        </div>
    )
}  

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            ,
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }

        ],
        errorElement : <Error />,
    }
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);  //syntax for React element
root.render(<RouterProvider router={appRouter}></RouterProvider>); //syntax for React Functional Component