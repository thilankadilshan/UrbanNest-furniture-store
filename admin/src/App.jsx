// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Admin from './Pages/Admin/Admin'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Admin/>
//     </div>
//   )
// }

// export default App
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Admin from './Pages/Admin/Admin';
// import AdminLogin from './Components/AdminLogin/AdminLogin'; // Import AdminLogin

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/adminlogin" element={<AdminLogin />} />
//         <Route path="/admin/*" element={<Admin />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../../../coursework-group_24/E-commerce/admin/src/Components/Navbar/Navbar";
import Admin from "../../../../coursework-group_24/E-commerce/admin/src/Pages/Admin/Admin";
import AdminLogin from "../../../../coursework-group_24/E-commerce/admin/src/Components/AdminLogin/AdminLogin";

const App = () => {
  const location = useLocation();

  // Define routes where the Navbar should not appear
  const hideNavbarRoutes = ["/adminlogin"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
