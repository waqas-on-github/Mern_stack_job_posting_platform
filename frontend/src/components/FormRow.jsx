/* eslint-disable react/prop-types */

const FormRow = ({type, name , lableText , defaultValue}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {lableText || name}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
export default FormRow