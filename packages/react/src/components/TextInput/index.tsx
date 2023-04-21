import { ComponentProps } from "@stitches/react";
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
}
export function TextInput({ prefix, label, ...props }: TextInputProps) {
  return (
    <Container>
      {!!{ label } && <TextInputLabel>{label}</TextInputLabel>}
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    </Container>
  );
}

TextInput.displayName = "TextInput";
