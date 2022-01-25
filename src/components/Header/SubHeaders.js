import { React, Fragment, useState, useEffect, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import classes from './../../styles/SubHeaders.module.scss';
import classnames from 'classnames';

function SubHeaders ({headerId}) {
    const [isHovered, setIsHovered] = useState(null);
    const [subs, setSubs] = useState([]);
    const {subHeaders} = useSelector((state) => state.headers);

    useEffect(() => {
        setSubs(subHeaders && subHeaders.filter(sub => {return sub.headerId === headerId}));
    }, [])

    const navClassNames = isMobile ? 
                            classes.sub_header__mobile : 
                            classes.sub_header;
    const getColClasses = (index) => {
         return {
            [classes.sub_header__mobile__subName]: isMobile,
            [classes.sub_header__subName]: !isMobile,
            [classes.sub_header__subName__hovered]: !isMobile && isHovered === index
        }
     }

    const GetSubHeaders = memo(() => {
        return (
        <nav className={navClassNames}>
            {subs && subs.length > 0 && subs.map((sub, index) => {
                return (
                    <Fragment key={sub.id}>
                        <Col 
                            onMouseEnter={() => {setIsHovered(index)}}
                            onMouseLeave={() => {setIsHovered(null)}}
                            className={classnames(getColClasses(index))}>
                                <span>{sub.name}</span>
                        </Col>
                    </Fragment>
                )})}
        </nav>
        )
    });

    return ( 
        <GetSubHeaders />
    );
}

export default SubHeaders;