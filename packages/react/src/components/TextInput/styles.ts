import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const TextInputLabel = styled("strong", {
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray600",
  fontWeight: "$medium",
  padding: "0 $2",
});

export const TextInputContainer = styled("div", {
  backgroundColor: "$white",
  padding: "$2 $4",
  borderRadius: "$md $md 0 0",
  boxSizing: "border-box",
  border: "1px solid $gray300",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",

  "&:focus-within": {
    borderBottom: "2px solid $gray400",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
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

  "&:placeholder": {
    color: "$gray400",
  },
});
