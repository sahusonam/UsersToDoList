import React from 'react';
import {render} from "@testing-library/react";
import { TodoItem } from '../../components/TodoItem';

const props = {
    id: 1,
    status: "Completed",
    task: 'shopping'
}
describe('TodoItem',()=>{

    test('renders correctly',()=>{
        const tree = render(<TodoItem {...props}></TodoItem>)
        expect(tree).toMatchSnapshot();
    });
});