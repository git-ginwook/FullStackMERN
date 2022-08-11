import 'dotenv/config';
import express from 'express';
import * as exercises from './exercise-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// CREATE controller ******************************************
// POST a new exercise
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


// RETRIEVE controller ****************************************************
// GET exercises filtered by name, reps, weight, unit, and/or date
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

// GET exercises by ID
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.readExerciseById(exerciseId)
        .then(exercise => { 
            res.json(exercise);  
         })
        .catch(error => {
            res.status(404).json({ Error: 'Document not found' });
        });

});


// // DELETE Controller ******************************
// app.delete('/movies/:_id', (req, res) => {
//     movies.deleteById(req.params._id)
//         .then(deletedCount => {
//             if (deletedCount === 1) {
//                 res.status(204).send();
//             } else {
//                 res.status(404).json({ Error: 'Document not found' });
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             res.send({ error: 'Request to delete a document failed' });
//         });
// });

// // UPDATE controller ************************************
// app.put('/movies/:_id', (req, res) => {
//     movies.replaceMovie(
//         req.params._id, 
//         req.body.title, 
//         req.body.year, 
//         req.body.language
//     )

//     .then(numUpdated => {
//         if (numUpdated === 1) {
//             res.json({ 
//                 _id: req.params._id, 
//                 title: req.body.title, 
//                 year: req.body.year, 
//                 language: req.body.language 
//             })
//         } else {
//             res.status(404).json({ Error: 'Document not found' });
//         }
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(400).json({ Error: 'Request to update a document failed' });
//     });
// });


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});