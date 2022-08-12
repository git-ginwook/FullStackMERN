import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
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
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(Number(e.target.value))} 
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(Number(e.target.value))} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <input
                        // use <select> element
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" />

                    <label for="date">Date</label>
                    <input
                        type="text"
                        placeholder="MM-DD-YY"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="edit">
                    <button
                        type="submit"
                        onClick={editExercise}
                        id="edit"
                    >Edit</button></label>
                </fieldset>
                </form>
            </article>

        {/* <article>
            <h2>Edit an exercise in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you editing?</legend>
                    <label for="title">Movie title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="year">Year released</label>
                    <input
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="language">Language</label>
                    <input
                        type="text"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        onClick={editMovie}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article> */}


        </>
    );
}

export default EditExercisePage;