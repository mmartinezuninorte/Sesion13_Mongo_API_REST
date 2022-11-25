import express from 'express'
import Task from './models/Task'

const app = express();

app.set('port', 3000);

app.use(express.json());

app.get('/', async (req, res)=>{
    const tareas = await Task.find()
    res.json(tareas);
});

app.post('/', async (req, res)=>{
    const newTask = new Task ({
        title: req.body.title,
        description: req.body.description  
     });
     await newTask.save();
     console.log(newTask);
     res.send('Tarea guardada!')
})

export default app