import classes from './mainHeader.module.css';
import LOGO from '../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={LOGO} className={classes.logoimg} />
        </Link>
      </div>

      <div className={classes.links}>
        <ul className={classes.linklist}></ul>
      </div>
    </nav>
  );
}

export default MainHeader;
