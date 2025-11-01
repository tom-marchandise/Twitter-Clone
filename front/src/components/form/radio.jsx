// eslint-disable-next-line react/prop-types
function Submit ({ label }) {
  return <>
      <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
      />
      <div className="submit">
          <input className="inscr" type="submit" value="S'inscrire"/>
      </div>
      <label className='form-check-label'>{label}</label>
  </>
}

export default Submit
