import 'dotenv/config';
import express from 'express';
import * as exercises from './exercise-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
// 1. Create using POST /exercises
app.post ('/exercises', (req,res) => { 
    exercises.createExercise(
        req.body.name, 
        req.body.reps, 
        req.body.weight,
        req.body.unit,
        req.body.date
        )
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of an exercise failed due to invalid syntax.' });
        });
});


// READ controllers ****************************************************
// 2. Read using GET /exercises
app.get('/exercises', (req, res) => {
    exercises.readExercises()
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve documents failed' });
        });

});

// 3. GET using GET /exercises/:id
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.readExerciseById(exerciseId)
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Document not found' });    
            }
         })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Document not found' });
        });

});


// UPDATE controller ************************************
app.put('/exercises/:_id', (req, res) => {
    exercises.updateExercise(
        req.params._id, 
        req.body.name, 
        req.body.reps, 
        req.body.weight,
        req.body.unit,
        req.body.date
    )
    .then(numUpdated => {
        if (numUpdated === 1) {
            res.json({ 
                _id: req.params._id, 
                name: req.body.name, 
                reps: req.body.reps, 
                weight: req.body.weight,
                unit: req.body.unit,
                date: req.body.date 
            })
        }
        // validation rules
        // if...
        // if...
        
        // else {}
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({ Error: 'Request to update a document failed' });
    });
});


// DELETE Controller ******************************
// 5. DELETE using DELETE /exercises/:id
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});