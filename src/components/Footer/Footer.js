import './Footer.css'

const Footer = (props)=>{
    return(
    <footer className="Footer">Copyright &copy; Pedals {new Date().getFullYear()} All Rights Reserved
    &nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/jaredlong-95/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
    &nbsp;&nbsp;
    <a href="https://github.com/jlong4223" target='_blank' rel="noreferrer"><i className="fab fa-github-square"></i></a>
    </footer>
    )
}  

export default Footer 