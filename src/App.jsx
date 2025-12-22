import { Link, Route, Routes } from "react-router-dom"
import TypesofComponents from "./Components/TypesofComponents"
import HelloClass from "./Components/HelloClass"
import HelloFunction from "./Components/HelloFunction"
import Hooksdemo from "./Components/Hooksdemo"
import PostDetails from "./Components/PostDetails"
import PostComponets from "./Components/PostComponents"
import { RegistrationForm } from "./Components/RegistrationForm"

function App() {
  return (<>
    <nav>
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/typesofcomponents">Types of components</Link></li>
        <li><Link to="/hooks">Hooks</Link></li>
        <li><Link to="/postscomponents">Posts</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<div><h1>Welcome...</h1></div>} />
      <Route path="register" element={<RegistrationForm/>}/>
      <Route path="/typesofcomponents" element={<TypesofComponents />}>
        <Route path="helloclass" element={<HelloClass />} />
        <Route path="hellofunction" element={<HelloFunction />} />
      </Route>
      <Route path="/hooks" element={<Hooksdemo/>}/>
      <Route path="/postscomponents" element={<PostComponets/>}/>
      <Route path="/postscomponents/:id" element={<PostDetails/>}/>
    </Routes>
  </>
  )
}

export default App
