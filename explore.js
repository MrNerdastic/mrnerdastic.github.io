// URL to your JSON file or API endpoint
var jsonUrl = 'https://example.com/api/data';

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


function test() {
    document.getElementById("title").innerHTML = "Hello JavaScript!";
}