console.log('***** Music Collection *****')

let collection = []

function addToCollection (title, artist, yearPublished) {
    let album = {title, artist, yearPublished};
    collection.push (album);
    return console.log(album);
}   //Add a function named addToCollection. This function should:
    //Take in the album's title, artist, yearPublished as input parameters
    //Create a new object having the above properties
    //Add the new object to the end of the collection array
    //Return the newly created object

addToCollection ( 'Quantity is Job 1', 'Five Iron Frenzy', '1998');
addToCollection ( 'Electric Boogaloo', 'Five Iron Frenzy 2', '2001');
addToCollection ( 'Whispers', 'Passenger', '2014');
addToCollection ( 'Onwards and Sidways', 'Joshua Radin', '2015');
addToCollection ( 'Blurryface', 'Twenty One Pilots', '2015');
addToCollection ( 'Leavetaking', 'Peter Bradley Adams', '2008');

console.log(collection); //Test the addToCollection function:
    //Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
    //Console.log each album as added using the returned value.
    //After all are added, console.log the collection array.

function showCollection (array) {
    console.log(array.length);
    for (let index = 0; index <= array.length; index++) {
        console.log(array[index]);
    }
    
}

console.log(showCollection(collection));