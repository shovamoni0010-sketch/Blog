import React from 'react';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Four from './pages/Four.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <div>
      <Home />
      <Signup />
      <Login />
      <Contact />
      <Four />


    </div>
  );
};

export default App;




// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Login from './component/Login.jsx';


// import './index.css';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<Home />} />
//           <Route path="/Login" element={<Login />} />

//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
