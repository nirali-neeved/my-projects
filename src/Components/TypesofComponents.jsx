import { Link, Outlet } from "react-router-dom";

const TypesofComponents=()=>{
    return(<>
    <nav>
        <ul>
            <li><Link to="/typesofcomponents/helloclass">Class components</Link></li>
            <li><Link to="/typesofcomponents/hellofunction">Function components</Link></li>
        </ul>
    </nav>
    
    <Outlet/>
       
    </>)
}
export default TypesofComponents;