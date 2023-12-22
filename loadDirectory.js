function verLetraInicial(datoActual, datoAnterior) {
    if (datoActual.charAt(0) != datoAnterior.charAt(0)) {
        return datoActual.charAt(0);
    } else {
        return false;
    }
}

function loadDirectory() {
    console.log("loadDirectory");
    console.log(pronunciation);
    var names = document.getElementById("directory_names");
    var nombreAnterior = "";
    for (var streamer in pronunciation) {
        // genero nuevo streamer
        var divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class", "directory_name--streamer");
        //nombre
        var pNombre = document.createElement("a");
        pNombre.setAttribute("class", "streamer_nombre");
        pNombre.setAttribute("href", "name.html?streamer-name=" + streamer);
        pNombre.innerHTML = streamer;
        // pronunciacion
        var pPronunciacion = document.createElement("p");
        pPronunciacion.setAttribute("class", "streamer_pronunciacion");
        pPronunciacion.innerHTML = pronunciation[streamer];
        // link
        var link = document.createElement("a");
        link.setAttribute("class", "streamer_link");
        link.setAttribute("href", "name.html?streamer-name=" + streamer);
        link.innerHTML = "View more";

        divPrincipal.appendChild(pNombre);
        divPrincipal.appendChild(pPronunciacion);
        divPrincipal.appendChild(link);
        
        // para la letra grande
        var letraInicial = verLetraInicial(streamer, nombreAnterior);
        if (letraInicial) {
            var divLetra = document.createElement("div");
            divLetra.setAttribute("class", "directory_name--letra");
            divLetra.innerHTML = letraInicial;
            names.appendChild(divLetra);
        }
        names.appendChild(divPrincipal);
        nombreAnterior = streamer;
    }
}