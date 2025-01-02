import Todo from "../models/todoModel.js";

async function getTodos(req, res) {
    try {
        // use find method on the model to retrieve all documents from the todos collection
        const todos = await Todo.find({})
        console.log('GET /todos')
        // send those documents to the client
        res.status(200).json(todos)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
}

async function createTodo(req, res) {
    try {
        console.log(req.body)
        const newTodo = await Todo.create(req.body)
        res.status(201).json(newTodo)
        console.log('POST /todos')
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }  
}

async function deleteTodo(req, res) {
    try {
        // use the id from the params to find and delete the document
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
        console.log(deletedTodo)
        console.log('DELETE /todos/:id')
        res.status(200).json(deletedTodo)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
}

async function updateTodo(req, res) {
    try {
        // use the model to find the document and replace it with the updated one (req.body)
        // we can add { new: true } to the options object to get the updated version of the document in our response
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log('PUT /todos/:id')
        res.status(200).json(updatedTodo)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
}

export default {
    updateTodo,
    getTodos,
    deleteTodo,
    createTodo
}