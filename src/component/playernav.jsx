import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function PlayerNav() {
    
    return ( 
    <ul className="nav justify-content-end bg-dark playerNav ">
        <li className="nav-item">
            <Link className="nav-link active" to="/player">전체</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/투수">투수</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/포수">포수</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/내야수">내야수</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/외야수">외야수</Link>
        </li>
    </ul> );
}

export default PlayerNav;