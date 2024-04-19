import PropTypes from "prop-types";

function Buttons({placeholder, onClick}) {
  return (
    <button className="py-2 bg-secondaryMain text-white rounded-lg w-96 font-medium text-lg shadow-md" onClick={onClick}>
      {placeholder}
    </button>
  );
}

Buttons.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Buttons;
