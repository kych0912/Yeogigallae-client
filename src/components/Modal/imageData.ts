import building1 from "../../assets/icons/building1.svg?react";
import building2 from "../../assets/icons/building2.svg?react";
import building3 from "../../assets/icons/building3.svg?react";
import building4 from "../../assets/icons/building4.svg?react";
import nature1 from "../../assets/icons/nature1.svg?react";
import nature2 from "../../assets/icons/nature2.svg?react";
import nature3 from "../../assets/icons/nature3.svg?react";
import nature4 from "../../assets/icons/nature4.svg?react";

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export default function getImageData(): Record<string, SVGComponent[]> {
  return {
    건물: [building1, building2, building3, building4, building1],
    자연: [nature1, nature2, nature3, nature4, nature3],
    활동: [building1, building2, building3, nature2, nature3],
    음식: [nature4, nature1, building1, building2, nature2],
  };
}
