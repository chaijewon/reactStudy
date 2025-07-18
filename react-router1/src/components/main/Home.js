import axios from "axios";
import { useState,useEffect } from "react";
function Home(){
   const [movie,setMovie]=useState([])
   useEffect(()=>{
     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=697729d3f274ce88cf5729d38280fd33')
          .then(response=>{
             console.log(response.data.results)
             setMovie(response.data.results)
          })
   },[])
   return (
     <div className="row">
        {
          movie.map(m=>
            <div class="col-md-3">
               <div class="thumbnail">
                  <a href={"https://www.themoviedb.org/movie/"+m.id} target="_blank">
                     <img src={"https://image.tmdb.org/t/p/w500"+m.poster_path} style={{"width":"230px","height":"250px"}}/>
                     <div class="caption">
                        <p>{m.title}</p>
                     </div>
                  </a>
               </div>
            </div>
          )
        }
     </div>
   )
}
export default Home;