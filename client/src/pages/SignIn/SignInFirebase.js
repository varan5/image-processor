import gSignIn from "../../../firebase";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory } from "react-router";
//import btnGoogle from "../../assets/btnGoogle.png";
const provider = new GoogleAuthProvider();

const auth = getAuth();

export default function SignIn() {
  const history = useHistory();

  const logoutFromGoogleAuth = () => {
    auth.signOut()
      .then(response => {
        console.log('Logout successfull')
      })
      .catch(error => {
        console.log('Error while logging out')
      })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        if (user) {
          history.push("/enrolled-courses");
        }
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="assets/images/AlgomasteryLogo.png"
          alt="Algomastery"
        />
        {/* <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" /> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign In
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Continue with your google account
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={signInWithGoogle}
                href="#"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                {/* <img className="md:w-auto " src={btnGoogle} alt="" /> */}
              </button>

              <button onClick={logoutFromGoogleAuth}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}