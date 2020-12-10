import './Footer.css'

const Footer = (props)=>{
    return(
    <footer className="Footer">Copyright &copy; Pedals {new Date().getFullYear()} All Rights Reserved
    <a href="https://www.linkedin.com/in/jaredlong-95/"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/jlong4223"><i class="fab fa-github-square"></i></a>
    </footer>
    )
}

export default Footer 