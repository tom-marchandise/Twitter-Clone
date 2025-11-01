// eslint-disable-next-line react/prop-types
function Input({ type, placeholder, onChange, name, label, value, className }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        label={label}
        name={name}
        value={value}
        className={className}
      />
      <label className="form-check-label">{label}</label>
    </>
  )
}

export default Input
