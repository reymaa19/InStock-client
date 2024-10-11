// Contains reusable helper functions to keep components clean, improve maintainability, and avoid code duplication.

// Validates all the passed in required form fields
export const validateRequiredFields = (fields) => {
  const foundErrors = {};

  for (const [key, value] of Object.entries(fields))
    if (value === "")
      foundErrors[key] =
        key
          .trim()
          .replace("id", "")
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ") + " is required";

  return foundErrors;
};

export const validateRequiredField = (field) => {
  const { name, value } = field;

  if (value === "")
    return (
      name
        .trim()
        .replace("id", "")
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") + " is required"
    );

  return false;
};

// Scrolls to top of page.
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behaviour: "smooth" });
};

// Sorts the given data by latest to oldest timestamp.
export const sortByLatest = (data) => {
  return data.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
};

// navigation function
export const handleNav = (navigation, path) => {
  navigation(path);
};
