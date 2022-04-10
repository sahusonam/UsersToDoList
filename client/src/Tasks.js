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
            console.log(data);
            this.setState({ tasks: data });
        } catch (error) {
            console.log(error);
        }
    }

    handleOnChange = (e) => {
        this.setState({ currentTask: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = this.state.tasks;

        try {
            const { data } = await addTask({ task: this.state.currentTask });
            const tasks = originalTasks;
            tasks.push(data);
            this.setState({ tasks, currentTask: "" });
        } catch (error) {
            console.log(error);
        }
    };
}

export default Tasks;