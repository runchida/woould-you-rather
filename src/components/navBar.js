import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/add">New Question</Link>
            <Link to="/leaderboard">Leaderboard</Link>
        </div>
    );
}

export default NavBar;
