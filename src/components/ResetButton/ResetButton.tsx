import "./ResetButton.scss"

type ResetButtonProps = {
  onClick: () => void
}

export const ResetButton = ({onClick} : ResetButtonProps) => {
  return (
    <div className="button-container">
        <button className="reset-button" onClick={onClick}>Reset</button>
    </div>
  )
}
