var rando = 0;
var rando2 = 0;
var equipe = 1;
var question = 1;

function question_view() {
    if (question == 1) {
        document.getElementById('question1').style.display = "block";
    } else {
        document.getElementById('question2').style.display = "block";
    }
    document.getElementById('valid').style.display = "block";
}

// When we click the button...
function spin_wheel() {
    // Cache our elements.
    wheel = document.getElementById("wheel");
    document.getElementById('reponse1').style.display = "none";
    document.getElementById('reponse2v').style.display = "none";
    document.getElementById('reponse2f').style.display = "none";
    // Initialise a random number variable. As zero.

    // Generate a random number that'll determine how many degrees the wheel spins.
    // We want it to spin 8 times (2880 degrees) and then land somewhere, so we'll add between 0 and 360 degrees to that.
    // We add this to the already-created "rando" variable so that we can spin the wheel multiple times.
    rando += (Math.random() * 360) + 2880;

    // And spin the wheel to the random position we just generated!
    // Gotta cover ourselves with vendor prefixes.
    wheel.style.webkitTransform = "rotate(" + rando + "deg)";
    wheel.style.mozTransform = "rotate(" + rando + "deg)";
    wheel.style.msTransform = "rotate(" + rando + "deg)";
    wheel.style.transform = "rotate(" + rando + "deg)";

    son1.play();

    setTimeout(question_view, 5000)

}


// When we click the button...
function spin_wheel2() {
    // Cache our elements.
    wheel2 = document.getElementById("wheel2");
    document.getElementById('reponse1').style.display = "none";
    document.getElementById('reponse2v').style.display = "none";
    document.getElementById('reponse2f').style.display = "none";
    // Initialise a random number variable. As zero.

    // Generate a random number that'll determine how many degrees the wheel spins.
    // We want it to spin 8 times (2880 degrees) and then land somewhere, so we'll add between 0 and 360 degrees to that.
    // We add this to the already-created "rando" variable so that we can spin the wheel multiple times.
    console.log(equipe);
    if (equipe == 1) {
        random_equipe = -60;
        equipe += 1;
    } else if (equipe == 2) {
        random_equipe = -60;
        equipe += 1;
    } else if (equipe == 3) {
        random_equipe = -60;
        equipe = 1;
    }

    rando2 += (random_equipe) - 2880;

    // And spin the wheel to the random position we just generated!
    // Gotta cover ourselves with vendor prefixes.
    wheel2.style.webkitTransform = "rotate(" + rando2 + "deg)";
    wheel2.style.mozTransform = "rotate(" + rando2 + "deg)";
    wheel2.style.msTransform = "rotate(" + rando2 + "deg)";
    wheel2.style.transform = "rotate(" + rando2 + "deg)";

    son1.play();

    equipes = document.getElementById('equipes');
    equipes.style.display = "none";

    if (equipes.innerText == "EQUIPE 1") {
        equipes.innerText = "EQUIPE 2";
    } else if (equipes.innerText == "EQUIPE 2") {
        equipes.innerText = "EQUIPE 3";
    } else {
        equipes.innerText = "EQUIPE 1";
    }
    setTimeout(function() {
        equipes.style.display = "block";
    }, 5000);

}


function valider() {
    if (question == 1) {
        let vrai = document.getElementById('vrai').checked;
        if (vrai == true) {
            son_bravo.play();
            document.getElementById('bravo').style.display = "block";
            setTimeout(function() {
                document.getElementById('bravo').style.display = "none";
                document.getElementById('question1').style.display = "none";
                document.getElementById('valid').style.display = "none";
                document.getElementById('vrai').checked = false;
            }, 4000)
        } else {
            son_splash.play();
            document.getElementById('question1').style.display = "none";
            document.getElementById('valid').style.display = "none";
            document.getElementById('faux').checked = false;
            document.getElementById('reponse1').style.display = "block";
        }
        question = 2;
    } else if (question == 2) {
        let rep = true;
        for (let i = 0; i < 3; i++) {
            if (document.getElementsByName('q2')[i].checked == false) {
                rep = false;
            }
        }
        if (rep == true) {
            son_bravo.play();
            document.getElementById('bravo').style.display = "block";
            document.getElementById('question2').style.display = "none";
            document.getElementById('valid').style.display = "none";
            document.getElementById('reponse2v').style.display = "block";
            setTimeout(function() {
                document.getElementById('bravo').style.display = "none";
            }, 4000)
        } else {
            son_splash.play();
            document.getElementById('question2').style.display = "none";
            document.getElementById('valid').style.display = "none";
            document.getElementById('reponse2f').style.display = "block";
        }
        for (let i = 0; i < 3; i++) {
            document.getElementsByName('q2')[i].checked = false;
        }
        question = 1;
    }




}