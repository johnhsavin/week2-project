import { db } from "./connectDb.js";
const clothingCollection = db.collection("clothes") 

// create collection
const shirts = {
    color: "yellow",
    size: "large",
    neckType: "crew",
}
const hats = {
    colors: "black",
    type: "bucket",
    size: "large",
}

const pants = {
    color: "blue",
    type: "jeans",
    style: "slim-fit",
    size: "large",
}


const clothing = [shirts, pants, hats]

// add clothing to db
export async function addClothing(){
    const listOfClothes = await clothingCollection.insertMany(clothing)
    console.log('list of clothes -> ' + listOfClothes)
}

// read the clothing
export async function getTheClothing(){
    const clothingList = await clothingCollection.find({}).toArray()
    console.table(clothingList)
}


// update the clothing
const updatedData = { quantity: 10 }

export async function updateTheClothing(){
    const updatesToClothes = await clothingCollection.updateMany({ $set: updatedData})
    console.table(updatesToClothes)
}


/*export async function fillMyCloset(){
    addClothing(shirts)
    addClothing(hats)
    addClothing(pants)
    // console.table(listOfClothes)
}*/

    






