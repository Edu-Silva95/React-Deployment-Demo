import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>© {new Date().getFullYear()} Test Website by Eduardo Malta Silva. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
