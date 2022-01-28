import React from "react";

import wikipedia from '../images/wikipedia.png'
import classes from './Header.module.css'

const Header = () => {
    return <div className={classes.flex}>
        <img className={classes.img} src={wikipedia} alt=''/>
        <p className={classes.p}>Wikipédia</p>
    </div>
}

export default Header