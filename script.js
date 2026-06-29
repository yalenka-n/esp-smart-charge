// Stage buttons

function changeStage(stage) {

    const stageText = document.getElementById("stageText");
    const recommendation = document.getElementById("recommendation");

    // Remove active state

    document
        .querySelectorAll(".stage-buttons button")
        .forEach(button => {

            button.classList.remove("active");

        });

    // Add active state

    document
        .querySelectorAll(".stage-buttons button")
        [stage - 1]
        .classList.add("active");

    // Update content

    switch(stage){

        case 1:

            stageText.innerHTML =
                "Current Status: Stage 1";

            recommendation.innerHTML =
                "Charging is recommended before 18:00.";

            break;

        case 2:

            stageText.innerHTML =
                "Current Status: Stage 2";

            recommendation.innerHTML =
                "Charge before 17:00 to avoid interruptions.";

            break;

        case 3:

            stageText.innerHTML =
                "Current Status: Stage 3";

            recommendation.innerHTML =
                "Charge immediately. Extended outages are expected.";

            break;

    }

}