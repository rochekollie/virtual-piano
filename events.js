// Keydown events
document.addEventListener("keydown", function (event) {
    // Convert key press to upper case and assign it to keypress
    checkChord(event.key.toUpperCase());
});

// Click events
$(function () {
    $("kbd").click(function () {
        const chordName = $(this).attr("id");
        playChord(chordName);
    });
});

// Check chord
const checkChord = chordName => {
    //Set chords array
    const chords = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
    //Check keypress
    if (chords.includes(chordName))
    {
        playChord(chordName);
    } else
    {
        alert(`ERROR: " ${chordName} " is INVALID!\nClick the keys or press any of the following keys:\n"A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"`);
    }
} // end checkChord()

// Play chord
const playChord = chordName => {
    const chord = new Audio("chords/"+chordName+".mp3");
    chord.play();
} // end playChord()