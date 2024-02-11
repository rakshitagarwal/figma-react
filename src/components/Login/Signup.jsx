import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/authSlice.js";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const signupHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(
        signup({
          firstName,
          lastName,
          email,
          password,
        })
      )
        .then((response) => {
          toast.info(`${response.message}`, { autoClose: 500 });
          usenavigate("/login");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (firstName === "" || firstName === null) {
      result = false;
      toast.warning("Please Enter firstName", { autoClose: 500 });
    }
    if (lastName === "" || lastName === null) {
      result = false;
      toast.warning("Please Enter lastName", { autoClose: 500 });
    }
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
        <form onSubmit={signupHandler} className="container">
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
              <h2>Signup</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <h6>Firstname *</h6>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                />
              </div>
              <br />
              <div className="form-group">
                <h6>Lastname *</h6>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                />
              </div>
              <br />
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
                Signup
              </button>
              &nbsp;
              <button
                type="click"
                className="btn btn-primary"
                onClick={() => usenavigate("/login")}
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
