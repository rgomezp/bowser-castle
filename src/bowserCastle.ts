import Bowser from "bowser";
export interface IBowserCastle extends Bowser.Parser.Details {
  mobile: boolean;
  tablet: boolean;
}

const detect = (navigator: Navigator): IBowserCastle => {
  const browserInfo = Bowser.getParser(navigator.userAgent ?? '');
  const bowserCastle = {
    ...browserInfo,
    mobile: browserInfo.getPlatformType(true) === "mobile",
    tablet: browserInfo.getPlatformType(true) === "tablet",
  };
  return bowserCastle;
}

export default detect(typeof navigator !== 'undefined' ? navigator : {} as Navigator);
