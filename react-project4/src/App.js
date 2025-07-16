import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className='container'>
      <div className='col-sm-8'>
        <table className='table'>
          <thead>
            <tr>
              <th className='text-center'>순위</th>
              <th className='text-center'></th>
              <th className='text-center'>영화명</th>
              <th className='text-center'>감독</th>
              <th className='text-center'>장르</th>
            </tr>
          </thead>
          <tbody>
            {
              props.movie.map(m=>
                 <tr className='dataTr'>
                  <td className='text-center'>{m.rank}</td>
                  <td className='text-center'>
                    <img src={"https://www.kobis.or.kr/"+m.thumbUrl} 
                    style={{"width":"30px","height":"30px"}}/>
                  </td>
                  <td>{m.movieNm}</td>
                  <td>{m.director}</td>
                  <td>{m.genre}</td>
                 </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className='col-sm-4'>

      </div>
    </div>
  );
}

export default App;
