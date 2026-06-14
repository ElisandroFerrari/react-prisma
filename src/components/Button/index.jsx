import { Button } from '../styles' // Renomeamos o que vem de styles.js

function DefaultButton({ children, ...props }) {
  return <Button {...props}>{children}</Button> // Usamos o nome renomeado aqui
}

export default DefaultButton
