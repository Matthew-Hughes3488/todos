import { ResetButton } from "../ResetButton/ResetButton"
import "./Header.scss"

type HeaderProps = {
  onClick: () => void
}


export const Header = ({onClick} : HeaderProps) => {
  return (
    <header className='header-container'>
        <h1 className='header-container__title'>My Todos</h1>
        <ResetButton onClick={onClick}/>
    </header>
  )
}
