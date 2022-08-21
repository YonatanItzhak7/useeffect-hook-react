import "./About.css";
import { useEffect,useState } from "react";

function About() {
  const [something,setSomething] = useState("Print To Screen")
  useEffect(() => {
    console.log("Alert Mount")
  }, [something]);
  return (
    <div className="about">
      <h1>About</h1>
      <h1>{something}</h1>
      <button onClick={()=>setSomething("Change Print")}>Change</button>
    </div>
  );
}

export default About;
