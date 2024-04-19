import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    // Perform validation
    if (username === "faykarr" && password === "faykar30") {
      navigate("/register");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col md:items-center lg:items-start md:justify-center lg:justify-start h-full md:pl-0 lg:pl-[102px] md:pt-0 lg:pt-20 ">
      <div className="flex justify-between mb-14 items-center gap-3">
        <img
          src="/src/assets/icons/logo-upt.png"
          alt="Logo UPT"
          className="w-[79px] h-[76px]"
        />
        <h1 className="font-poppins font-extrabold text-white text-4xl">
          <span className="text-secondaryHover">UPT</span>KOMP
        </h1>
      </div>
      <div className="flex flex-col items-start justify-between gap-7">
        <h2 className="font-poppins font-extrabold text-4xl text-white">
          Sign In.
        </h2>
        <p className="text-textSecondary md:w-64 lg:w-96">
          Sign in with your data that you entered during registration at{" "}
          <span className="text-secondaryHover font-bold">UPT</span>
          <span className="text-white font-bold">KOMP</span>
        </p>
      </div>
      <div className="flex flex-col items-start justify-between my-8 gap-4 w-full">
        <InputField
          type="text"
          name="username"
          placeholder="Username"
          iconPath="/src/assets/icons/user.svg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></InputField>
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          iconPath="/src/assets/icons/security-user.svg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>
      </div>
      <div className="flex flex-col items-start justify-between gap-8">
        <Buttons placeholder="Login" onClick={handleLogin}></Buttons>
        <p className="text-textSecondary">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-secondaryHover font-bold">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
