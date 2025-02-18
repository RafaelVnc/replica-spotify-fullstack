import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const NODE_ENV = process.env.NODE_ENV;

const URL = NODE_ENV === 'development' ? "http://localhost:3000/api" : "/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

