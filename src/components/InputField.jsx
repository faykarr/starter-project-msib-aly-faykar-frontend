import PropTypes from "prop-types";

function InputField({ type, name, iconPath, placeholder, value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-textSecondary pl-10 pr-3 py-2 tex bg-primarySurface border border-primaryBorder focus:outline-none focus:border-none focus:ring focus:ring-secondaryHover rounded-md transition-all ease-in-out"
        required
      />
      <img
        src={iconPath}
        alt="Icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
      />
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
