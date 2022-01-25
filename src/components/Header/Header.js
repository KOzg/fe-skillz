import { React, Fragment, useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import classnames from 'classnames';

import classes from './../../styles/Header.module.scss';
import logo from './../../images/we_are_wonderful.png';
import menu from './../../images/menu.png';
import closeMenu from './../../images/x-icon.png';
import MainHeaders from './MainHeaders';
import { logoUrl, logoAlt, menuButtonAlt } from '../../constants/constants';



const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const rowClasses = isMobile ? classes.header__content__mobile : classes.header__content;
    const logoClasses = !isMobile ? classes.header__content__logo : classes.header__content__logo__mobile;
    const menuImageClasses = isMenuActive ? classes.header__content__menu__mobile__close : classes.header__content__menu__mobile;
    

    return (
        <header className={classes.header}>
            <div>
                <Row  className={rowClasses}>
                    <Col xs={isMobile ? 10 : 2}>
                       <a href={logoUrl}><img className={logoClasses} src={logo} alt={logoAlt}/></a>
                    </Col>
                    { isMobile && 
                        <Col className={classes.header__content__menu} xs={2}>
                        <img className={menuImageClasses} 
                            onClick={() => setIsMenuActive(!isMenuActive)}
                            src={isMenuActive ? closeMenu : menu}
                            alt={menuButtonAlt} />
                        </Col>
                    }
                    <Col className={classnames({
                                [classes.header__content__nav__mobile]: isMobile
                    })}>
                     { !isMobile && <br/> }
                     {(isMobile && isMenuActive || !isMobile) && 
                         <MainHeaders />
                        }
                    </Col>
                </Row>
            </div>
        </header>
    )

};

export default Header;