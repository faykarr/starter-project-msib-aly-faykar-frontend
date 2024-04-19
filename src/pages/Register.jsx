import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <div className="grid lg:grid-cols-2 h-[100vh] overflow-x-hidden md:grid-cols-1">
      <div className="flex flex-col md:items-center lg:items-start md:justify-center lg:justify-start h-full md:pl-0 lg:pl-[102px] md:pt-0 lg:pt-14 ">
        <div className="flex justify-between mb-8 items-center gap-3">
          <img
            src="./src/assets/icons/logo-upt.png"
            alt="Logo UPT"
            className="w-[79px] h-[76px]"
          />
          <h1 className="font-poppins font-extrabold text-white text-4xl">
            <span className="text-secondaryHover">UPT</span>KOMP
          </h1>
        </div>
        <div className="flex flex-col items-start justify-between gap-7">
          <h2 className="font-poppins font-extrabold text-4xl text-white">
            Sign Up.
          </h2>
          <p className="text-textSecondary md:w-64 lg:w-96">
            Sign up with your data to register at{" "}
            <span className="text-secondaryHover font-bold">UPT</span>
            <span className="text-white font-bold">KOMP</span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-between my-8 gap-4 w-full">
          <InputField
            type="text"
            name="nim"
            placeholder="Nomor Induk Mahasiswa"
            iconPath="./src/assets/icons/lock.svg"
          ></InputField>
          <InputField
            type="text"
            name="username"
            placeholder="Nama Lengkap"
            iconPath="./src/assets/icons/user-octagon.svg"
          ></InputField>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            iconPath="./src/assets/icons/user.svg"
          ></InputField>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            iconPath="./src/assets/icons/security-user.svg"
          ></InputField>
        </div>
        <div className="flex flex-col items-start justify-between gap-8">
          <Buttons placeholder="Sign Up" onClick={handleRegister}></Buttons>
          <p className="text-textSecondary">
            Already have an account?{" "}
            <Link to="/login" className="text-secondaryHover font-bold">
              Sign In here
            </Link>
          </p>
        </div>
      </div>
      <div className="h-full bg-cover bg-center auth-right md:hidden lg:block"></div>
    </div>
  );
}

export default Register;
