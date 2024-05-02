import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("server is redy");
})

app.get('/api/jokes', (req, res) => {
    const jokesData = [
        {
            id: 1,
            question: "Why don't skeletons fight each other?",
            answer: "They don't have the guts."
        },
        {
            id: 2,
            question: "Why did the scarecrow win an award?",
            answer: "Because he was outstanding in his field."
        },
        {
            id: 3,
            question: "What do you call cheese that isn't yours?",
            answer: "Nacho cheese!"
        },
        {
            id: 4,
            question: "How do you organize a space party?",
            answer: "You planet."
        },
        {
            id: 5,
            question: "Why couldn't the bicycle stand up by itself?",
            answer: "It was two-tired."
        }
    ];
    res.send(jokesData)
})

app.listen(port,()=>{
    console.log(`server start on ${port}`)
})