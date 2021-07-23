import * as React from "react"
import Svg, { Path, Rect, Circle } from "react-native-svg"

function AnalitycsLogo(props) {
  return (
    <Svg
      {...props}
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path fill="#fff" d="M0 0h30v30H0z" />
      <Rect x={3.5} y={22.5} width={23} height={2} rx={0.5} stroke="#94AFB6" />
      <Path
        d="M5.5 13a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v9.5h-5V13zM12.5 10a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v12.5h-5V10zM19.5 18a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4.5h-5V18z"
        stroke="#94AFB6"
      />
      <Circle cx={8} cy={8} r={1.5} stroke="#94AFB6" />
      <Circle cx={15} cy={4} r={1.5} stroke="#94AFB6" />
      <Circle cx={22} cy={12} r={1.5} stroke="#94AFB6" />
      <Path d="M9 7l5-2M16 5l5 5.5" stroke="#94AFB6" />
    </Svg>
  )
}

export default AnalitycsLogo
