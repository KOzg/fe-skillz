import { React, Fragment, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import classnames from 'classnames';

import classes from './Header.module.scss';
import logo from './../../images/we_are_wonderful.png';
import menu from './../../images/menu.png';
import closeMenu from './../../images/x-icon.png';


const Header = () => {
    //not using refs yet
    const [isHovered, setIsHovered] = useState(null);
    const [isMenuActive, setIsMenuActive] = useState(false);
    
    //keep our effect hook here for now, acts as DidMount
    useEffect(() => {
        
    }, [])

    //get our headers from from the store
    const headers = useSelector((state) => state.headers);

    const isActive = (index) => {
        return isHovered === index;
    } 


    return (
        <header className={classes.header}>
            <div>
                <Row  className={isMobile ? classes.header__content__mobile : classes.header__content}>
                    <Col xs={isMobile ? 10 : 4}>
                        <img className={!isMobile ? classes.header__content__logo : classes.header__content__logo__mobile} src={logo}  />
                    </Col>
                    { isMobile && <Col xs={2}>
                    <img className={isMobile ? classes.header__content__menu__mobile : classes.header__content__menu__mobile} onClick={() => setIsMenuActive(!isMenuActive)}src={isMenuActive ? closeMenu : menu} />
                    </Col>}
                    <Col>
                     <br/>
                     {((isMobile && isMenuActive) || !isMobile) && 
                        <nav className={classnames({
                            [classes.header__content__nav]: !isMobile,
                            [classes.header__content__nav__mobile]: isMobile
                            })}>
                            {headers.map((header, index) => {
                                return (
                                    <Fragment key={header.id}> 
                                    <Col     onMouseEnter={() => {setIsHovered(index)}}
                                        onMouseLeave={() => {setIsHovered(null)}}>
                                    <Row
                                    className={classnames({
                                        [classes.header__content__nav__name]: !isActive(index),
                                       [classes.header__content__nav__name__hover]: isActive(index)
                                     })}
                                    >
                                        <Col xs={10}>
                                            <span >
                                             {header.name}
                                            </span>
                                        </Col> 
                                        {isMobile && <Col xs={2}><h1>{isActive(index) ? '-' : '+'}</h1></Col>}
                                    </Row>
                                    { isActive(index) && <Row>
                                        
                                        <div className={classes.header__content__nav__name__subNav}>
                                            <Col>Testing1</Col>
                                            <Col>Testing2</Col>
                                        </div>
                                        
                                    </Row>}
                                    </Col>
                                </Fragment>)
                            })
                            }
                        </nav> }
                    </Col>
                    
                </Row>
            </div>
        </header>
    )

};

export default Header;