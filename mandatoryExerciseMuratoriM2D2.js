/* MANDATORY JS EXERCISES (create a different file for this exercise)
    1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
    2) Create an unordered list using JavaScript and save it in a variable
    3) Cycle the array and create a list-item via JavaScript for every element
    4) Insert the genere as text in the list-item
    5) Append the list items in the unordered list
    6) Append the unordered list in the document. The list should appear in the page.
*/







function makeList() {
   const genres=["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < genres.length; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = genres[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

// Usage
makeList();