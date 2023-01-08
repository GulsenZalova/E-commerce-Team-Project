import { Link, Route, Routes } from "react-router-dom"
// import './App.css'
import ProjectRoutes from "./routes"

function App() {

  return (
<>


{/* <header>
         <ul>
          <li><Link to={"/"}>Drivers</Link></li>
          <li><Link to={"/details"}>Deatils</Link></li>
          <li><Link to={"/catalog"}>Deatils</Link></li>
         </ul>
</header> */}

<ProjectRoutes/>

</>

  )
}

export default App
