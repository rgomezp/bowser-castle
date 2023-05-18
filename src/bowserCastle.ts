import * as bowser from "bowser";

export interface IBowserCastle {
  mobile: boolean;
  tablet: boolean;
  name: string;
  version: string;
}

export const bowserCastle = (userAgent?: string): IBowserCastle => {
  if (!userAgent && typeof navigator !== "undefined") {
    userAgent = navigator.userAgent;
  }

  const browserInfo = bowser.getParser(userAgent ?? '');
  return {
    mobile: browserInfo.getPlatformType(true) === "mobile",
    tablet: browserInfo.getPlatformType(true) === "tablet",
    name: browserInfo.getBrowserName().toLowerCase(),
    version: browserInfo.getBrowserVersion(),
  };
}
