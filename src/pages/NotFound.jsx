import notFound from "../assets/img/not-found.svg";
import Buttons from "../components/Buttons";

function NotFound() {
  const handleBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="text-white flex flex-col justify-center items-center h-screen gap-5">
      <img src={notFound} alt="Images" className="w-2/3 lg:w-1/4" />
      <h2 className="text-lg lg:text-2xl font-bold text-center">404 Page Not Found</h2>
      <p className="text-center text-sm lg:text-lg text-textSecondary">
        The page you are looking not found.
      </p>
      <div className="w-2/4 lg:w-1/6">
        <Buttons placeholder="Go Back" onClick={handleBack}></Buttons>
      </div>
    </div>
  );
}

export default NotFound;
