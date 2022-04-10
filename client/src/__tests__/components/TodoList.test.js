import React from 'react';
import {render} from "@testing-library/react";
import { TodoList } from '../../components/TodoList';
import {mockTaskList} from '../../__mockData__/mockTaskList';

const props = {
    todosList: mockTaskList
};
describe('TodoList',()=>{

    test('renders correctly',()=>{
        const tree = render(<TodoList {...props}></TodoList>)
        expect(tree).toMatchSnapshot();
    });
});