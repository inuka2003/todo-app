const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});


router.post('/', async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});


router.put('/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, {
    completed: req.body.completed,
  }, { new: true });
  res.json(updated);
});


router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
