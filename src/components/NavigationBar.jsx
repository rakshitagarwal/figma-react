import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice.js";
import "../style/navbar.css";


const NavigationBar = () => {
  const LoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsloggedin] = useState(false);

  useEffect(() => {
    if (LoggedIn) setIsloggedin(true);
  }, [LoggedIn]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    setIsloggedin(false);
    dispatch(authActions.logout());
  };

  return (
    <div className="nav5">
      <div className="nav6">
        <div className="nav1">
          <div className="nav7" />
          <div>
            <Link to="/" className="nav-link">
              <div className="nav3">Linkedin</div>
            </Link>
          </div>
        </div>
        {isLoggedIn && (
          <div className="nav1">
            <div className="nav2">
              <Link to="/users" className="nav-link">
                <div className="nav3">Jobs</div>
              </Link>
            </div>
            <div className="nav2">
              <Link to="/hoc" className="nav-link">
                <div className="nav3">HOC</div>
              </Link>
            </div>
            <div className="nav2">
              <Link to="/context" className="nav-link">
                <div className="nav3">Employers/Post job</div>
              </Link>
            </div>
            <button
              type="click"
              className="btn btn-primary"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div style={{ textAlign: "right" }}>
            <button
              type="click"
              className="btn btn-success"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
            &nbsp;
            <button
              type="click"
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
