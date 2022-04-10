import { status } from "../constants.js";


const items = [{
    id: 1,
    task:"Take Appointment",
    status: status.PENDING
},
{
    id: 1,
    task:"Fill medicle form",
    status: status.COMPLETED
},
];

export const getItemsList = (req, res) => {
    console.log(`get the list of items : ${items}`);
    res.send(items);
}