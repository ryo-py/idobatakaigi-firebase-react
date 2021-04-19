import crypto from "crypto";

export const gravatarPath = (string) => {
  const LowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash("md5");
  const digest = md5.update(LowerCaseString, "binary").digest("hex");
  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};
