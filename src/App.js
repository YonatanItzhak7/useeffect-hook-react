import "./App.css";
import { useState } from "react";
import Router from "./Router.component";
export const pages = ["About","Game","User"]

function App() {
  const [page, setPage] = useState("About");
  return (
    <div className="App">
    {
      pages.map((pageName)=>
        <button  onClick={()=>setPage(pageName)}>{pageName}</button>
      )
    }
      <Router page={page}/>
    </div>
  );
}


export default App;