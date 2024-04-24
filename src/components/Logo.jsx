import logoUPT from "../assets/icons/logo-upt.png";

function Logo() {
  return (
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
  )
}

export default Logo
