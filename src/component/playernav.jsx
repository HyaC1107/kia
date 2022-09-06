import { Link } from "react-router-dom";

function PlayerNav() {
    
    return ( 
    <ul className="nav justify-content-end bg-dark playerNav">
        <li className="nav-item">
            <Link className="nav-link active" to="/player">전체</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/pitcher">투수</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/catcher">포수</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/infielder">내야수</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/player/outfielder">외야수</Link>
        </li>
    </ul> );
}

export default PlayerNav;