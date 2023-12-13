function separarPalabras(palabras) {
    var palabrasSeparadas = palabras.split(",");
    return palabrasSeparadas;
}

function separarPitchDePalabra(palabra) {
    var palabraSeparada = palabra.split(":");
    return palabraSeparada;
}

function speak(palabras) {
    if (palabras == null || palabras == "") {
        return;
    }
    if (palabras.includes(",")) {
        var palabrasSeparadas = separarPalabras(palabras);
        palabrasSeparadas.forEach(function (palabra) {
            var palabraSeparada = separarPitchDePalabra(palabra);
            var utterance = new SpeechSynthesisUtterance(palabraSeparada[0]);
            utterance.lang = "en-US";
            utterance.pitch = palabraSeparada[1];
            utterance.rate = 1;
            speechSynthesis.speak(utterance);
        });
    } else {
        var utterance = new SpeechSynthesisUtterance(palabras);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    }
}