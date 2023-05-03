import { useState } from "react"
import "./signup.scss"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [error, setError] = useState(false)

  const navigate = useNavigate()
  // Error Message State
  const [errorMsg, setErrorMsg] = useState("");
  const HandleSubmission = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill the all fields!");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        // Add username to the DisplayName
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/")
      }
      ).catch(err => {
        setErrorMsg(err.message);
      })
  };
  return (
    <div className="login">
      <form onSubmit={HandleSubmission}>
        <input type="text" placeholder="Name" onChange={(event) =>
          setValues((prev) => ({ ...prev, name: event.target.value }))
        } />
        <input type="email" placeholder="email" onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        } />
        <input type="password" placeholder="password" onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        } />
        <p style={{color: "red"}}>
          {errorMsg}
        </p>
        <button type="submit">Signup</button>
        <p style={{paddingTop: "20px"}}>
          Already have an account? <span>
        <Link to={'/login'}>Login</Link>
          </span>
          </p>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login