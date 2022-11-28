import { Router } from 'express';
import * as taskCtrl from '../controllers/taskcontroller';
import Task from '../models/Task';

//Inicializando router
const router = Router()

//Los controladores se encuentran en ../controller/taskcontroller

//Mediante el metodo GET en la ruta relativa principal, busca TODAS las tareas
router.get('/', taskCtrl.findAllTasks)

//Mediante el metodo GET y recibiendo parametro, busca la tarea mediante un ID especifico
router.get('/:id', taskCtrl.findOneTask)

//Mediante el metodo POST, creamos una nueva tarea, basandonos en el body de la peticion
router.post('/', taskCtrl.newTask)

//Mediante el metodo DELETE y parametro, eliminamos una tarea mediante el ID
router.delete('/:id', taskCtrl.deleteTask)

//PUT y parametro, para actualizar una tarea usando el ID de parametro y body para actualizar datos
router.put('/:id', taskCtrl.updateTask)

export default router;