function Header(){
   return (
      <nav class="navbar navbar-inverse">
       <div class="container-fluid">
         <div class="navbar-header">
            <a class="navbar-brand" href="#">React-Router</a>
         </div>
         <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">영화
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
               <li><a href="#">박스오피스</a></li>
               <li><a href="#">실시간 예매율</a></li>
               <li><a href="#">좌석 점유율</a></li>
            </ul>
            </li>
            <li><a href="#">TMDB</a></li>
            <li><a href="#">동영상</a></li>
         </ul>
      </div>
      </nav>
   )
}
export default Header