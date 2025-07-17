import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/main/Header';
import Home from './components/main/Home';
function App() {
  return (
     <Router>
       <Header/>
       <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
       </div>
     </Router>
  );
}

export default App;
