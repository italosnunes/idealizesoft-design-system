import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
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

  variants: {
    sizeContainer: {
      sm: {
        padding: "$1 $3",
      },
      md: {
        padding: "$2 $4",
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
