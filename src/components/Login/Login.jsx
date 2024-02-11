import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/authSlice.js";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const ProceedLogin = (event) => {
    event.preventDefault();
    if (validate()) {
      dispatch(login({ email, password }))
        .then((response) => {
          toast.info(`${response.message}`, { autoClose: 500 });
          event.target.reset();
          usenavigate("/", { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter Email", { autoClose: 500 });
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password", { autoClose: 500 });
    }
    return result;
  };

  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className="container">
          <div
            className="card"
            style={{
              backgroundColor: "white",
              border: "5px solid",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <div className="card-header text-center">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <h6>Email *</h6>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <br />
              <div className="form-group">
                <h6>Password *</h6>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
              &nbsp;
              <button
                type="click"
                className="btn btn-primary"
                onClick={() => usenavigate("/register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
