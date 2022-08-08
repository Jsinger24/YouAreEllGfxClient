export default class MessageService{
getAllMessages() {
        const request = new XMLHttpRequest();
        return new Promise(function(resolve, reject){
         request.onload = function(){
            if (request.status >= 200 && request.status < 300){
            const threads = JSON.parse(request.responseText);
            resolve(threads);
            console.log(JSON.parse(request.responseText))
            console.log("sdfsd")
            }else {
            console.log('Error: ' + request.status);
            reject({
            status: request.status,
            statusText: request.statusText
            })
            }

        };
        request.open("GET", "http://zipcode.rocks:8085/messages");

        request.send();
    })
}

//function populateMessages(messages){
//    console.log("yea");
//    messages.forEach(message => {
//     addMessageToThread(message)
//        })
//    }
//
//    function addMessageToThread(message) {
//                    console.log("bs");
//                        const messageListItem = document.createElement("LI");
//                        const userIdHeading = document.createElement("h3");
//                        const messageParagraph = document.createElement("p");
//                        const messageContent = document.createTextNode(message.message);
//                        const userIdContent = document.createTextNode(message.fromid);
//                        userIdHeading.appendChild(userIdContent);
//                        messageParagraph.appendChild(messageContent);
//                        messageListItem
//                            .appendChild(userIdHeading)
//                            .appendChild(messageParagraph);
//                        document.getElementById("message-list").appendChild(messageListItem);
//                    }

    createNewMessage(message){
    const request = new XMLHttpRequest();
      return new Promise(function (resolve, reject) {
            // Setup our listener to process compeleted requests
            request.onload = function () {
                // Process the response
                if (request.status >= 200 && request.status < 300) {
                    // If successful
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };

            request.open("POST", "http://zipcode.rocks:8085/ids/${message.fromid}/messages");

            request.send(JSON.stringify(message));
        });

    };
}

