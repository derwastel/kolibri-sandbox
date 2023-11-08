import { KolIcon } from "@public-ui/react";
import { FC } from "react";

export const IconBasic: FC = () => (
  <div className="d-grid gap-4">
    <KolIcon _ariaLabel="" _icon="codicon codicon-home" />
    <KolIcon
      style={{
        color: "red"
      }}
      _ariaLabel=""
      _icon="codicon codicon-home"
    />
  </div>
);
