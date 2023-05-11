export const formatNumberWithCommas = (rawNumber, decimals = -1) => {
  if (!rawNumber && rawNumber !== 0) return "-";

  let text = (
    decimals == -1
      ? rawNumber
      : (typeof rawNumber == "number"
          ? rawNumber
          : parseFloat(rawNumber)
        ).toFixed(decimals)
  ).toString();

  try {
    text = text.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } catch (Err) {
    console.error("REGEX NO SUPPORTED");
    text = Number(text).toLocaleString("en-US");
  }

  return text;
};
