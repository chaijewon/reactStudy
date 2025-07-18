import { useState,useEffect,Fragment } from "react";
import axios from "axios";
function MusicList(){
    const [music,setMusic]=useState([])
    const [key,setKey]=useState('')
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
   useEffect(()=>{
      axios.get('http://localhost:3000/music.json')
         .then(response=>{
            response.data.items.sort((a, b) => a.mno - b.mno)
            console.log(response.data.items)
            setTotalpage(Math.ceil(response.data.items.length/10))
            setMusic(response.data.items.slice((curpage*10)-10,curpage*10))
         })
   },[curpage])

   const onselect=(m)=>{
      setKey(m.key)
   }
   const prev=()=>{
      setCurpage(curpage>1?curpage-1:curpage)
   }
   const next=()=>{
      setCurpage(curpage<totalpage?curpage+1:curpage)
   }
   return (
     <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
               <tr>
                  <th className="text-center"></th>
                  <th className="text-center">곡명</th>
                  <th className="text-center">가수명</th>
               </tr>
            </thead>
            <tbody>
               {
                  music.map(m=>
                     <tr onClick={()=>onselect(m)}>
                        <td className="text-center">
                          <img src={m.poster} style={{"width":"30px","height":"30px"}}/>
                        </td>
                        <td>{m.title}</td>
                        <td>{m.singer}</td>
                     </tr>
                  )
               }
               <tr>
                  <td className="text-center" colSpan={"3"}>
                     <button className="btn-sm btn-success" onClick={prev}>이전</button>
                     {curpage} page / {totalpage} pages
                     <button className="btn-sm btn-info" onClick={next}>다음</button>
                  </td>
               </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-4">
         {
            key && 
              <embed src={"http://youtube.com/embed/"+key} style={{"width":"300px","height":"300px"}}></embed>
         }
        </div>
     </div>
   )
}
export default MusicList;