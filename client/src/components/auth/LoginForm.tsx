import type { FormProps } from "@/types/types";
import FormInput from "./FormInput";

const LoginForm = ({
  formData,
  errors,
  touched,
  onChange,
  onBlur,
}: FormProps) => {
  return (
    <>
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        error={errors.email}
        touched={touched.email}
        placeholder="you@example.com"
        onChange={onChange}
        onBlur={() => onBlur}
        labelClassName="mb-7"
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        error={errors.password}
        touched={touched.password}
        placeholder="your password"
        onChange={onChange}
        onBlur={() => onBlur}
        labelClassName="mb-7"
      />
    </>
  );
};

export default LoginForm;
