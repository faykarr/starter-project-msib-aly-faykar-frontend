import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoUPT from "../assets/icons/logo-upt.png";
import iconUser from "../assets/icons/user.svg";
import iconPassword from "../assets/icons/security-user.svg";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform validation
    if (username === "faykarr" && password === "faykar30") {
      navigate("/profile");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh] overflow-x-hidden">
      <div className="flex flex-col justify-center items-center h-full md:pl-0 lg:px-[38px] md:pt-0 lg:py-14">
        <div className="w-2/3 flex justify-start mb-14 items-center gap-3">
          <img
            src={logoUPT}
            alt="Logo UPT"
            className="w-[60px] h-[57px] lg:w-[79px] lg:h-[76px]"
          />
          <h1 className="font-poppins font-extrabold text-white text-3xl lg:text-4xl">
            <span className="text-secondaryHover">UPT</span>KOMP
          </h1>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between gap-7">
          <h2 className="font-poppins font-extrabold text-3xl lg:text-4xl text-white">
            Sign In.
          </h2>
          <p className="text-textSecondary w-full">
            Sign in with your data that you entered during registration at{" "}
            <span className="text-secondaryHover font-bold">UPT</span>
            <span className="text-white font-bold">KOMP</span>
          </p>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between my-8 gap-4">
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            iconPath={iconUser}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></InputField>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            iconPath={iconPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></InputField>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between gap-8">
          <Buttons placeholder="Sign In" onClick={handleLogin}></Buttons>
          <p className="text-textSecondary">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-secondaryHover font-bold">
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
      <div className="h-full bg-cover bg-center auth-right hidden lg:block"></div>
    </div>
  );
}

export default Login;
