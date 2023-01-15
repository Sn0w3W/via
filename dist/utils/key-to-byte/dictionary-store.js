import basicKeyToByte from "./default.js";
import v10BasicKeyToByte from "./v10.js";
import v11BasicKeyToByte from "./v11.js";
export function getBasicKeyDict(version) {
  switch (version) {
    case 12: {
      return v11BasicKeyToByte;
    }
    case 11: {
      return v11BasicKeyToByte;
    }
    case 10: {
      return v10BasicKeyToByte;
    }
    default: {
      return basicKeyToByte;
    }
  }
}
