import { useEffect } from "react";

const BASE_TITLE = "Icey Store";

export const useTitle = (title?: string) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Your trusted store for electronics - ${title || "Home"}`,
      );
    }
  }, [title]);
};
