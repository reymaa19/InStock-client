// Contains reusable helper functions to keep components clean, improve maintainability, and avoid code duplication.

// Formats the timestamp to a more human-readable format.
export const formatTimestamp = (timestamp) => {
  const difference = Math.floor(new Date() - new Date(timestamp)) / 1000;
  const timeUnits = [
    { name: "year", seconds: 12 * 30.437 * 24 * 60 * 60 },
    { name: "month", seconds: 30.437 * 24 * 60 * 60 },
    { name: "day", seconds: 24 * 60 * 60 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
  ];

  if (difference < 60) return "Just now";

  for (const unit of timeUnits) {
    if (difference >= unit.seconds) {
      const value = Math.floor(difference / unit.seconds);
      return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
    }
  }
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
