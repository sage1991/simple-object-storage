import { SVGProps } from "react"
export function Battery20Rounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z" />
      <path
        fillOpacity={0.3}
        d="M17 5.33C17 4.6 16.4 4 15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"
      />
    </svg>
  )
}
