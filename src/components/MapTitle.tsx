import { TitleProps } from '../types'

function MapTitle(props: TitleProps) {
  const { text } = props

  return (
    <g>
      <text x={15} y={25}>
        {text}
      </text>
    </g>
  )
}

export default MapTitle
