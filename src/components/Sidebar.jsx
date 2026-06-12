import { NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
    return(
        <div className="sidebar">

            <h2 className="sidebar-logo" >ShamStore</h2>
            <NavLink to="/Dashboard" className="sidebar-link">
                Dashboard
            </NavLink>
            <NavLink to="/Users" className="sidebar-link">
                Users
            </NavLink>
            <NavLink to="/Products" className="sidebar-link">
                Products
            </NavLink>
            <NavLink to="/Orders" className="sidebar-link">
                Orders
            </NavLink>
            <NavLink to="/Wallet" className="sidebar-link">
                Wallet
            </NavLink>
            <NavLink to="/FinancialRequests" className="sidebar-link">
                Financial Requests
            </NavLink>
            <NavLink to="/OrdersManagement" className="sidebar-link">
                Orders Management
            </NavLink>
        </div>
    
    ); 
}
export default Sidebar; 