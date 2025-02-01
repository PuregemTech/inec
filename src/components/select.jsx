const Select = ({name}) => {
  return (
    <select className="form-select fs_" id="validationCustom04" required>
      <option selected value="">{name}</option>
      <option>...</option>
    </select>
  );
};

export default Select;
