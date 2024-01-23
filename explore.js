var jsonUrl = 'books.json';

// Fetch the JSON data
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        // Data is now a JavaScript object
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching JSON: ', error);
    });

function update_values() {
    document.getElementById("title").innerHTML = data.title;
}

function test() {
    document.getElementById("title").innerHTML = "Hello JavaScript!";
}
