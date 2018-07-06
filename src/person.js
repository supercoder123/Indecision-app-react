export const isAdult = age => {
  return age < 18 ? "Not Adult" : "Adult";
};

export const canDrink = age => {
  return age < 18 ? "Can't drink" : "Can drink";
};

const isSenior = age => {
  return age < 65;
};
export default isSenior;
