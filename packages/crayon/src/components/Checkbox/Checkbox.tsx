import { forwardRef, InputHTMLAttributes } from "react"
import { CheckBoxOutlineBlankRounded, CheckBoxRounded } from "@crayon-ui/icons"

import { ColorVariant } from "../../theme"
import { useCheckbox } from "./useCheckbox"
import { Ripple } from "../Ripple"

import { CheckboxRoot, Input } from "./Checkbox.styled"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorVariant
  icon?: JSX.Element
  checkedIcon?: JSX.Element
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  (
    {
      style,
      className,
      icon = <CheckBoxOutlineBlankRounded />,
      checkedIcon = <CheckBoxRounded />,
      disabled = false,
      color = "primary",
      ...rest
    },
    ref
  ) => {
    color = disabled ? "disabled" : color
    const { isIconChecked, onChange } = useCheckbox(rest)

    return (
      <CheckboxRoot style={style} className={className} color={color}>
        {isIconChecked ? checkedIcon : icon}
        <Ripple color={color} center disabled={disabled}>
          <Input {...rest} ref={ref} type="checkbox" disabled={disabled} onChange={onChange} />
        </Ripple>
      </CheckboxRoot>
    )
  }
)
