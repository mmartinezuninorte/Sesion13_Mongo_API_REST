import express from 'express'
import taskRoutes from './routes/task.router'
import Task from './models/Task'

const app = express();

app.set('port', 3000);

app.use(express.json());

app.get('/',(req, res)=>{
    res.json({message:'Bienvenido a mi BackEnd!, consulta documentacion de mi API-REST para comunicarte conmigo!'})
})

app.use('/api/tasks', taskRoutes)

export default app