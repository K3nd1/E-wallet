import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Down(props) {
  return (
    <Svg
      {...props}
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={24} cy={24} r={24} fill="#41BE06" />
      <Path
        d="M23 16v12.17l-5.59-5.59L16 24l8 8 8-8-1.41-1.41L25 28.17V16h-2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Down
