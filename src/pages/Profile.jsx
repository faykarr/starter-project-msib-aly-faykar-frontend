import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-around items-center w-full py-6">
      <div className="w-full pl-10">
        <img
          src="./src/assets/icons/menu.svg"
          alt="Menu Icons"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row gap-8 text-textSecondary pr-20">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-poppins font-medium text-xl">Faykarr</h1>
          <p className="font-light">Administrator</p>
        </div>
        <img
          src="./src/assets/img/avatar.jpg"
          alt="Avatar"
          className="rounded-full w-16 h-16 cursor-pointer"
        />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="grid grid-cols-3 justify-center items-center px-20 py-7 text-white gap-11">
      <div className="w-full flex flex-col items-center justify-around py-10 rounded-md bg-primaryMain border-[3px] border-primaryBorder shadow-card h-full">
        <img
          src="./src/assets/img/avatar.jpg"
          alt="Avatar"
          className="rounded-full w-48"
        />
        <div className="flex flex-col justify-center items-center text-textSecondary">
          <h3 className="font-medium text-xl">Nasyath Faykar</h3>
          <p className="font-normal text-base">Senior Asisten UPTKOMP</p>
        </div>
        <button className="flex flex-row gap-3 justify-around items-center px-12 py-2 bg-secondaryMain text-white rounded-lg font-medium text-lg hover:bg-secondaryHover transition-all">
          <img src="./src/assets/icons/gallery-export.svg" alt="Gallery Icon" />
          <p className="text-white font-medium text-base">Change Avatar</p>
        </button>
      </div>
      <div className="col-span-2 bg-primaryMain border-[3px] border-primaryBorder h-full rounded-md shadow-card px-7 py-5">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="text-base text-textSecondary font-normal">
            Nomor Induk Mahasiswa
          </p>
          <input
            type="text"
            className="pl-5 pr-3 py-2 bg-primaryBorder border border-primaryBorder rounded-md focus:outline-none focus:border-secondaryMain transition-all w-full text-textSecondary"
            value="21.230.0194"
            disabled="true"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-5">
          <p className="text-base text-textSecondary font-normal">
            Nama Lengkap
          </p>
          <input
            type="text"
            className="text-textSecondary w-full pl-5 pr-3 py-2 bg-primarySurface border border-primaryBorder focus:outline-none focus:border-none focus:ring focus:ring-secondaryHover rounded-md transition-all ease-in-out"
            placeholder="Nasyath Faykar"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-5">
          <p className="text-base text-textSecondary font-normal">Username</p>
          <input
            type="text"
            className="pl-5 pr-3 py-2 bg-primaryBorder border border-primaryBorder rounded-md focus:outline-none focus:border-secondaryMain transition-all w-full text-textSecondary"
            value="faykarr"
            disabled="true"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 mt-5">
          <p className="text-base text-textSecondary font-normal">Email</p>
          <input
            type="text"
            className="text-textSecondary w-full pl-5 pr-3 py-2 bg-primarySurface border border-primaryBorder focus:outline-none focus:border-none focus:ring focus:ring-secondaryHover rounded-md transition-all ease-in-out"
            placeholder="teknisi.faykarr@stmik-wp.ac.id"
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <button className="flex flex-row gap-3 justify-around items-center px-12 py-2 bg-secondaryMain text-white rounded-lg font-medium text-lg mt-5 hover:bg-secondaryHover transition-all">
            <p className="text-white font-medium text-base">Save Changes</p>
          </button>
          <Link to={"/login"} className="flex flex-row gap-3 justify-around items-center px-12 py-2 bg-red-400 text-white rounded-lg font-medium text-lg mt-5 hover:bg-red-500 transition-all">
            <p className="text-white font-medium text-base">Logout</p>
          </Link>
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
      <div className="flex flex-col justify-center items-start text-textSecondary pl-20 gap-3">
        <h2 className="text-2xl font-semibold">Account Profile</h2>
        <p className="text-base font-medium">
          A page where users can see & change their profile information.
        </p>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default Profile;
