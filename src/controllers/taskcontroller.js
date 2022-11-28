import Task from '../models/Task'

export const findAllTasks = async (req, res)=>{
    const tareas = await Task.find()
    res.json(tareas);
}

export const findOneTask = async (req, res)=>{
    const id = req.params.id
    const task = await Task.findById(id)
    res.json(task)
}

export const newTask = async (req, res)=>{
    const newTask = new Task ({
        title: req.body.title,
        description: req.body.description  
     });
     await newTask.save();
     console.log(newTask);
     res.send('Tarea guardada!')
}

export const deleteTask = async (req, res) =>{
    const id = req.params.id
    await Task.findByIdAndDelete(id)
    res.json({message: `La tarea con id: ${id} fue eliminada satisfactoriamente!`})
}

export const updateTask = async (req, res) =>{
    const id = req.params.id
    await Task.findByIdAndUpdate(id, req.body)
    res.json({message: `La tarea con id: ${id} ha sido actualizada!`})

}