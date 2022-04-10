import { status } from "../constants.js";
import { v4 as uuid } from 'uuid';

const items = [{
    id:1,
    task:"Take Appointment",
    status: status.PENDING
},
{
    id:2,
    task:"Fill medicle form",
    status: status.COMPLETED
},
];

export const getItemsList = (req, res) => {
    console.log(`get the list of items : ${items}`);
    res.send(items);
}

export const addNewItem = (req,res) => {
    const newItem = { id: uuid(),
                      task: req.body.task,
                      status: status.PENDING
            }
    items.push(newItem);
    
    console.log(`New item [${newItem.task}] is added to the list.`);
    res.send(newItem);
}