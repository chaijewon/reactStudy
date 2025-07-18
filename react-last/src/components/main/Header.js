import {NavLink} from "react-router-dom"
// 메뉴 => 클릭 <a>(X) => NavLink를 이용한다
function Header(){
  // HTML을 전송 => index.html로 전송 
  return (
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">React</a>
        </div>
        <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">영화
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
            <li><a href="#">박스오피스</a></li>
            <li><a href="#">실시간 예매률</a></li>
            <li><a href="#">좌석 점유율</a></li>
            </ul>
        </li>
        <li><a href="#">동영상</a></li>
        <li><a href="#">뮤직</a></li>
        <li><a href="#">TMDB영화</a></li>
        </ul>
    </div>
    </nav>
  )

}
// 등록 
export default Header