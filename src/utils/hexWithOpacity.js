const hexWithOpacity = (hex, opacityValue) => {
  let hexNormalized = hex;
  if (hex.length === 4) {
    hexNormalized = `${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  } else if (hex.length === 7) {
    hexNormalized = hex.substring(1, 7);
  }
  const hexOpacityVal = (opacityValue * 256).toString(16).split('.')[0];
  return `#${hexNormalized}${hexOpacityVal.length === 1 ? `0${hexOpacityVal}` : hexOpacityVal}`;
};

export default hexWithOpacity;
