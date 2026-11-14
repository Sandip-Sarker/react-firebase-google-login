import Navbar from '../Component/Navbar.jsx';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init.js';


function Login() {

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google login successful:", result.user);
        }).catch((error) => {
            console.error("Error during Google login:", error);
        });
        
    }

    return (
        <div>
            <Navbar />
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>

            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleGoogleLogin}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default Login;