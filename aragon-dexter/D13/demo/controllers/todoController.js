const Todo = require('../models/todoModel');

const createTodo = async (req, res) => {
    try{
        const {title, description} = await req.body;
        const todo = new Todo({
            title,
            description
        });

        await todo.save();

        res.status(201).json(todo);
    }catch (err){
        res.status(500).json({error: 'Server error'})
        console.error('Error Occured:', err);        
    }
}