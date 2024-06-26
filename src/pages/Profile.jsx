import { Link } from "react-router-dom";
import iconMenu from "../assets/icons/menu.svg";
import iconGallery from "../assets/icons/gallery-export.svg";
import iconAvatar from "../assets/img/avatar.jpg";
import iconUser from "../assets/icons/user.svg";
import iconLogout from "../assets/icons/user-octagon.svg";
import { useState } from "react";

function Navbar() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  return (
    <div className="flex justify-around items-center w-full py-6">
      <div className="w-full pl-10">
        <img src={iconMenu} alt="Menu Icons" className="cursor-pointer" />
      </div>
      <div className="flex flex-row gap-8 text-textSecondary pr-20">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-poppins font-medium text-lg lg:text-xl">
            Faykarr
          </h1>
          <p className="font-light text-sm lg:text-base">Administrator</p>
        </div>
        <img
          src={iconAvatar}
          alt="Avatar"
          className="rounded-full w-14 h-14 lg:w-16 lg:h-16 cursor-pointer transition-all duration-150 hover:ring-2 hover:ring-white"
          onClick={toggleLogoutPopup}
        />
        <div className="relative">
          {showLogoutPopup && (
            <div className="absolute top-20 right-10">
              <div className="flex flex-col w-48 bg-primarySurface rounded-lg">
                <p className="text-textSecondary text-sm font-semibold px-7 pt-4">
                  Hello, Faykarr!
                </p>
                {/* divider */}
                <div className="border-b-[3px] border-primaryBorder my-2"></div>
                {/* divider */}
                <Link
                  to="/profile"
                  className="flex flex-row gap-4 items-center px-7 py-1 text-textSecondary  hover:text-secondaryHover transition-all duration-200"
                >
                  <img src={iconUser} alt="User Icon" className="w-5" />
                  <p className="text-sm font-medium">Profile</p>
                </Link>
                {/* divider */}
                <div className="border-b-[3px] border-primaryBorder my-2"></div>
                {/* divider */}
                <Link
                  to="/login"
                  className="flex flex-row gap-4 items-center px-7 pb-4 pt-1 text-textSecondary hover:text-red-500 transition-all duration-200"
                >
                  <img src={iconLogout} alt="Logout Icon" className="w-5" />
                  <p className="text-sm font-medium">Logout</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Content() {
  const [nama, setNama] = useState("Nasyath Faykar");
  const [email, setEmail] = useState("teknisi.faykarr.stmik-wp.ac.id");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center px-9 lg:px-20 py-7 text-white gap-11">
      <div className="w-full flex flex-col items-center justify-around py-10 rounded-md bg-primaryMain border-[3px] border-primaryBorder shadow-card h-full gap-4">
        <img
          src={iconAvatar}
          alt="Avatar"
          className="rounded-full w-32  lg:w-48"
        />
        <div className="flex flex-col justify-center items-center text-textSecondary">
          <h3 className="font-medium text-lg lg:text-xl">Nasyath Faykar</h3>
          <p className="font-normal text-sm lg:text-base">
            Senior Asisten UPTKOMP
          </p>
        </div>
        <button className="flex flex-row gap-3 justify-around items-center px-6 lg:px-8 py-2 bg-secondaryMain text-white rounded-lg font-medium text-lg hover:bg-secondaryHover transition-all">
          <img src={iconGallery} alt="Gallery Icon" />
          <p className="text-white font-medium text-sm lg:text-base">
            Change Avatar
          </p>
        </button>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-primaryMain border-[3px] border-primaryBorder h-full rounded-md shadow-card px-7 py-5">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="text-base text-textSecondary font-normal">
            Nomor Induk Mahasiswa
          </p>
          <input
            type="text"
            className="pl-5 pr-3 py-2 bg-primaryBorder border border-primaryBorder rounded-md focus:outline-none focus:border-secondaryMain transition-all w-full text-textSecondary"
            value="21.230.0194"
            disabled={true}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-5">
          <p className="text-base text-textSecondary font-normal">
            Nama Lengkap
          </p>
          <input
            type="text"
            className="text-textSecondary w-full pl-5 pr-3 py-2 bg-primarySurface border border-primaryBorder focus:outline-none focus:border-none focus:ring focus:ring-secondaryHover rounded-md transition-all ease-in-out"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-5">
          <p className="text-base text-textSecondary font-normal">Username</p>
          <input
            type="text"
            className="pl-5 pr-3 py-2 bg-primaryBorder border border-primaryBorder rounded-md focus:outline-none focus:border-secondaryMain transition-all w-full text-textSecondary"
            value="faykarr"
            disabled={true}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-5">
          <p className="text-base text-textSecondary font-normal">Email</p>
          <input
            type="text"
            className="text-textSecondary w-full pl-5 pr-3 py-2 bg-primarySurface border border-primaryBorder focus:outline-none focus:border-none focus:ring focus:ring-secondaryHover rounded-md transition-all ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start lg:items-center mt-2">
          <button className="flex flex-row gap-3 justify-around items-center px-4 lg:px-9 py-2 bg-secondaryMain text-white rounded-lg font-medium text-lg mt-5 hover:bg-secondaryHover transition-all">
            <p className="text-white font-medium text-base">Save Changes</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-between items-center w-full bg-primaryMain text-textSecondary px-10 py-3">
      <p className="text-base font-medium">2024 © Faykarr</p>
      <p className="text-base font-medium">
        Crafted with ❤️ by{" "}
        <span className="text-secondaryHover cursor-pointer">faykarr</span>
      </p>
    </div>
  );
}

function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-start text-textSecondary pl-10 lg:pl-20 gap-3">
        <h2 className="text-xl lg:text-2xl font-semibold">Account Profile</h2>
        <p className="text-sm lg:text-base font-medium w-3/4">
          A page where users can see & change their profile information.
        </p>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default Profile;
