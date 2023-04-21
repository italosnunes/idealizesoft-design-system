import { ComponentProps } from "react";
import { Container, TextAreaLabel, TextAreaInput } from "./styles";

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label?: string;
}
export function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <Container>
      {!!{ label } && <TextAreaLabel>{label}</TextAreaLabel>}
      <TextAreaInput {...props} />
    </Container>
  );
}

TextArea.displayName = "TextArea";
