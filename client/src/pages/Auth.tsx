import { useStore } from "../utils/context";
import FadeContent from "../components/ui/FadeContent";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import MyButton from "../components/Button";

const Auth = () => {
  const { user } = useStore();
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    r_password: "",
  });
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  // console.log(isError);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (wasSubmitted) {
      if (isLogin) {
        const isValid = formData.email.trim() && formData.password.trim();

        setIsError(!isValid);
      } else {
        const isValid =
          formData.email.trim() &&
          formData.password.trim() &&
          formData.password === formData.r_password;

        setIsError(!isValid);
      }
    }
  }, [formData, isLogin, wasSubmitted]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);
    // console.log(isError);
    if (isError) {
      return;
    }
    // console.log(formData);
  };

  return (
    <FadeContent>
      <section className="container flex-center-col h-[calc(100svh-80px)]">
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
        <form
          onSubmit={handleSubmit}
          className="py-12 px-8 bg-wrapper w-full max-w-lg rounded-3xl"
        >
          <label className="block mb-7">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
              Email
            </span>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className={isError ? "input border-red-500" : "input"}
              placeholder="you@example.com"
            />
          </label>
          {isLogin ? (
            <label className="block mb-7">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                Password
              </span>
              <input
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                className={isError ? "input border-red-500" : "input"}
                placeholder="your password"
              />
            </label>
          ) : (
            <>
              <label className="block mb-7">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                  Password
                </span>
                <input
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  className={isError ? "input border-red-500" : "input"}
                  placeholder="your password"
                />
              </label>
              <label className="block mb-7">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                  Repeat password
                </span>
                <input
                  type="password"
                  value={formData.r_password}
                  onChange={handleChange}
                  name="r_password"
                  className={isError ? "input border-red-500" : "input"}
                  placeholder="repeat password"
                />
              </label>
            </>
          )}

          <MyButton type="submit">{isLogin ? "Log in" : "Sign up"}</MyButton>
        </form>
      </section>
    </FadeContent>
  );
};

export default Auth;
