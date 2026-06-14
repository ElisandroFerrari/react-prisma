import PropTypes from "prop-types";
import { Button } from "./styles"; // Renomeamos o que vem de styles.js

function DefaultButton({ children, theme, ...props }) {
  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  ); // Usamos o nome renomeado aqui
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaultButton;
