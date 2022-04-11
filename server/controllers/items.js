const items = [{
    id:1,
    task:"Take Appointment",
    status: "Pending"
},
{
    id:2,
    task:"Fill medicle form",
    status: "Completed"
},
];

const getItemsList = (req, res) => {
    console.log(`get the list of items : ${items}`);
    res.send(items);
}

const addNewItem = (req,res) => {
    if(!req.body.task)
    {
        res.send(items);    
    }
    let itemIds = items.map(item => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    const newItem = { id: newId,
                      task: req.body.task,
                      status: "Pending"
            }
    items.push(newItem);
    
    console.log(`New item [${newItem.task}] is added to the list.`);
    res.send(newItem);
}
module.exports ={getItemsList,addNewItem};