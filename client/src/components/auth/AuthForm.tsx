import { useAuthForm } from "@/hooks/useAuthForm";
import MyButton from "../ui/Button";
import RegForm from "./RegForm";
import LoginForm from "./LoginForm";

const AuthForm = () => {
  const { ...props } = useAuthForm();
  return (
    <form
      onSubmit={props.handleSubmit}
      className="py-8 px-6 sm:py-12 sm:px-8 bg-wrapper w-full max-w-lg rounded-3xl"
    >
      {props.isLogin ? (
        <LoginForm
          formData={props.formData}
          errors={props.errors}
          touched={props.touched}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      ) : (
        <RegForm
          formData={props.formData}
          errors={props.errors}
          touched={props.touched}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      )}

      <MyButton type="submit" className="text-white w-full">
        {props.isLogin ? "Log in" : "Sign up"}
      </MyButton>
    </form>
  );
};

export default AuthForm;
