import { React, Fragment, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import classnames from 'classnames';

import classes from './../../styles/Header.module.scss';
import logo from './../../images/we_are_wonderful.png';
import menu from './../../images/menu.png';
import closeMenu from './../../images/x-icon.png';
import MainHeaders from './MainHeaders';


const Header = () => {
    //not using refs yet
    const [isMenuActive, setIsMenuActive] = useState(false);
    
    //keep our effect hook here for now, acts as DidMount
    useEffect(() => {
        
    }, [])

    //get our headers from from the store
    const { mainHeaders, subHeaders} = useSelector((state) => state.headers);

    return (
        <header className={classes.header}>
            <div>
                <Row  className={isMobile ? classes.header__content__mobile : classes.header__content}>
                    <Col xs={isMobile ? 10 : 2}>
                        <img className={!isMobile ? classes.header__content__logo : classes.header__content__logo__mobile} src={logo}  />
                    </Col>
                    { isMobile && <Col xs={2}>
                    <img className={isMenuActive ? classes.header__content__menu__mobile__close : classes.header__content__menu__mobile} onClick={() => setIsMenuActive(!isMenuActive)}src={isMenuActive ? closeMenu : menu} />
                    </Col>}
                    <Col>
                     { !isMobile && <br/> }
                     {(isMobile && isMenuActive || !isMobile) && 
                            <MainHeaders mainHeaders={mainHeaders} subHeaders={subHeaders} isMobile={isMobile} />
                        }
                    </Col>
                    
                </Row>
            </div>
        </header>
    )

};

export default Header;