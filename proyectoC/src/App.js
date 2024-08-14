// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';
// import Header from './pages/Header';
// import Cards from './pages/Cards.js';


// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         { <Route path="/" exact element={<Cards />} /> }
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./pages/Header";
import Cards from "./pages/Cards";

function App() {
    const [suggestedWeight, setSuggestedWeight] = useState(0);

    const handleSugerir = (weight) => {
        setSuggestedWeight(Number(weight));
    };

    return (
        <div>
            <Header onSugerir={handleSugerir} />
            <Cards suggestedWeight={suggestedWeight} />
        </div>
    );
}

export default App;



