import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully created exercise! Status code = ${response.status}`);
        } else {
            alert(`Failed to create exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Create new exercise</h2>
            <p>Enter values for a new exercise</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(Number(e.target.value))} 
                        id="reps"
                        required />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(Number(e.target.value))} 
                        id="weight"
                        required />

                    <label for="unit">Unit</label>
                    <select 
                        required = "required"
                        type="text"
                        name="unit" 
                        id="unit"
                        onChange={e => setUnit(e.target.value)} 
                    >
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                        <option value="miles">miles</option>
                    </select>           

                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="MM-DD-YY"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required />

                    <label for="create">
                    <button
                        type="submit"
                        onClick={createExercise}
                        id="create"
                    >Create</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;