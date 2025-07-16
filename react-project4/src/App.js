import logo from './logo.svg';
import './App.css';
import { useState,Fragment } from 'react';
// 라이브러리 사용 
/*
    state : 데이터 변경시마다 다시 브라우저로 변경된 데이터를 전송
    const [movie,setMovie]=useState({})
                              ------ 상태 (데이터 변경 감지)
                                             |
                                            화면 변경
    프로그램 단점 => 한번 수행하면 다시 수행 할 수 없다 

    => 1
       2
       3 => 1번부터 다시 수행 => let , var 
       4
       5
       => react는 state 프로그램 (데이터 관리 프로그램)
       LLM /  랭체인 
*/
/*
     1. 전체 구조 요약
        •	App: 영화 목록을 출력하고, 마우스 오버 시 해당 영화의 상세 정보를 오른쪽에 보여줌
        •	MovieDetail: 선택된 영화(movie 객체)를 상세히 보여주는 컴포넌트
        •	useState({}): 상태로 선택된 영화 한 개를 저장
        •	props.movie: 부모 컴포넌트에서 받은 영화 리스트 (배열)

*/
function App(props) {
  const [movie,setMovie]=useState({})
  /*
      const [movie, setMovie] = useState({})
      •	movie: 현재 선택된 영화 정보 (초기값은 빈 객체 {})
      •	setMovie: movie 값을 갱신하여 화면을 다시 렌더링하게 만듦

  */
  /*
     정수 useState(0)
     문자 useState('')
     배열 useState([])

     => useEffect : 서버를 연결할때 사용 
        --------- mounted 
                    |
                  처음 시작 => window.onload 
     => router 
         | 화면 변경 
     --------------------- react 기초 
     | Redux / TanStack-Query 
                    | TypeScript 
     | 개인 프로젝트 : 가산점 : 10%
     | = react 가능자 65%
     | = CI/CD => 우대 
  */
  const detail=(m)=>{
    //movie=m
    setMovie(m) // 값을 저장 movie. => 처음부터 다시 실행
  }
  /*
      •	각 행(tr)에 onMouseOver 이벤트로 연결됨
      •	마우스를 올리면 m 영화 객체가 movie 상태로 설정됨 → 오른쪽 MovieDetail 갱신

  */
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
          {/*
                 •	각 영화 정보를 한 줄씩 렌더링
                 •	onMouseOver: 마우스 올릴 때마다 movie 상태 갱신됨

          */}
          <tbody>
            {
              props.movie.map(m=>
                 <tr className='dataTr' onMouseOver={()=>detail(m)}>
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
        <MovieDetail movie={movie}/>
        {/*
             •	App에서 현재 상태인 movie를 props로 전달
             •	movie.thumbUrl, movie.movieNm, movie.director 등 상세 정보 표시

        */}
      </div>
    </div>

  );
}
function MovieDetail(props){
  return (
    <Fragment>
     <h1 className='text-center'>영화 상세</h1>
     {/*
          주의: 초기 상태는 {}이므로 undefined 방지 처리가 필요할 수도 있음
          == 리액트 동작 이해
             리액트는 state 변경이 있을 때만 컴포넌트를 다시 렌더링함 → DOM 변경 최소화.
             •	새로 받은 객체 m으로 상태 변경
             •	오른쪽 MovieDetail에 반영됨 (Virtual DOM → diff → 실제 DOM 반영)
          == useState: 상태 저장. 상태가 변경되면 컴포넌트가 다시 렌더링됨
             detail: 특정 영화 객체를 상태에 저장
             onMouseOver: 이벤트 트리거
             MovieDetail: 상태로 전달된 영화 정보를 표시
          최종 정리 
            주요 개념	:  useState, props, 이벤트(onMouseOver)
            상태 관리	: setMovie()로 상태 갱신 후 UI 재렌더링
            구성 컴포넌트	: App, MovieDetail
            인터랙션 : 마우스를 영화 리스트에 올리면 해당 영화 상세정보 출력
            실제 동작 : React는 Virtual DOM 기반으로 state 변경이 감지되면 필요한 부분만 다시 그림

     */}
     {
       props.movie &&
     <table className='table'>
      <tbody>
        <tr>
          <td width={"30%"} className='text-center' rowSpan={"5"}>
            <img src={"https://www.kobis.or.kr/"+props.movie.thumbUrl} style={{"width":"100%"}}/>
          </td>
          <td colSpan={"2"}>
            <h3>{props.movie.movieNm}</h3>
          </td>
        </tr>
        <tr>
          <th width="15%">감독</th>
          <td width="55%">{props.movie.director}</td>
        </tr>
        <tr>
          <th width="15%">상영일</th>
          <td width="55%">{props.movie.startDate}</td>
        </tr>
        <tr>
          <th width="15%">장르</th> 
          <td width="55%">{props.movie.genre}</td>
        </tr>
        <tr>
          <th width="15%">등급</th>
          <td width="55%">{props.movie.watchGradeNm}</td>
        </tr>
      </tbody>
     </table>
    }
    </Fragment>
  )
  /*
      확장 
      1. 상세보기 클릭으로 변경	 => onMouseOver 대신 onClick으로 상세정보 보기
      2. 선택 상태 강조	 => 선택된 영화 행에 하이라이트 표시
      3. 영화 목록 JSON 외부파일에서 가져오기 =>  (useEffect)	외부 API 혹은 fetch로 데이터 가져오기
      4. React Router로 상세 페이지 분리	=> /movie/:id 경로로 상세정보 라우팅
      5. TypeScript로 전환 =>	컴포넌트 타입 정의
      6. 즐겨찾기(찜) 기능 추가 =>	로컬스토리지 또는 상태에 저장
      7. TanStack Query로 API 관리 =>	서버 상태 캐싱/요청/동기화

  */
}

export default App;
