import { Children, ComponentProps, FC, HTMLAttributes, ReactElement, MouseEvent } from "react"

import { SegmentButton } from "./SegmentButton"

import { Container, Root } from "./Segment.styled"

type SegmentButtonElement = ReactElement<ComponentProps<typeof SegmentButton>>

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentValue: string
  onValueChange: (value: string) => void
  children?: SegmentButtonElement | SegmentButtonElement[]
}

export const Segment: FC<Props> = ({
  children,
  currentValue,
  onValueChange,
  onClick,
  ...props
}) => {
  const _children = Children.toArray(children) as SegmentButtonElement[]
  const index = _children.findIndex(({ props: { value } }) => value === currentValue)

  const onSegmentClick = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, target } = e
    if (target instanceof HTMLElement) {
      const button = findSegmentButton(target, currentTarget)
      button && onValueChange?.(button.value)
    }
    onClick?.(e)
  }

  return (
    <Root {...props} onClick={onSegmentClick} index={index} length={_children.length}>
      <Container length={_children.length}>{children}</Container>
    </Root>
  )
}

const findSegmentButton = (target: HTMLElement, root: HTMLDivElement): HTMLButtonElement | null => {
  if (target.matches("button")) {
    return target as HTMLButtonElement
  }
  const { parentElement } = target
  if (target === root || !parentElement) {
    return null
  }
  return findSegmentButton(parentElement, root)
}
