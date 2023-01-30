import React, { FC } from "react";
import { ActionButtonContainer, Icon } from "./ActionButton.style";

type buttonType = "remove" | "edit";

const Button: FC<IActionButtonProps> = ({ buttonType, onClick }) => {
  return (
    <ActionButtonContainer onClick={onClick}>
      {
        {
          edit: <Icon src="./icons/edit.svg" />,
          remove: <Icon src="./icons/remove.svg" />,
        }[buttonType]
      }
    </ActionButtonContainer>
  );
};

export const ActionButton = React.memo(Button);

export interface IActionButtonProps {
  buttonType: buttonType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
