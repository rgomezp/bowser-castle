import * as Bowser from "bowser";

export interface IBowserCastle extends Bowser.Parser.Details {
  mobile: boolean;
  tablet: boolean;
}

const detect = (userAgent: string): Bowser.Parser.Details & { mobile: boolean; tablet: boolean; } => {
  const browserInfo = Bowser.getParser(userAgent ?? '');
  const bowserCastle = {
    ...browserInfo,
    mobile: browserInfo.getPlatformType(true) === "mobile",
    tablet: browserInfo.getPlatformType(true) === "tablet",
  };
  return bowserCastle as Bowser.Parser.Details & { mobile: boolean; tablet: boolean; };
}

(function(root: any, name: string, definition: () => Bowser.Parser.Details & { mobile: boolean; tablet: boolean; }) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else if (typeof define === 'function' && define.amd) {
    define(name, definition);
  } else {
    root[name] = definition();
  }
})(this, 'bowserCastle', () => {
  return detect(typeof navigator !== 'undefined' ? navigator.userAgent : '') as Bowser.Parser.Details & { mobile: boolean; tablet: boolean; };
});
