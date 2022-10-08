import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, onEdit, onDelete }) {
    return (
        <table id="exercises">
            <caption>Create, Edit, Delete Exercises</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => 
                    <Exercise 
                        exercise={exercise} 
                        key={i}
                        onEdit={onEdit} 
                        onDelete={onDelete}
                    />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
