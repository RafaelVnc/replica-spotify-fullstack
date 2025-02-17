import express from "express";
import { artistArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("/artists ou /songs!")
})

app.get('/artists', (req, res) => {
    res.send(artistArray)
})

app.get('/songs', (req, res) => {
    res.send(songsArray)
})

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
});
