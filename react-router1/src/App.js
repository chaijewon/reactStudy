import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/main/Header';
import Home from './components/main/Home';
import YoutubeFind from './components/youtube/YoutubeFind';
import MusicList from './components/music/MusicList'
function App() {
  return (
     <Router>
       <Header/>
       <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/find" element={<YoutubeFind/>}/>
          <Route path="/music" element={<MusicList/>}/>
        </Routes>
       </div>
     </Router>
  );
}

export default App;
