import Bowser from "bowser";
export interface IBowserCastle extends Bowser.Parser.Details {
  mobile: boolean;
  tablet: boolean;
}

const browserInfo = Bowser.getParser(window.navigator.userAgent);
const bowserCastle = {
  ...browserInfo,
  mobile: browserInfo.getPlatformType(true) === "mobile",
  tablet: browserInfo.getPlatformType(true) === "tablet",
};

export default bowserCastle as IBowserCastle;
