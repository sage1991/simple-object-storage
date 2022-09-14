import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ColorVariant, css } from "@emotion/react"

import { Mixin, Palette, Radius } from "../../theme"
import { Ripple } from "./Ripple"

const meta: ComponentMeta<typeof Ripple> = {
  title: "Ripple",
  component: Ripple
}

export default meta

const Template: ComponentStory<typeof Ripple> = (props) => {
  const colorVariants: ColorVariant[] = ["primary", "secondary", "success", "error", "warning"]
  return (
    <div
      css={css`
        ${Mixin.flex({ alignment: "flex-start" })}
      `}
    >
      {colorVariants.map((color) => (
        <div
          key={color}
          css={css`
            ${Mixin.flex({ alignment: "center", justify: "center" })}
            width: 100px;
            height: 50px;
            border: 1px solid ${Palette.gray["600"]};
            border-radius: ${Radius.xl}px;
            position: relative;
            cursor: pointer;
            margin-right: 15px;
            overflow: hidden;
          `}
        >
          <p>CLICK ME!</p>
          <Ripple {...props} color={color} />
        </div>
      ))}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: "primary",
  center: false
}

export const Center = Template.bind({})
Center.args = {
  color: "primary",
  center: true
}
