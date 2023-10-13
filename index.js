import { addClothing, getTheClothing } from "./clothing.js";
import { closeClient } from "./connectDb.js";


await addClothing()
await getTheClothing()

closeClient()