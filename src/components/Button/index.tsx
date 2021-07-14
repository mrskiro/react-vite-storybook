import * as React from "react";

type Props = {
  variant: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.memo<Props>((props) => (
  <button {...props}>{props.children}</button>
));
