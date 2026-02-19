export const dateFormate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

console.log(dateFormate("2026-02-03T02:51:06.067+00:00"));
