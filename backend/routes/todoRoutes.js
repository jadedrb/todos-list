import express from 'express'

const router = express.Router()

import todoController from '../controllers/todoController.js'

router.get('/todos', todoController.getTodos)
router.post('/todos', todoController.createTodo)
router.delete('/todos/:id', todoController.deleteTodo)
router.put('/todos/:id', todoController.updateTodo)

export default router