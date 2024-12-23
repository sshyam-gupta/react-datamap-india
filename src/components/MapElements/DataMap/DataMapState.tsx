import React from 'react'

interface DatamapStateProps {
  path(): string
  mouseEnterOnState(name: string, value: number, index: number): void
  name: string
  value: any
  fillColor: string | number
  hoverColor?: string
  borderColor: string
  hoverBorderColor?: string
  index: number
  onClick?(name: string, value: number): void
}

class DatamapState extends React.Component<DatamapStateProps> {
  state = {
    isActive: false,
  }

  constructor(props: DatamapStateProps) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleMouseLeave)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleMouseLeave)
  }

  handleMouseEnter() {
    const { name, value, index } = this.props

    this.setState({
      isActive: true,
    })
    this.props.mouseEnterOnState(name, value, index)
  }

  handleClick() {
    const { name, value } = this.props
    if (this.props.onClick) {
      this.props.onClick(name, value)
    }
  }

  handleMouseLeave() {
    this.setState({
      isActive: false,
    })
  }

  render() {
    const stateStyle = {
      cursor: 'pointer',
      fill: this.state.isActive
        ? this.props.hoverColor || '#FFCCBC'
        : this.props.fillColor,
      stroke: this.state.isActive
        ? this.props.hoverBorderColor || '#FF5722'
        : this.props.borderColor,
      strokeWidth: 0.5,
    }
    return (
      <path
        className="datamap-state"
        // @ts-ignore
        style={stateStyle}
        d={this.props.path()}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      />
    )
  }
}

export default DatamapState
