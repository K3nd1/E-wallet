import * as React from "react"
import Svg, { SvgProps, Rect, Path, Circle } from "react-native-svg"

function AppLogo(props) {
  return (
    <Svg
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={6}
        y={21}
        width={79}
        height={66}
        rx={10}
        fill="#B2BBC4"
        stroke="#3D6770"
        strokeWidth={4}
      />
      <Rect
        x={54}
        y={44}
        width={40}
        height={20}
        rx={4}
        fill="#B2B6B9"
        stroke="#3D6770"
        strokeWidth={4}
      />
      <Path
        d="M56 29h16a5 5 0 015 5v1M46 29h3M14 44v30a5 5 0 005 5h7M31 79h4M77 72h7M67 72h4"
        stroke="#3D6770"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Circle
        cx={64}
        cy={54}
        r={4}
        fill="#B2BBC3"
        stroke="#3D6770"
        strokeWidth={4}
      />
      <Path
        d="M20.072 21l1.516-1.964 1.026-1.038c1.531-1.552 2.724-2.76 3.816-3.723 1.315-1.159 2.349-1.833 3.433-2.222 2.222-.798 5.152-.603 11.988.785 8.932 1.814 15.876-1.091 20.52-4.808.835-.67 2.133-.995 3.368-.82 1.231.175 2.004.768 2.296 1.488L73.03 21H20.072z"
        fill="#ADFDB0"
        stroke="#3D6770"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default AppLogo