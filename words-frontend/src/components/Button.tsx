import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Making reusable button component

const Button = styled(MuiButton)(() => ({
  marginBlock: 5,
})) as typeof MuiButton;

const ButtonWrapper = ({ children, ...otherProps }: ButtonProps) => {
  const configButton = {
    ...otherProps,
    fullWidth: true,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
