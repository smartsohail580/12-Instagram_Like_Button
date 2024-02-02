import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            if (selectedTask) {
                // Update existing task
                const updatedTasks = tasks.map((t) =>
                    t.id === selectedTask.id ? { ...t, text: task } : t
                );
                setTasks(updatedTasks);
                setSelectedTask(null);
            } else {
                // Add new task
                const newTask = {
                    id: new Date().getTime(),
                    text: task,
                };
                setTasks([...tasks, newTask]);
            }
            setTask('');
        }
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleEditTask = (task) => {
        setTask(task.text);
        setSelectedTask(task);
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto' }}>
            <h1>Todo App</h1>
            <TextField
                label="Task"
                variant="outlined"
                fullWidth
                value={task}
                onChange={handleInputChange}
                style={{ marginBottom: 16 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddTask} style={{ marginBottom: 16 }}>
                {selectedTask ? 'Update Task' : 'Add Task'}
            </Button>
            <List>
                {tasks.map((t) => (
                    <ListItem key={t.id}>
                        <ListItemText primary={t.text} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(t)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(t.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoApp;
