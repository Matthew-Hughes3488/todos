import { ResetButton } from "../ResetButton/ResetButton"
import "./Header.scss"


export const Header = () => {
  return (
    <header className='header-container'>
        <h1 className='header-container__title'>My Todos</h1>
        <ResetButton/>
    </header>
  )
}
