import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/main/Header';
import Home from './components/main/Home';
import YoutubeFind from './components/youtube/YoutubeFind';
function App() {
  return (
     <Router>
       <Header/>
       <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/find" element={<YoutubeFind/>}/>
        </Routes>
       </div>
     </Router>
  );
}

export default App;
