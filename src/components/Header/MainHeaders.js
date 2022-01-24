import classnames from 'classnames';
import { React, Fragment, useState, useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './../../styles/Header.module.scss';
import SubHeaders from './SubHeaders';


function MainHeaders ({mainHeaders, subHeaders, isMobile}) {
    const [isHovered, setIsHovered] = useState(null);
    const isActive = (index) => {
        return isHovered === index;
    } 

return (
    <nav className={classnames({
        [classes.header__content__nav]: !isMobile,
        [classes.header__content__nav__mobile]: isMobile
        })}>
    {mainHeaders.map((header, index) => {
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
                <SubHeaders subHeaders={subHeaders} isMobile={isMobile} headerId={header.id} />    
            </Row>}
            </Col>
        </Fragment>)
    })
    } </nav>
);
}

export default MainHeaders;