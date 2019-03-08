import React from "react";
import Label from "./Label";

const TextInput = ({
  type,
  id,
  label,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className="section__field">
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default TextInput;
