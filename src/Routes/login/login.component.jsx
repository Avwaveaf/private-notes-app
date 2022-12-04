import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../utils/api";
import PropTypes from "prop-types";

export const Login = ({ loginSuccess }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (user) => {
    const { error, data } = await login(user);
    if (!error) {
      loginSuccess(data);
    }
  };
  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();

    loginUser(userData);
  };
  const onChangeFormHandler = (inputName, e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [`${inputName}`]: e.target.value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmitRegisterHandler(e)}>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => onChangeFormHandler("email", e)}
          placeholder="email"
        />
        <input
          type="password"
          value={userData.password}
          onChange={(e) => onChangeFormHandler("password", e)}
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};
Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
