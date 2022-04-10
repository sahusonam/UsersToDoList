import { Component } from "react";
import {
    addTask,
    getTasks
    
} from "./services/taskServices.js";

class Tasks extends Component {
    state = { tasks: [], currentTask: "" };

    async componentDidMount() {
        try {
            const { data } = await getTasks();
            this.setState({ tasks: data });
        } catch (error) {
            console.log(error);
        }
    }
}

export default Tasks;