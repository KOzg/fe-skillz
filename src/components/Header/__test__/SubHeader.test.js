import React from 'react';
import SubHeaders from './../SubHeaders';
import * as reactRedux from 'react-redux';
import { create } from 'react-test-renderer';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

beforeEach(() => {
    useSelectorMock.mockClear();
  })

  let component;

describe('SubHeader', () => {

    it('matches the snapshot', () => {
        useSelectorMock.mockReturnValue({});
        component = create(<SubHeaders headerId={0} />);
        expect(component.toJSON).toMatchSnapshot();
    })

    it('component shouldnt crash even if no sub headers', () => {
        useSelectorMock.mockReturnValue({});
        component = create(<SubHeaders headerId={0}/>).toJSON();
        expect(component.type).toBe('nav');
        expect(component.props.className.includes('__subNav')).toBe(true);
        expect(component.children).toBe(null);
    });
  })