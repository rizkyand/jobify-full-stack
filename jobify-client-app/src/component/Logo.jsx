import logo from '../assets/images/logo.svg';

const Logo = (props) =>{
    const paddingLogo = {
        paddingBottom : props.style || '6px'
    }
    return <img src={logo} alt="jobify" className="logo" style={paddingLogo}/>
}

export default Logo;