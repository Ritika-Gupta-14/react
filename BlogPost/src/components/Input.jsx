import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor="id" className="text-2xl   font-thin p-2">
          {label}
        </label>
      )}

      <input type={type} className={`p-2 text-gray-950 text-base font-light m-3 rounded-lg ${className}`} id={id} {...props} ref={ref} />
    </div>
  );
});
export default Input;
