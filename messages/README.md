# Messages

1. JSON reading and parsing in javascript, AJAX
2. - 
3. 2


--Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? 

No it is not. Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://messagehub.herokuapp.com/messages.json. This can be fixed by moving the resource to the same domain or enabling CORS.