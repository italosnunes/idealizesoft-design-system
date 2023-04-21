import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const TextAreaLabel = styled("strong", {
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray600",
  fontWeight: "$medium",
  padding: "0 $2",
});

export const TextAreaInput = styled("textarea", {
  padding: "$2 $4",
  borderRadius: "$md $md 0 0",
  boxSizing: "border-box",
  border: "1px solid $gray300",

  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray700",
  backgroundColor: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:focus": {
    outline: 0,
    borderBottom: "2px solid $gray400",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});
