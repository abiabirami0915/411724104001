let messages = [];

let input = document.getElementById("msgInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let count = document.getElementById("count");
let status = document.getElementById("status");
let messageSection = document.getElementById("messages");


// Character Count
input.addEventListener("input", function () {
    count.textContent = "Character Count: " + input.value.length;
});


function displayMessages() {

    messageSection.innerHTML = "";

    messages.forEach(function (msg) {

        let div = document.createElement("div");

        div.className = "message";

        div.textContent = msg;

        messageSection.appendChild(div);

        setTimeout(function () {

            let index = messages.indexOf(msg);

            if (index !== -1) {

                messages.splice(index, 1);

                displayMessages();

                status.textContent = "Message Expired";
            }

        }, 10000);

    });

}


addBtn.addEventListener("click", function () {

    let text = input.value.trim();

    let promise = new Promise(function (resolve, reject) {

        if (text.length >= 3) {
            resolve(text);
        }
        else {
            reject("Message must contain at least 3 characters");
        }

    });

    promise.then(function (msg) {

        status.textContent = "Message Added Successfully";

        messages.push(msg);

        displayMessages();

        input.value = "";

        count.textContent = "Character Count: 0";

    })

    .catch(function (error) {

        status.textContent = error;

    });

});



clearBtn.addEventListener("click", function () {

    messages = [];

    messageSection.innerHTML = "";

    status.textContent = "All Messages Cleared";

});