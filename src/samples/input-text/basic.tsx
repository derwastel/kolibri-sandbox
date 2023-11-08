import { KolInputText } from "@public-ui/react";
import { FC } from "react";
import { ERROR_MSG, HINT_MSG } from "../../shares/constants";

export const InputTextBasic: FC = () => (
  <div className="d-grid gap-4">
    <KolInputText
      _id=""
      _placeholder="Mit Icons"
      _icon={{
        left: "codicon codicon-arrow-left",
        right: {
          icon: "codicon codicon-arrow-right",
          style: {
            "font-size": "200%"
          }
        }
      }}
      _on={{
        onChange: console.log
      }}
      _hideLabel
      _required
      _touched
      _type="search"
    >
      Suche
    </KolInputText>
  </div>
);
