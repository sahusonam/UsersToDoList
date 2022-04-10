import React from 'react';
import {render} from "@testing-library/react";
import { AddItem } from '../../components/AddItem';

const props = {
    newItem: "1",
    handleOnChangeInput: jest.fn(),
    handleSubmit: jest.fn()
}
describe('AddItem',()=>{

    test('renders correctly',()=>{
        const tree = render(<AddItem {...props}></AddItem>)
        expect(tree).toMatchSnapshot();
    });
    
    
});