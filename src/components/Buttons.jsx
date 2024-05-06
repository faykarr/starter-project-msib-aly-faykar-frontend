import PropTypes from "prop-types";

function Buttons({placeholder, onClick}) {
  return (
    <button className="py-2 bg-secondaryMain text-white rounded-lg w-full font-medium text-base  md:text-lg shadow-md hover:bg-secondaryHover transition-all" onClick={onClick}>
      {placeholder}
    </button>
  );
}

Buttons.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Buttons;
