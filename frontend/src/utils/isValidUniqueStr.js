const isValidUniqueStr = (uniqueStr) => {
  const regex =
    /^([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12})([a-f\d]{24})$/gi;
  const result = uniqueStr.matchAll(regex).next().value;
  if (!result) return false;
  return result[2];
};

export default isValidUniqueStr;
