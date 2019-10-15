const express = require('express')
const app = express()
const axios = require('axios');
const path = require('path');
const {wordnik_key, port} = require('./config');

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/story', (req, res) => {
    let story = "";

    axios.get(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=1&api_key=${wordnik_key}`)
    .then(response => {
        const word = response.data[0].word;
        axios.get(`https://api.wordnik.com/v4/word.json/${word}/examples?includeDuplicates=false&useCanonical=false&limit=5&api_key=${wordnik_key}`)
        .then(response => {
            const sentence = response.data.examples[0].text + " ";
            story += sentence;
            res.send(story)
        })
    })
    .catch(error => {
        res.send('Sorry, there was a problem: Please try again later.');
        console.log(error)
    })
})


app.listen(port, () => console.log(`RTD App listening on port ${port}!`))