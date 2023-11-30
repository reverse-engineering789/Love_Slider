import React from "react";
import reviews from "./data";
import './App.css';
import Testimonials from "./components/Testimonials";
const App = () => {
  return(
     <div className="mainContainer">
       <div className="mainHeading">
          <h1 className="Heaing-text">Our Testimonials</h1>
            <div className="LineContainer">
            <div className="Line"></div>
            </div>
          <Testimonials reviews = {reviews}/>
       </div>
     </div>
  );
};

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
