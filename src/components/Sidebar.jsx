import { NavLink } from "react-router-dom";
function Sidebar() {
    return(
        <div>
            <h2>ShamStore</h2>
            <NavLink to="Dashboard">Dashboard</NavLink>
            <NavLink to="Users">Usres</NavLink>
            <NavLink to="Products">Products</NavLink>
            <NavLink to="Orders">Orders</NavLink>



        </div>
    
    );




}
export default Sidebar; 