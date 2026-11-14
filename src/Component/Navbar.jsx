import { Link } from 'react-router'

function Navbar() {
    return (
        <div className="nav p-4 bg-gray-200 flex justify-center gap-4"> 
            <Link to="/home" >Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Navbar;