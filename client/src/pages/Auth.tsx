import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { useAuthForm } from "@/hooks/useAuthForm";
import AuthForm from "@/components/auth/AuthForm";

const Auth = () => {
  const { isLogin } = useAuthForm();

  return (
    <AnimatedContent>
      <section className="container flex-center-col min-h-[calc(100svh-80px)] py-10">
        <h1>{isLogin ? "Authorization" : "Registration"}</h1>

        {isLogin ? (
          <p className="mb-7">
            Don't have an account?{" "}
            <NavLink className="text-custom" to={REGISTRATION_ROUTE}>
              Sign up
            </NavLink>
          </p>
        ) : (
          <p className="mb-7">
            Do you have account?{" "}
            <NavLink className="text-custom" to={LOGIN_ROUTE}>
              Log in
            </NavLink>
          </p>
        )}

        <AuthForm />
      </section>
    </AnimatedContent>
  );
};

export default Auth;
