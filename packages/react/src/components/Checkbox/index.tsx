import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import {
  CheckBoxContainer,
  CheckBoxIndicator,
  CheckboxLabel,
  CheckboxWrapper,
  Content,
} from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {
  labelLocation?: "right" | "down";
  label?: string;
}

export function Checkbox({ labelLocation, label, ...props }: CheckboxProps) {
  return (
    <Content labelLocation={labelLocation}>
      <CheckboxWrapper>
        <CheckBoxContainer {...props}>
          <CheckBoxIndicator asChild>
            <Check weight="bold" fontSize={"$md"} />
          </CheckBoxIndicator>
        </CheckBoxContainer>
      </CheckboxWrapper>

      {!!labelLocation && <CheckboxLabel>{label}</CheckboxLabel>}
    </Content>
  );
}

Checkbox.displayName = "Checkbox";
