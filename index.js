function shout(string) {
    return string.toUpperCase();

}

function whisper(string) {
    return string.toLowerCase();

}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToGrandma(words) {
    if (words == whisper(words)){
        return "I can't hear you!";
    } else if (words == shout(words)) {
        return "YES INDEED!";

    } else if (words == "I love you, Grandma.") {
        return "I love you, too.";
    }
        
}