import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exerciseToEdit }) => {
 
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date.substring(0,10));
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date: date,
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.status === 200) {
            alert(`Successfully edited document! Status code = ${response.status}`);
        } else if (response.status === 404) {
            alert(`Document not found. Status ${response.status}`);
        } else if (response.status === 400) {
            alert(`Edit request failed. Status ${response.status}`)
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an exercise</h2>
            <p>Change values to edit an exercise</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="name">Name</label>
                    <input
                        type="text"
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
                        type="text"
                        name="unit" 
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        >
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                        <option value="miles">miles</option>
                    </select>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required />

                    <label for="edit">
                    <button
                        type="submit"
                        onClick={editExercise}
                        id="edit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditExercisePage;