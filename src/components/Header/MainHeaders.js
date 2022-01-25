import { React, Fragment, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import {isMobile} from 'react-device-detect';
import { Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import otherclasses from './../../styles/MainHeaders.module.scss';
import SubHeaders from './SubHeaders';
import { open, close } from '../../constants/constants';


function MainHeaders () {
    const [isHovered, setIsHovered] = useState(null);

    const {mainHeaders, subHeaders} = useSelector((state) => state.headers);;

    const isHeaderActive =  (id) => {return isMobile && isActive(id) && hasSubHeaders(id)};

    const isActive = (index) => {
        return isHovered === index;
    }

    const hasSubHeaders = (headerId) => {
        return subHeaders.some(sub => sub.headerId === headerId);
    }

    const getNavClasses = () => {
       return { [otherclasses.main_header]: !isMobile
    }};

    const getColClasses = (index) => {
        return {
            [otherclasses.main_header__name]: !isActive(index) && !isMobile,
            [otherclasses.main_header__name__mobile]: isMobile,
            [otherclasses.main_header__name__hover]: isActive(index) && !isMobile,
            [otherclasses.main_header__name__mobile__active]: isActive(index) && isMobile && hasSubHeaders(index)
        }
    }; 

    const getRowClasses = (index, id) => { 
            return {
                [otherclasses.main_header__name__mobile__text]: isMobile,
                [otherclasses.main_header__name__mobile__text__active]: isHeaderActive(id)
            }};

    const GetHeaders = memo(() => {
        return (
            <nav  className={classnames(getNavClasses())}>
            {mainHeaders && mainHeaders.map((header, index) => {
                return (
                    <Fragment key={header.id}> 
                        <Col  
                            className={classnames(getColClasses(index))}
                            onMouseEnter={() => {setIsHovered(index)}}
                            onMouseLeave={() => {setIsHovered(null)}}>
                            <Row className={classnames(getRowClasses(index, header.id))}>
                            <Col xs={10}><span>{header.name}</span></Col> 
                            {isMobile && hasSubHeaders(header.id) && <Col xs={2}><h1>{isActive(header.id) ? close : open}</h1></Col>}
                            </Row>
                            { isActive(header.id) && hasSubHeaders(header.id) &&
                            <SubHeaders headerId={header.id} />    
                            }
                        </Col>
                    </Fragment>
                    )})} 
            </nav >
        )
    }, [isHovered])

    return (
            <GetHeaders />
    );
}

export default MainHeaders;