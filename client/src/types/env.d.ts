declare var process: {
  env: {
    VITE_ADMIN_EMAIL: string;
    VITE_ADMIN_PASSWORD: string;
    [key: string]: string | undefined;
  };
};
