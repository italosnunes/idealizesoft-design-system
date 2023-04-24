import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  variants: {
    marginContainer: {
      undefined: {
        margin: "0 0",
      },
      sm: {
        margin: "$1 0",
      },
      md: {
        margin: "$2 0",
      },
      lg: {
        margin: "$3 0",
      },
    },
  },

  defaultVariants: {
    marginContainer: "undefined",
  },
});

export const TextInputLabel = styled("strong", {
  fontFamily: "$default",
  color: "$gray600",
  fontWeight: "$medium",
  padding: "0 $2",

  variants: {
    sizeContainer: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
    },
  },

  defaultVariants: {
    sizeContainer: "md",
  },
});

export const TextInputContainer = styled("div", {
  backgroundColor: "$white",
  borderRadius: "$md $md 0 0",
  boxSizing: "border-box",
  border: "1px solid $gray300",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$1 $3",

  variants: {
    sizeContainer: {
      sm: {
        height: "$8",
      },
      md: {
        height: "$10",
      },
      lg: {
        height: "$12",
      },
    },
  },

  "&:focus-within": {
    borderBottom: "2px solid $gray400",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  defaultVariants: {
    sizeContainer: "md",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray600",
  fontWeight: "$regular",
});

export const ButtonEyes = styled("button", {
  maxWidth: 32,
  maxheight: 32,
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: 0,
  background: "transparent",
  "& svg": {
    color: "$gray500",
  },
});
export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray700",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },

  variants: {
    mask: {
      default: {
        type: "text",
      },
      password: {
        type: "password",
      },
    },
  },

  defaultVariants: {
    mask: "default",
  },
});
