console.log("Hello from script.js");

window.addEventListener(('load'), (event) => {
    let checkbox = document.getElementById("checkbox-id");
    let buttonOn = document.getElementById("button-on");
    let buttonOff = document.getElementById("button-off");

    buttonOn.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled1=on"
        }).then(response => { response.text() ;}).then(text => {console.log('the server said', text);}).catch(error => {console.error('Error:', error);});
        });

        buttonOff.addEventListener('click', () => {
            fetch("index2.cgi", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: "extled1=off"
            }).then(response => { response.text() ;}).then(text => {console.log('the server said', text);}).catch(error => {console.error('Error:', error);});
        });

    window.setInterval(
        (async () => {
            console.log("Hello from timer.js");
            let response = await fetch("button.cgi");
            let text = await response.text();
            console.log(text);
            if (text == "checked") {
                checkbox.setAttribute("checked", "");
            }
            else {
                checkbox.removeAttribute("checked");
            }
        }), 3000);


    document.getElementById("toggle-button").onclick = async () => {
        let response = await fetch("test.cgi",
            {
                method: "POST",
                headers: {
                    //'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: "toggle-button=true"
            });
        let txt = await response.text();
        console.log(txt);
    };

});