// FYI using Arrow functions because visually it's less confusing for this specific thing it was hurting my brain. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

window.addEventListener("load",function() {
    const fetchPromise = 
        fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then((response) => response.json())
        .then((json) => {
            let tally = 0;
            json.sort((a, b) => b.hoursInSpace-a.hoursInSpace)
            const profile = document.querySelector('#container');
            while (tally < json.length) {

                let activeColor;
                if (json[tally]["active"]) {
                    activeColor = ` style="color:green;"`
                } else {
                    activeColor = ` style="color:red;"`
                }

                profile.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[tally]["firstName"]} ${json[tally]["lastName"]}</h3>
                                <ul>
                                    <li>Hours in space: ${json[tally]["hoursInSpace"]}</li>
                                    <li${activeColor}>Active: ${json[tally]["active"]}</li>
                                    <li>Skills: ${json[tally]["skills"]}</li>
                                </ul>
                        </div>
                        <img class="avatar" src="${json[tally]["picture"]}">
                    </div>
                `
                tally += 1
            }

         });
});



