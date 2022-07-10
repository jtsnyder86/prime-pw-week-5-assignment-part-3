console.log('***** Music Collection *****')

let collection = []

function addToCollection (title, artist, yearPublished) {
    const album = {title, artist, yearPublished};
    collection.push (album);
    return console.log(album);
}   //Add a function named addToCollection. This function should:
    //Take in the album's title, artist, yearPublished as input parameters
    //Create a new object having the above properties
    //Add the new object to the end of the collection array
    //Return the newly created object

