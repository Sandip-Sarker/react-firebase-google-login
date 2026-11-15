import Navbar from '../Component/Navbar.jsx';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init.js';
import { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";


function Login() {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            console.log("Google login successful:", result.user);
        }).catch((error) => {
            console.error("Error during Google login:", error);
        });
        
    }

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            console.log("User logged out successfully.");
        }).catch((error) => {
            console.error("Error during logout:", error);
        });
    };

    return (
        <div>
            <Navbar />
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>

            <div>
                {user && (
                    <div>
                        <p>Welcome, {user.displayName}!</p>
                        <img src={user.photoURL} alt="Profile" />
                    </div>
                )}
            </div>

            <div>
                {!user && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleGoogleLogin}>
                        Login with Google
                    </button>
                )}
                {user && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default Login;