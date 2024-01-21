/* eslint-disable react/prop-types */
import { ComponentButton } from "./style.button"

export const Button = ({ children, ...rest}) => {
  return (
    <ComponentButton {...rest}>{children}</ComponentButton>
  )
}

