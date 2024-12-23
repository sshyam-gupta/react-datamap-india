import React from 'react'

interface StateInfoModalProps {
  isOpen: boolean
  name: string
  value: any
  onClose: () => void
  onClickComponent?: any
}

class StateInfoModal extends React.Component<StateInfoModalProps> {
  render() {
    const { isOpen, name, value, onClose, onClickComponent } = this.props

    // If the modal is not open, return null
    if (!isOpen) return null
    const HoverComponent = this.props.onClickComponent
    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              marginLeft: 'auto',
              fontSize: '24px',
              fontWeight: '600',
              textAlign: 'right',
            }}
          >
            &#x2715;
          </button>

          {onClickComponent && (
            <HoverComponent
              value={{ ...this.props.value, name: this.props.name }}
            />
          )}
        </div>
      </div>
    )
  }
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid #fd0b0b',
  },
  modal: {
    // border: '1px solid #1fe349',
    maxWidth: '60vw',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
  },
} as const

export default StateInfoModal
