
const { users, tasks } = require('.');
const db=require('../models')

class TasksController{
    async get(req, res) { 
        const usersModel = db.users;
        const tasksModel = db.tasks;

        usersModel.hasMany(tasksModel);
        tasksModel.belongsTo(usersModel,{foreignKey:"name_id"})


        const task = await tasksModel.findAll({
            attributes: ["id", "description", "status"],
            include: [
            {
                model: usersModel,
                attributes:["full_name"]
            }
            ]
        });
        res.json(task)
    }
    async post(req, res) {
        const nameId = req.body["name_id"];
        const desc = req.body["description"];
     
        await db.tasks.create({
            name_id: nameId,
            description: desc,
            status: 0,
            createdAt:new Date(),
            updatedAt:new Date()
        })
        res.send(`successfully created new data of name ID: ${nameId}, with description: ${desc}`)
     }
    async put(req, res) { 

        const desc = req.body["description"];
        const stat = req.body["status"];
        const id = req.body.id
        await db.tasks.update(
            {
                description: desc,
                status:stat,
            },{where:{id:id}}
        )
        res.write(`success updated task id: ${id}`);
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