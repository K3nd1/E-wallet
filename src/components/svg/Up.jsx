import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Up(props) {
  return (
    <Svg
      {...props}
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={25}
        cy={24}
        r={24}
        transform="rotate(-180 25 24)"
        fill="#EB1F39"
      />
      <Path
        d="M26 32V19.83l5.59 5.59L33 24l-8-8-8 8 1.41 1.41L24 19.83V32h2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Up
