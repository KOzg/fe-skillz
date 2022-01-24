import classnames from 'classnames';
import { React, Fragment, useState, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import classes from './../../styles/Header.module.scss';

function SubHeaders ({subHeaders, isMobile, headerId}) {
    return ( <nav className={isMobile ? classes.header__content__nav__name__subNav__movile : classes.header__content__nav__name__subNav}>
        {subHeaders.filter(sub => {return sub.headerId === headerId}).map(sub => {
            return (
                <Fragment key={sub.id}>
                    <Col >{sub.name}</Col>
                </Fragment>
            )
        })}
    </nav>);
}

export default SubHeaders;