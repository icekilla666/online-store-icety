import { useStore } from "../utils/context";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/constants";
import { useState, type ChangeEvent, type FormEvent } from "react";
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
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    r_password: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    r_password: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    password: false,
    r_password: false,
  });

  const from = location.state?.from || "/";
  const isLogin = location.pathname === LOGIN_ROUTE;

  // Валидация для имени
  const validateFirstName = (firstName: string) => {
    if (!firstName) return "First name is required";
    if (firstName.length < 2) return "First name must be at least 2 characters";
    if (!/^[a-zA-Zа-яА-Я\s-]+$/.test(firstName))
      return "First name can only contain letters, spaces and hyphens";
    return "";
  };

  // Валидация для фамилии
  const validateLastName = (lastName: string) => {
    if (!lastName) return "Last name is required";
    if (lastName.length < 2) return "Last name must be at least 2 characters";
    if (!/^[a-zA-Zа-яА-Я\s-]+$/.test(lastName))
      return "Last name can only contain letters, spaces and hyphens";
    return "";
  };

  // Валидация для телефона
  const validatePhone = (phone: string) => {
    if (!phone) return "Phone number is required";
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
    return "";
  };

  // Валидация для email
  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  // Валидация для пароля
  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/[0-9]/.test(password))
      return "Password must contain at least one number";
    return "";
  };

  // Валидация для повторения пароля
  const validateRepeatPassword = (password: string, r_password: string) => {
    if (!r_password) return "Please repeat your password";
    if (password !== r_password) return "Passwords do not match";
    return "";
  };

  const validateForm = () => {
    if (isLogin) {
      const emailError = validateEmail(formData.email);
      const passwordError = validatePassword(formData.password);

      setErrors({
        firstName: "",
        lastName: "",
        phone: "",
        email: emailError,
        password: passwordError,
        r_password: "",
      });

      return !emailError && !passwordError;
    } else {
      const firstNameError = validateFirstName(formData.firstName);
      const lastNameError = validateLastName(formData.lastName);
      const phoneError = validatePhone(formData.phone);
      const emailError = validateEmail(formData.email);
      const passwordError = validatePassword(formData.password);
      const r_passwordError = validateRepeatPassword(
        formData.password,
        formData.r_password,
      );

      setErrors({
        firstName: firstNameError,
        lastName: lastNameError,
        phone: phoneError,
        email: emailError,
        password: passwordError,
        r_password: r_passwordError,
      });

      return (
        !firstNameError &&
        !lastNameError &&
        !phoneError &&
        !emailError &&
        !passwordError &&
        !r_passwordError
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Валидация в реальном времени
    if (name === "firstName") {
      setErrors((prev) => ({ ...prev, firstName: validateFirstName(value) }));
    }
    if (name === "lastName") {
      setErrors((prev) => ({ ...prev, lastName: validateLastName(value) }));
    }
    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
    if (name === "password") {
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
      if (!isLogin && formData.r_password) {
        setErrors((prev) => ({
          ...prev,
          r_password: validateRepeatPassword(value, formData.r_password),
        }));
      }
    }
    if (name === "r_password") {
      setErrors((prev) => ({
        ...prev,
        r_password: validateRepeatPassword(formData.password, value),
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Помечаем все поля как touched при отправке
    const allFields = {
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      password: true,
      r_password: !isLogin,
    };
    setTouched(allFields);

    if (!validateForm()) {
      return;
    }

    if (isLogin) {
      // ЛОГИКА ВХОДА
      const isAdmin =
        formData.email === admin && formData.password === passwordAdmin;

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
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      });

      // Здесь будет запрос к API для регистрации

      // Очищаем форму
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        r_password: "",
      });

      setTouched({
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        password: false,
        r_password: false,
      });

      // Перенаправляем на страницу входа
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
          {isLogin ? (
            // ФОРМА ВХОДА
            <>
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
            </>
          ) : (
            // ФОРМА РЕГИСТРАЦИИ
            <>
              <div className="flex justify-between items-center gap-4">
                <label className="block mb-7 w-full">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                    First Name
                  </span>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("firstName")}
                    name="firstName"
                    className={`input ${
                      touched.firstName && errors.firstName
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="John"
                  />
                  {touched.firstName && errors.firstName && (
                    <span className="text-sm text-red-500">
                      {errors.firstName}
                    </span>
                  )}
                </label>

                <label className="block mb-7 w-full">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                    Last Name
                  </span>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("lastName")}
                    name="lastName"
                    className={`input ${
                      touched.lastName && errors.lastName
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Doe"
                  />
                  {touched.lastName && errors.lastName && (
                    <span className="text-sm text-red-500">
                      {errors.lastName}
                    </span>
                  )}
                </label>
              </div>

              <label className="block mb-7">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-secondary">
                  Phone Number
                </span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur("phone")}
                  name="phone"
                  className={`input ${
                    touched.phone && errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="+1 (234) 567-8900"
                />
                {touched.phone && errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </label>

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
                  placeholder="Min. 6 chars, 1 uppercase, 1 number"
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
                    touched.r_password && errors.r_password
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="repeat password"
                />
                {touched.r_password && errors.r_password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.r_password}
                  </p>
                )}
              </label>
            </>
          )}

          <MyButton type="submit" className="text-white">
            {isLogin ? "Log in" : "Sign up"}
          </MyButton>
        </form>
      </section>
    </AnimatedContent>
  );
};

export default Auth;
