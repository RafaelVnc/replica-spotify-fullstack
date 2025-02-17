import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

export const db = client.db("replicaSpotify");
