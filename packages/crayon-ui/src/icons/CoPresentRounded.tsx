import { SVGProps } from "react"
export function CoPresentRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <path d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      <circle cx={9} cy={10} r={4} />
      <path d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z" />
    </svg>
  )
}
