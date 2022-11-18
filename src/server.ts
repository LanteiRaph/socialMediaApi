import Express from "express";
import mongoose from "mongoose";
const app = Express();
const uri =
  "mongodb+srv://lantei:lantei95@cluster0.aybaugd.mongodb.net/socialmedia?retryWrites=true&w=majority";
import PostRouter from './routes/Posts'
import UserRoter from './routes/User'

mongoose.connect(uri, () => {
  console.log("Connected to MongoDB"); 
}); 

app.use(Express.json())

app.use('api/auth', (req, res) => {
    res.send('authready')
})
app.use('/api/posts', PostRouter)
app.use('/api/users', UserRoter)

app.listen(8080, () => {
  console.log("Server up ad running");
});
