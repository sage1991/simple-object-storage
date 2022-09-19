import styled from "@emotion/styled"
import { ColorVariant } from "@emotion/react"

import { Mixin, Palette, Radius, Shadow } from "../../theme"
import { alpha } from "../../utils"

interface ButtonRootProps {
  color: ColorVariant
  variant: "contained" | "outlined" | "text"
}

export const ButtonRoot = styled("button")<ButtonRootProps>(({ theme, color, variant }) => {
  const commonStyle = `
    ${Mixin.typography({ size: "1rem", weight: "500" })}
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    border-radius: ${Radius.xs}px;
    text-align: center;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  `

  if (variant === "contained") {
    return `
      ${commonStyle}
      box-shadow: ${Shadow.low};
      color: ${theme.palette[color].contrast};
      background-color: ${theme.palette[color].main};
      transition: box-shadow 300ms, background-color 300ms;
      
      :hover {
        box-shadow: ${Shadow.medium};
        background-color: ${theme.palette[color].dark};
      }
    `
  }

  if (variant === "outlined") {
    return `
      ${commonStyle}
      color: ${theme.palette[color].main};
      background-color: ${Palette.white};
      transition: background-color 300ms;
      border: 1px solid ${theme.palette[color].main};
      
      :hover {
        background-color: ${alpha(theme.palette[color].light)};
      }
    `
  }

  return `
    ${commonStyle}
    color: ${theme.palette[color].main};
    background-color: ${Palette.white};
    transition: background-color 300ms;
    
    :hover {
      background-color: ${alpha(theme.palette[color].light)};
    }
    `
})