const express = require('express');
const mongoose = require('mongoose');
const FormModel = require('./Model');


const app = express();

// Parse JSON request body
app.use(express.json());

// Connect to MongoDB
// const db = 'mongodb+srv://richagshah:sarita700@cluster0.zygzowx.mongodb.net/flex?retryWrites=true&w=majority';
// const db = 'mongodb+srv://richagshah:sarita700@cluster0.zygzowx.mongodb.net/flex?retryWrites=true&w=majority';

// Connect to the MongoDB database
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db="mongodb+srv://lavaformama:sarita70@cluster0.oenp3ec.mongodb.net/FormData?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>{
console.log("Mongodb connected")
}).catch((err)=>console.log("NO connected",err))


// Define API endpoint for handling form submissions
app.post('/api/formdata', async (req, res) => {
  try {
    const form = new FormModel(req.body);
    await form.save();
    console.log(form,"form")
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (err) {
    console.log(err)
    
    res.status(400).json({ error: err.message });
  }
});

app.get('/formdata', async (req, res) => {
  try {
    const forms = await FormModel.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
