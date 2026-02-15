import type { FormInputProps } from "@/types/types";

const FormInput = ({
  value = "",
  required = true,
  ...props
}: FormInputProps) => {
  return (
    <label className={`block ${props.labelClassName || ""}`}>
      <span
        className={`${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""} block text-sm font-medium text-secondary`}
      >
        {props.label}
      </span>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={value}
        onChange={props.onChange}
        onBlur={() => props.onBlur(props.name)}
        className={`input ${props.touched && props.error ? "border-red-500" : ""}`}
        placeholder={props.placeholder}
      />
      {props.touched && props.error && (
        <p className="mt-1 text-sm text-red-500">{props.error}</p>
      )}
    </label>
  );
};

export default FormInput;
