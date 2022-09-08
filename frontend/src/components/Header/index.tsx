import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return(
    <header>
        <div className="logo-container">
            <img src= {logo} alt="DSMeta" />
            <h1>Projeto React Spring</h1>
            <p>
                Desenvolvido por
                <a href="https://www.linkedin.com/in/reynaldo-carballar-133471214"> @ReynaldoCosta</a>
            </p>
        </div>
    </header>
  )
}

export default Header