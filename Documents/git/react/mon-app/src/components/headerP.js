import '../assets/css/headerP.css'
import logo_8 from '../assets/image/logo-blue.png'

function headerPerso() {
    return(
        <div className="headerContainer">
            <img className="imageLogo" src={logo_8} alt="Logo du site"/>
            <h1>titre du site</h1>
        </div>
    )
}
export default headerPerso