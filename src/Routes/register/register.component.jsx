import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../utils/api";

export const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  };
  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();

    registerUser(userData);
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
          type="text"
          value={userData.name}
          onChange={(e) => onChangeFormHandler("name", e)}
          placeholder="username"
        />
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
    </div>
  );
};
