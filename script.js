document.querySelector("form").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you for contacting Nirvaana Yoga!");

});
function recommendYoga() {

    let input =
        document.getElementById("userInput")
            .value
            .toLowerCase();

    let result = "";

    if (input.includes("stress") || input.includes("anxiety")) {

        result =
            "Recommended: Child's Pose, Alternate Nostril Breathing, 10-minute Meditation.";

    }
    else if (input.includes("sleep")) {

        result =
            "Recommended: Legs-Up-The-Wall Pose, Deep Breathing, Yoga Nidra.";

    }
    else if (input.includes("back pain")) {

        result =
            "Recommended: Cat-Cow Stretch, Cobra Pose, Gentle Twists.";

    }
    else if (input.includes("weight")) {

        result =
            "Recommended: Sun Salutations, Warrior Pose, Plank Pose.";

    }
    else {

        result =
            "Recommended: Daily Stretching, Pranayama and Mindfulness Meditation.";

    }

    document.getElementById("result").innerHTML = result;
}
