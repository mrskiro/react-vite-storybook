import * as React from "react";
import styled from "styled-components";

type Props = {
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.memo<Props>((props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
));

const StyledButton = styled.button<Props>`
  color: ${(props) => (props.variant === "primary" ? "blue" : "red")};
`;
