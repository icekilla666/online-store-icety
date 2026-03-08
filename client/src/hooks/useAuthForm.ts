import { login, registration } from "@/http/userAPI";
import type { FormData, FormErrors, TouchedFields } from "@/types/types";
import { useAlert } from "@/utils/alertContext";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const admin = import.meta.env.VITE_ADMIN_EMAIL;
const passwordAdmin = import.meta.env.VITE_ADMIN_PASSWORD;

export const useAuthForm = () => {
  const { user } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert } = useAlert();

  // Состояния для ошибок
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
    r_password: "",
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
    r_password: "",
  });

  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    lastname: false,
    number: false,
    email: false,
    password: false,
    r_password: false,
  });

  const from = location.state?.from || "/";
  const isLogin = location.pathname === LOGIN_ROUTE;

  // Валидация для имени
  const validateFullName = (name: string, lastname: string) => {
    if (!name && !lastname) return "First and last name is required";
    if (name.length < 2 && lastname.length < 2)
      return "First and last name must be at least 2 characters";
    if (
      !/^[a-zA-Zа-яА-Я\s-]+$/.test(name) &&
      !/^[a-zA-Zа-яА-Я\s-]+$/.test(lastname)
    )
      return "First and last name can only contain letters, spaces and hyphens";
    return "";
  };

  // Валидация для телефона
  const validatePhone = (number: string) => {
    if (!number) return "Phone number is required";
    if (!/^\d+$/.test(number)) return "Phone number can only contain digits";
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
        name: "",
        lastname: "",
        number: "",
        email: emailError,
        password: passwordError,
        r_password: "",
      });

      return !emailError && !passwordError;
    } else {
      const fullNameError = validateFullName(formData.name, formData.lastname);
      const phoneError = validatePhone(formData.number);
      const emailError = validateEmail(formData.email);
      const passwordError = validatePassword(formData.password);
      const r_passwordError = validateRepeatPassword(
        formData.password,
        formData.r_password,
      );

      setErrors({
        name: fullNameError,
        lastname: fullNameError,
        number: phoneError,
        email: emailError,
        password: passwordError,
        r_password: r_passwordError,
      });

      return (
        !fullNameError &&
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
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Помечаем все поля как touched при отправке
    const allFields = {
      name: true,
      lastname: true,
      number: true,
      email: true,
      password: true,
      r_password: !isLogin,
    };
    setTouched(allFields);

    if (!validateForm()) {
      return;
    }

    let data: any;
    if (isLogin) {
      // ЛОГИКА ВХОДА
      const isAdmin =
        formData.email === admin && formData.password === passwordAdmin;
      showAlert("success", "Success!", "Logged in successfully");
      if (isAdmin) {
        data = await login(formData);
        user.setIsAuth(true);
        user.setIsAdmin(isAdmin);
        navigate(ADMIN_ROUTE, { replace: true });
      } else {
        data = await login(formData);
        user.setIsAuth(true);
        navigate(from, { replace: true });
      }
    } else {
      data = await registration(formData);

      setFormData({
        name: "",
        lastname: "",
        number: "",
        email: "",
        password: "",
        r_password: "",
      });

      setTouched({
        name: false,
        lastname: false,
        number: false,
        email: false,
        password: false,
        r_password: false,
      });

      // Перенаправляем на страницу входа
      showAlert('success', 'Welcome!', 'Registration successful')
      setTimeout(() => {
        navigate(LOGIN_ROUTE);
      }, 1000);
    }
    user.setUser(data);
  };

  return {
    formData,
    errors,
    touched,
    isLogin,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
