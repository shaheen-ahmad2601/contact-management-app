// import { useLocation } from "react-router-dom";
// import './App.css';
// import React from 'react';
// import SideBar from './Components/SideBar';
// import AllRoutes from './Pages/AllRoutes';
// // import background from "./bg.png"

// function App() {

//   const location = useLocation();
//   const currentRoute = location.pathname;
 
//   return (

//     <div className="App">
//       <h1 className='z-50 w-full text-left fixed shadow shadow-slate-700 top-0 text-2xl text-white bg-slate-950 font-bold p-4'>
//         {
//           currentRoute === "/" ? 'Contact Management App' : currentRoute === "/contact_form" ? "Contacts" : "Charts and Maps"
//         }
//       </h1>
//       <div className='flex w-full '>
//         <div className='sticky  top-0 h-screen'>
//           <SideBar />
//         </div>
//         <div className='w-full'>
//           <AllRoutes />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  // Get current location from React Router
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <h1 className="z-50 w-full text-left fixed shadow shadow-slate-700 top-0 text-2xl text-white bg-slate-950 font-bold p-4">
        {
          currentRoute === "/" ? 'Contact Management App'
          : currentRoute === "/contact_form" ? "Contacts"
          : "Charts and Maps"
        }
      </h1>
      <div className="flex w-full">
        <div className="sticky top-0 h-screen">
          <SideBar />
        </div>
        <div className="w-full">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
