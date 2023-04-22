import { ComponentProps } from "@stitches/react";
import { ElementRef, forwardRef } from "react";
import {
  Container,
  Input,
  Prefix,
  TextInputContainer,
  TextInputLabel,
} from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  label?: string;
  sizeContainer?: "sm" | "md";
  mask: "default" | "password";
}
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      prefix,
      size,
      label,
      mask = "default",
      sizeContainer,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <Container>
        {!!{ label } && (
          <TextInputLabel sizeContainer={sizeContainer}>{label}</TextInputLabel>
        )}
        <TextInputContainer sizeContainer={sizeContainer}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          {mask === "default" && <Input ref={ref} mask={mask} {...props} />}
          {mask === "password" && (
            <Input ref={ref} type="password" {...props} />
          )}
        </TextInputContainer>
      </Container>
    );
  }
);

TextInput.displayName = "TextInput";
