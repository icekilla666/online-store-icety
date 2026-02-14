import { useStore } from "../utils/context";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/constants";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import MyButton from "../components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const admin = import.meta.env.VITE_ADMIN_EMAIL;
const passwordAdmin = import.meta.env.VITE_ADMIN_PASSWORD;

const Auth = () => {
  const { user } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Состояния для ошибок
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    r_password: "",
  });
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    r_password: "",
  });
  
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    r_password: false,
  });
  
  const from = location.state?.from || "/";
  const isLogin = location.pathname === LOGIN_ROUTE;

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!email.includes("@")) return "Email must contain @";
    if (!email.includes(".")) return "Email must contain a dot";
    if (email.length < 5) return "Email is too short";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const validateRepeatPassword = (password: string, r_password: string) => {
    if (!r_password) return "Please repeat your password";
    if (password !== r_password) return "Passwords do not match";
    return "";
  };

  const validateForm = () => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const r_passwordError = !isLogin 
      ? validateRepeatPassword(formData.password, formData.r_password)
      : "";

    setErrors({
      email: emailError,
      password: passwordError,
      r_password: r_passwordError,
    });

    return !emailError && !passwordError && !r_passwordError;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
    if (name === "password") {
      setErrors(prev => ({ ...prev, password: validatePassword(value) }));
      if (!isLogin && formData.r_password) {
        setErrors(prev => ({ 
          ...prev, 
          r_password: validateRepeatPassword(value, formData.r_password) 
        }));
      }
    }
    if (name === "r_password") {
      setErrors(prev => ({ 
        ...prev, 
        r_password: validateRepeatPassword(formData.password, value) 
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setTouched({
      email: true,
      password: true,
      r_password: !isLogin,
    });

    if (!validateForm()) {
      return;
    }

    if (isLogin) {
      // ЛОГИКА ВХОДА
      const isAdmin = formData.email === admin && formData.password === passwordAdmin;

      user.setIsAuth(true);
      user.setIsAdmin(isAdmin);

      if (isAdmin) {
        navigate(ADMIN_ROUTE, { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    } else {
      // ЛОГИКА РЕГИСТРАЦИИ
      console.log("Регистрация нового пользователя:", {
        email: formData.email,
        password: formData.password,
      });

      
      setFormData({
        email: "",
        password: "",
        r_password: "",
      });
      
      setTouched({
        email: false,
        password: false,
        r_password: false,
      });
      
      setTimeout(() => {
        navigate(LOGIN_ROUTE);
      }, 1000);
    }
  };

  return (
    <AnimatedContent>
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
              onBlur={() => handleBlur("email")}
              name="email"
              className={`input ${
                touched.email && errors.email ? "border-red-500" : ""
              }`}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
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
                onBlur={() => handleBlur("password")}
                name="password"
                className={`input ${
                  touched.password && errors.password ? "border-red-500" : ""
                }`}
                placeholder="your password"
              />
              {touched.password && errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
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
                  onBlur={() => handleBlur("password")}
                  name="password"
                  className={`input ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="your password"
                />
                {touched.password && errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </label>

              <label className="block mb-7">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                  Repeat password
                </span>
                <input
                  type="password"
                  value={formData.r_password}
                  onChange={handleChange}
                  onBlur={() => handleBlur("r_password")}
                  name="r_password"
                  className={`input ${
                    touched.r_password && errors.r_password ? "border-red-500" : ""
                  }`}
                  placeholder="repeat password"
                />
                {touched.r_password && errors.r_password && (
                  <p className="mt-1 text-sm text-red-500">{errors.r_password}</p>
                )}
              </label>
            </>
          )}

          <MyButton 
            type="submit" 
            className="text-white"
          >
            {isLogin ? "Log in" : "Sign up"}
          </MyButton>
        </form>
      </section>
    </AnimatedContent>
  );
};

export default Auth;