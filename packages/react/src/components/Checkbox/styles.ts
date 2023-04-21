import * as Checkbox from "@radix-ui/react-checkbox";
import { styled, keyframes } from "../../styles";

export const CheckBoxContainer = styled(Checkbox.Root, {
  width: "$6",
  height: "$6",
  backgroundColor: "$white",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "1.5px solid $gray500",

  '&[data-state="checked"]': {
    backgroundColor: "$purple500",
    borderColor: "$purple500",
  },

  '&[data-state="unchecked"]': {
    backgroundColor: "transparent",
    borderColor: "$gray500",
  },

  "&:disabled": {
    opacity: 0.32,
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$6",
  height: "$6",

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
});

export const CheckboxLabel = styled("span", {
  fontSize: "$md",
  fontWeight: "$medium",
  fontFamily: "$default",
  lineHeight: "$shorter",
  color: "$white",
});

export const CheckboxWrapper = styled("div", {
  padding: "$2",
  borderRadius: "$md",
  "&:not(:disabled):hover": {
    backgroundColor: "$gray200",
  },
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    labelLocation: {
      undefined: {},
      right: {
        flexDirection: "row",
        gap: "$2",
      },
      down: {
        gap: "$1",
        flexDirection: "column",
      },
    },
  },

  defaultVariants: {
    labelLocation: undefined,
  },
});
