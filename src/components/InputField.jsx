import PropTypes from 'prop-types';

function InputField({ type, name, iconPath, placeholder, value, onChange}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10 pr-3 py-2 bg-primarySurface border border-primaryBorder rounded-md focus:outline-none focus:border-secondaryMain transition-all w-96 text-white" required
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
