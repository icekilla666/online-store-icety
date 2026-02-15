import type { FormProps } from "@/types/types";
import FormInput from "./FormInput";

const RegForm = ({
  formData,
  errors,
  touched,
  onChange,
  onBlur,
}: FormProps) => {
  return (
    <>
      <div className="mb-7">
        <div className="flex justify-between items-center gap-4">
          <FormInput
            id="name"
            name="name"
            type="text"
            label="First Name"
            value={formData.name}
            touched={touched.name}
            placeholder="John"
            onChange={onChange}
            onBlur={() => onBlur}
          />

          <FormInput
            id="lastname"
            name="lastname"
            type="text"
            label="Last Name"
            value={formData.lastname}
            touched={touched.lastname}
            placeholder="Doe"
            onChange={onChange}
            onBlur={() => onBlur}
          />
        </div>
        <p className="mt-1 text-sm text-red-500">{errors.name && errors.lastname}</p>
      </div>

      <FormInput
        id="number"
        name="number"
        type="tel"
        label="Phone Number"
        value={formData.number}
        error={errors.number}
        touched={touched.number}
        placeholder="+1 (234) 567-8900"
        onChange={onChange}
        onBlur={() => onBlur}
        labelClassName="mb-7"
      />

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
        placeholder="Min. 4 chars"
        onChange={onChange}
        onBlur={() => onBlur}
        labelClassName="mb-7"
      />

      <FormInput
        id="r_password"
        name="r_password"
        type="password"
        label="Repeat password"
        value={formData.r_password}
        error={errors.r_password}
        touched={touched.r_password}
        placeholder="repeat password"
        onChange={onChange}
        onBlur={() => onBlur}
        labelClassName="mb-7"
      />
    </>
  );
};

export default RegForm;
