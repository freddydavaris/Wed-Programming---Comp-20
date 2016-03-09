// Your JavaScript goes here...

var request = new XMLHttpRequest();
var url = "data.json";
// var url = 

function parse () {
		// Step 1: set up HTTP request. Three required arguments...:
		// ...HTTP method (string), URL (string), asynch (boolean)
		request.open("GET", url, true);
		request.send();

		// Step 2: Set up callback function to deal with HTTP response data
		request.onreadystatechange = function () {

			console.log(request.status)
			if (request.readyState == 4 && request.status == 200) {
				var data = request.responseText;
				console.log(data);
				var message = JSON.parse(data);
				var elem = document.getElementById("messages");
				elem.innerHTML = "<br>" + "<br>"+ "<br>" + "<br>" + "<h4> " + message[0].content + " - " + message[0].username + "</h4>" + "<br>" + 
								 "<h4> " + message[1].content + " - " + message[1].username + "</h4>";


			}
			else if (request.readyState == 4 && request.status != 200) {
				// think 404 or 500
				document.getElementById("messages").innerHTML = "<p>Whoops, something went terribly wrong</p>";

			}

		};
	}
