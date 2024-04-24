import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import logoUPT from "../assets/icons/logo-upt.png";
import iconUser from "../assets/icons/user.svg";
import iconPassword from "../assets/icons/security-user.svg";
import iconNIM from "../assets/icons/lock.svg";
import iconNama from "../assets/icons/user-octagon.svg";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <div className="grid lg:grid-cols-2 h-[100vh] overflow-x-hidden md:grid-cols-1">
      <div className="flex flex-col justify-center items-center h-full pl-0 lg:px-[38px] pt-0 lg:py-14">
        <div className="w-2/3 flex justify-start mb-8 items-center gap-3 ">
          <img
            src={logoUPT}
            alt="Logo UPT"
            className="w-[60px] h-[57px] lg:w-[79px] lg:h-[76px]"
          />
          <h1 className="font-poppins font-extrabold text-white text-3xl lg:text-4xl">
            <span className="text-secondaryHover">UPT</span>KOMP
          </h1>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between gap-7 ">
          <h2 className="font-poppins font-extrabold text-3xl lg:text-4xl text-white">
            Sign Up.
          </h2>
          <p className="text-textSecondary">
            Sign up with your data to register at{" "}
            <span className="text-secondaryHover font-bold">UPT</span>
            <span className="text-white font-bold">KOMP</span>
          </p>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between my-8 gap-4 ">
          <InputField
            type="text"
            name="nim"
            placeholder="Nomor Induk Mahasiswa"
            iconPath={iconNIM}
          ></InputField>
          <InputField
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            iconPath={iconNama}
          ></InputField>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            iconPath={iconUser}
          ></InputField>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            iconPath={iconPassword}
          ></InputField>
        </div>
        <div className="w-2/3 flex flex-col items-start justify-between gap-8">
          <Buttons placeholder="Sign Up" onClick={handleRegister}></Buttons>
          <p className="text-textSecondary">
            Already have an account?{" "}
            <Link to="/login" className="text-secondaryHover font-bold">
              Sign In here
            </Link>
          </p>
        </div>
      </div>
      <div className="h-full bg-cover bg-center auth-right hidden lg:block"></div>
    </div>
  );
}

export default Register;
