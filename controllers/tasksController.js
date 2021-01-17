const { raw } = require('body-parser');
const db=require('../models')

class TasksController{
    async get(req, res) { 
        const task = await db.tasks.findAll({ attributes: ["id", "name_id", "description", "status"] });
        res.json(task)
    }
    async post(req, res) {
        const nameId = req.body["name_id"];
        const desc = req.body["description"];
        const stat = req.body["status"];
        await db.tasks.create({
            name_id: nameId,
            description: desc,
            status: stat,
            createdAt:new Date(),
            updatedAt:new Date()
        })
        res.send(`successfully created new data of name ID: ${nameId}, with status: ${stat}`)
     }
    async put(req, res) { 
        const nameId = req.body["name_id"];
        const desc = req.body["description"];
        const stat = req.body["status"];
        const id = req.body.id
        await db.tasks.update(
            {
                name_id: nameId,
                description: desc,
                status:stat,
            },{where:{id:id}}
        )
        res.write(`success updated task id: ${id} with name_id as: ${nameId}`);
        res.write(` and description as: '${desc}'`);
        res.write(` and status as: ${stat}`);
        res.send();
    }
    async delete(req, res) { 
        const id = req.query.id;
        await db.tasks.destroy({where:{id:id}})
        res.send(`the record of id: ${id} has been deleted`);
    }
}

module.exports=Object.freeze(new TasksController())