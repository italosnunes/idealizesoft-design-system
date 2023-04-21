import { FileX } from "phosphor-react";
import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

export const Button = styled("button", {
  all: "unset",
  fontSize: "$md",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",

  borderRadius: "$xs",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "$4 $8",

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
        linearGradient: "82.44deg, $purple600 3.25%, $purple400 100%",

        "&:not(:disabled):hover": {
          backgroundImage: "none",
          backgroundColor: "$purple400",
        },

        "&:disabled": {
          opacity: 0.32,
        },
      },
      secondary: {
        color: "$purple500",
        border: "1px solid $purple500",

        "&:not(:disabled):hover": {
          border: "1px solid $purple400",
          color: "$purple400",
        },

        "&:disabled": {
          opacity: 0.32,
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
