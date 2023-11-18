import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../Firebase/firebase.config";

const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  //todo  Login with Email and Password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    userLogin(email, password)
      .then(result => {
        console.log(result.user);

        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Logged In Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
        navigate('/');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid email or password!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(error.message)
        form.reset()
      })
  }

  // todo : Google Login
  const handleLoginWithGoogle = () => {
    // console.log('Login with Google')

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user)
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Logged In Successfully',
          showConfirmButton: false,
          timer: 1500
        })

        navigate('/')
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="menu p-4 w-96 border-sky-500 border-4 bg-white rounded-lg text-black font-medium">
        {/* Sidebar content here */}

        <div className="flex items-center justify-center h-10 py-10 bg-[#4fabcf] text-white text-center text-3xl rounded-lg">
          <div>
            Login
          </div>
        </div>
        <form className="text-center" onSubmit={handleLogin}>
          <div className="mt-6">
            <label htmlFor="" className=" text-lg">Email</label>
            <br />
            <input className="border-2 rounded-lg border-blue-400 w-3/4 p-2 bg-white" placeholder="Your email" type="text" name="email" required />
          </div>

          <br />
          <div>
            <label htmlFor="" className="mr-1 text-lg">Password</label>
            <br />
            <input className="p-2 w-3/4 rounded-lg bg-white border-2 border-blue-400" type="password" placeholder="Your Password" name="password" required />
          </div>
          <br />
          {/* <br /> */}
          <input type="submit" value="Login" className="mb-4 btn border-2 btn-outline btn-primary" />
        </form>

        <div className="flex justify-around items-center mb-5">
          <p className="text-lg">Don't have an account? Please
          </p>

          <Link to="/register">
            <button className="cursor-pointer text-lg text-pink-600"> Sign Up</button>
          </Link>
        </div>

        <button type="button" onClick={handleLoginWithGoogle} className="w-[88%] mx-auto mb-3 px-10 py-3 rounded-md text-sm text-white font-semibold bg-red-500">SIGN IN WITH GOOGLE</button>
      </ul>
    </div>
  );
};

export default LoginPage;