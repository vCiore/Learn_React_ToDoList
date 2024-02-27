import './App.css';
import TaskList from "./components/TaskList";
import {ChakraProvider, Input, Button, IconButton} from '@chakra-ui/react'
import {useState} from "react";
import Title from "./components/Title";
import {AddIcon, CheckIcon} from "@chakra-ui/icons";


function App() {
    const title = 'Schedule'
    const [tasks, setTasks] = useState([]);

    const [newTaskText, setNewTaskText] = useState('');

    const [editedTaskId, setEditedTaskId] = useState(null);


    const handleAddTask = () => {

        if (editedTaskId !== null) {
            setTasks(prevTasks =>
                prevTasks.map(task => task.id === editedTaskId ? {...task, text: newTaskText} : task))
            setNewTaskText('')
            setEditedTaskId(null)

        } else if (newTaskText.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text: newTaskText,
                completed: false,
            }
            setTasks(prevTasks => [...tasks, newTask]);
            setNewTaskText('')
        }
    }

    const handleDelete = (taskId) => {

        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId))
    }

    const handleEdit = (taskId) => {

        setEditedTaskId(taskId)
        const getTask = tasks.find(task => task.id === taskId)
        setNewTaskText(getTask.text)

    }

    const handelToggle = (taskId) => {
        setTasks(prevTasks=>
                           prevTasks.map(task => task.id===taskId ? {...task, completed: !task.completed}: task)
                )
    }

    return (
        <ChakraProvider className='App'>

            <Title title={title}/>

            <Input
                placeholder='Enter new task'
                value={newTaskText}
                mb={4}
                size='md'
                variant='filled'
                onChange={(e) => setNewTaskText(e.target.value)}
            />

            <Button
                colorScheme='cyan'
                variant='solid'
                size='lg'
                leftIcon={editedTaskId === null? <AddIcon /> : <CheckIcon />}
                onClick={handleAddTask}
            >
                {editedTaskId === null ? 'ADD' : 'SUBMIT'}
            </Button>


            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onToggle={handelToggle}
            />


        </ChakraProvider>
    );
}

export default App;
