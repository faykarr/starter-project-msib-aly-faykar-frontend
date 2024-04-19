function Navbar() {
  return (
    <div className="flex justify-around items-center w-full py-6">
      <button className="w-full pl-10">
        <img src="/src/assets/icons/menu.svg" alt="Menu Icons" />
      </button>
      <div className="flex flex-row gap-8 text-textSecondary pr-20 cursor-pointer">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-poppins font-medium text-xl">Faykarr</h1>
          <p className="font-light">Administrator</p>
        </div>
        <img
          src="/src/assets/img/avatar.jpg"
          alt="Avatar"
          className="rounded-full w-16 h-16"
        />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="grid grid-cols-3 justify-center items-center px-20 py-7 text-white gap-11">
      <div className="w-full flex flex-col items-center justify-between py-5 rounded-md bg-primaryMain border-[3px] border-primaryBorder shadow-card">
        <img
          src="/src/assets/img/avatar.jpg"
          alt="Avatar"
          className="rounded-full w-48"
        />
        <div className="flex flex-col justify-center items-center py-5 text-textSecondary">
          <h3 className="font-medium text-xl">Nasyath Faykar</h3>
          <p className="font-normal text-base">Senior Asisten UPTKOMP</p>
        </div>
        <button className="flex flex-row gap-3 justify-around items-center px-12 py-2 bg-secondaryMain text-white rounded-lg font-medium text-lg">
          <img src="/src/assets/icons/gallery-export.svg" alt="Gallery Icon" />
          <p className="text-white font-medium text-base">Change Avatar</p>
        </button>
      </div>
      <div className="col-span-2">Testing 2</div>
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
    </>
  );
}

export default Profile;
