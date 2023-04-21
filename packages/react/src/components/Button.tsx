import { FileX } from "phosphor-react";
import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:hover": {},
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$purple500",

        "&:not(:disabled):hover": {
          backgroundColor: "$purple300",
        },

        "&:disabled": {
          backgroundColor: "$gray600",
        },
      },
      secondary: {
        color: "$purple300",
        border: "2px solid $purple500",

        "&:not(:disabled):hover": {
          backgroundColor: "$purple500",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },
      tertiary: {
        color: "$gray200",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

Button.displayName = "Button";