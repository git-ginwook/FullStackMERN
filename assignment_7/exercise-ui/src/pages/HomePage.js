import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);

    // RETRIEVE the list of exercises
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exerciseData = await response.json();
        setExercises(exerciseData);
    } 
    

    // UPDATE an exercise
    const onEdit = async exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }


    // DELETE an exercise  
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const deleteData = await getResponse.json();
            setExercises(deleteData);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the exercises
    useEffect(() => {
        loadExercises();
    }, []);

    // DISPLAY the exercises
    return (
        <>
            <article>
                <h3>Exercises Database</h3>
                <p>Tracking exercises</p>
                <ExerciseList 
                    exercises={exercises} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                />
            </article>
        </>
    );
}

export default HomePage;