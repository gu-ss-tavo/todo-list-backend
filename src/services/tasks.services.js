const fs = require('fs/promises');
const path = require('path');
const { v4: uuid } = require('uuid');

const TASK_PATH = path.resolve(__dirname, '..', 'tasks.json');

const writeTasks = async (todolist) => {
    try {
        await fs.writeFile(TASK_PATH, JSON.stringify(todolist));
    } catch (error) {
        throw error;
    }
};

const getAllTasks = async () => {
    try {
        const tasks = await fs.readFile(TASK_PATH, 'utf8');
        return JSON.parse(tasks);
    } catch (error) {
        throw error;
    }
};

const getTaskById = async (id) => {
    try {
        const tasks = await getAllTasks();
        const task = tasks.find((e) => e.id === id);
        return task;
    } catch (error) {
        throw error;
    }
};

const addTask = async (newTask) => {
    try {
        const tasks = await getAllTasks();
        const nextId = uuid();

        const newTaskObj = {
            id: nextId,
            ...newTask,
        };
        tasks.push(newTaskObj);
        await writeTasks(tasks);
        return newTaskObj;
    } catch (error) {
        throw error;
    }
};

const updateTask = async (id, task) => {
    try {
        const tasks = await getAllTasks();

        const taskIndex = tasks.findIndex((e) => e.id === id);

        const updatedTask = {
            ...tasks[taskIndex],
            ...task,
        };

        tasks[taskIndex] = updatedTask;
        await writeTasks(tasks);
        return updatedTask;
    } catch (error) {
        throw error;
    }
};

const deleteTask = async (id) => {
    try {
        const tasks = await getAllTasks();
        const taskIndex = tasks.findIndex((e) => e.id === id);
        tasks.splice(taskIndex, 1);
        await writeTasks(tasks);
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask,
};