import {BrowserRouter as Router,Routes,Route } from "react-router";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Detail from "./components/food/Detail";
/*
   Router : URL주소에 따라 화면 찾기 
   Routes : 화면을 묶어서 관리 
   Route : 화면 
*/
function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/food_detail/:fno" element={<Detail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
