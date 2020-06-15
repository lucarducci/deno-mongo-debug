import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();

//the uri
client.connectWithUri("mongodb://localhost:27017");

//name of the db
const db = client.database("test");

// name of your collection
const users = db.collection("users");
console.log("Counting");
const count = await users.count();

console.log("Found: " + count);
