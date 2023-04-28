import React, {Fragment} from 'react';
import classes from './../../assets/css/Header.module.css';
import mealImage from './../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="Tasty meals" />
        </div>
    </Fragment>);
};

export default Header;