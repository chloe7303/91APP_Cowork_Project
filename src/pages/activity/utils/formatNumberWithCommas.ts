const formatNumberWithCommas = (price: number | undefined) => {
  let updatedPrice = price?.toLocaleString("en-US");
  return `NT$${updatedPrice}`;
};

export default formatNumberWithCommas;
