export const getOffset = (e) => {
  const top = e.target.offsetTop;
  const left = e.target.offsetLeft;

  return {
    left,
    top,
  };
};
