import Bowser from "bowser";

export interface IBowserCastle {
  mobile: boolean;
  tablet: boolean;
  name: string;
  version: string;
}

const detect = (userAgent: string): IBowserCastle => {
  const browserInfo = Bowser.getParser(userAgent ?? '');
  return {
    mobile: browserInfo.getPlatformType(true) === "mobile",
    tablet: browserInfo.getPlatformType(true) === "tablet",
    name: browserInfo.getBrowserName(),
    version: browserInfo.getBrowserVersion(),
  };
}

const bowserCastle: IBowserCastle = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '');

export default bowserCastle;
