import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Made by <strong>Varollo</strong> no-&copy; {new Date().getFullYear()} with ❤️</p>
      <a href="https://github.com/Varollo/varollo.github.io">Click <strong>here</strong> to access this page's repository.</a>
    </footer>
  )
}

export default Footer