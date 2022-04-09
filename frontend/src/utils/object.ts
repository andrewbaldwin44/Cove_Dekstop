export const pick = (keys, object) =>
  keys.reduce((pickedKeys, key) => ({ ...pickedKeys, [key]: object[key] }), {});
