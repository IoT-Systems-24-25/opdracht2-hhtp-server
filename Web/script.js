console.log("Hello from script.js");

window.addEventListener(('load'), (event) => {
    let checkbox = document.getElementById("checkbox-id");
    let checkboxled1 = document.getElementById("checkbox-led1");
    let checkboxled2 = document.getElementById("checkbox-led2");
    let checkboxled3 = document.getElementById("checkbox-led3");
    let checkboxled4 = document.getElementById("checkbox-led4");
    let checkboxled5 = document.getElementById("checkbox-led5");
    let checkboxled6 = document.getElementById("checkbox-led6");
    let checkboxled7 = document.getElementById("checkbox-led7");
    let checkboxled8 = document.getElementById("checkbox-led8");

    //buttons om led aan te roepen uit htm
    let buttonOnled1 = document.getElementById("button-on-led1");
    let buttonOffled1 = document.getElementById("button-off-led1");
    let buttonOnled2 = document.getElementById("button-on-led2");
    let buttonOffled2 = document.getElementById("button-off-led2");
    let buttonOnled3 = document.getElementById("button-on-led3");
    let buttonOffled3 = document.getElementById("button-off-led3");
    let buttonOnled4 = document.getElementById("button-on-led4");
    let buttonOffled4 = document.getElementById("button-off-led4");
    let buttonOnled5 = document.getElementById("button-on-led5");
    let buttonOffled5 = document.getElementById("button-off-led5");
    let buttonOnled6 = document.getElementById("button-on-led6");
    let buttonOffled6 = document.getElementById("button-off-led6");
    let buttonOnled7 = document.getElementById("button-on-led7");
    let buttonOffled7 = document.getElementById("button-off-led7");
    let buttonOnled8 = document.getElementById("button-on-led8");
    let buttonOffled8 = document.getElementById("button-off-led8");

    //led1 aan en uit knoppen
    buttonOnled1.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled1=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled1.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled1=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 2 aan en uit knoppen
    buttonOnled2.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled2=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled2.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled2=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 3 aan en uit knoppen
    buttonOnled3.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled3=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled3.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled3=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 4 aan en uit knoppen
    buttonOnled4.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled4=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled4.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled4=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 5 aan en uit knoppen
    buttonOnled5.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled5=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled5.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled5=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 6 aan en uit knoppen
    buttonOnled6.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled6=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled6.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled6=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 7 aan en uit knoppen
    buttonOnled7.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled7=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled7.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled7=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    //led 8 aan en uit knoppen
    buttonOnled8.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled8=on"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });

    buttonOffled8.addEventListener('click', () => {
        fetch("index2.cgi", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "extled8=off"
        }).then(response => { response.text(); }).then(text => { console.log('the server said', text); }).catch(error => { console.error('Error:', error); });
    });


    window.setInterval(
        (async () => {
            console.log("Hello from timer.js");
            let responsebutton = await fetch("button.cgi");
            let responsesw1 = await fetch("led1-2.cgi");
            let responsesw2 = await fetch("led3-4.cgi");
            let responsesw3 = await fetch("led5-6.cgi");
            let responsesw4 = await fetch("led7-8.cgi");
            let button = await responsebutton.text();
            let sw1 = await responsesw1.text();
            let sw2 = await responsesw2.text();
            let sw3 = await responsesw3.text();
            let sw4 = await responsesw4.text();
            console.log(button);
            console.log(sw1);
            console.log(sw2);
            console.log(sw3);
            console.log(sw4);
            if (button == "checked") {
                checkbox.setAttribute("checked", "");
            }
            else {
                checkbox.removeAttribute("checked");
            }

            if (sw1 == "checked") {
                checkboxled1.setAttribute("checked", "");
                checkboxled2.setAttribute("checked", "");
            }
            else {
                checkboxled1.removeAttribute("checked");
                checkboxled2.removeAttribute("checked");
            }

            if (sw2 == "checked") {
                checkboxled3.setAttribute("checked", "");
                checkboxled4.setAttribute("checked", "");
            }
            else {
                checkboxled3.removeAttribute("checked");
                checkboxled4.removeAttribute("checked");
            }

            if (sw3 == "checked") {
                checkboxled5.setAttribute("checked", "");
                checkboxled6.setAttribute("checked", "");
            }
            else {
                checkboxled5.removeAttribute("checked");
                checkboxled6.removeAttribute("checked");
            }

            if (sw4 == "checked") {
                checkboxled7.setAttribute("checked", "");
                checkboxled8.setAttribute("checked", "");
            }
            else {
                checkboxled7.removeAttribute("checked");
                checkboxled8.removeAttribute("checked");
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