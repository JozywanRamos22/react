import React from "react";
import { Button as ConteinerButton } from "./styles";
function Button({children, ...props }) {
    return <ConteinerButton {...props}>{children}</ConteinerButton>

}
export default Button