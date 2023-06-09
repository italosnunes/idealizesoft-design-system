import {
  ElementRef,
  forwardRef,
  useCallback,
  useState,
  ComponentProps,
} from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  Container,
  Input,
  Prefix,
  TextInputContainer,
  TextInputLabel,
  ButtonEyes,
} from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  label?: string;
  sizeContainer?: "sm" | "md" | "lg";
  marginContainer?: "sm" | "md" | "lg";
  mask: "default" | "password";
}
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      prefix,
      label,
      mask = "default",
      sizeContainer,
      marginContainer,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const [iconPassword, setIconPassword] = useState(false);

    const changeIconPassword = useCallback(() => {
      setIconPassword(!iconPassword);
    }, [iconPassword]);

    return (
      <Container marginContainer={marginContainer}>
        {!!label && (
          <TextInputLabel sizeContainer={sizeContainer}>{label}</TextInputLabel>
        )}
        <TextInputContainer sizeContainer={sizeContainer}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          {mask === "default" && <Input ref={ref} mask={mask} {...props} />}
          {mask === "password" && (
            <>
              <Input
                ref={ref}
                type={iconPassword ? "text" : "password"}
                {...props}
              />
              <ButtonEyes type="button" onClick={changeIconPassword}>
                {iconPassword && <FiEye size={20} />}
                {!iconPassword && <FiEyeOff size={20} />}
              </ButtonEyes>
            </>
          )}
        </TextInputContainer>
      </Container>
    );
  }
);

TextInput.displayName = "TextInput";
