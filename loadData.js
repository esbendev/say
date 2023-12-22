// gets parameters from url

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

function armarLinkExample(dato) {
    // necesito algo así https://www.youtube.com/embed/hUjmO1_6QUQ?si=wctEl3ra5JQTBpJ2&amp;clip=Ugkxugi9ZCHZURLU5dE1IyWBqqAmX7zsvERE&amp;clipt=EPCKDBj4sQw

    // recibo algo así hUjmO1_6QUQ?wctEl3ra5JQTBpJ2?Ugkxugi9ZCHZURLU5dE1IyWBqqAmX7zsvERE?EPCKDBj4sQw
    var link = dato.split("?");
    linkExample = null;
    // armo el link
    if (link.length == 3) {
        // https://www.youtube.com/embed/Naxqk6buRZY?clip=UgkxiBURTyALMmkF4MeKb3zVmsRH937niO0j&clipt=ELWouAEYvc-4AQ
        var linkExample = "https://www.youtube.com/embed/" + link[0] + "?clip=" + link[1] + "&clipt=" + link[2];
    }
    return linkExample;
}

if (getParameterByName("streamer-name") != null) {
    h1Name = document.getElementById("h1_name");
    pPronunciation = document.getElementById("p_pronunciation");
    console.log(getParameterByName("streamer-name"));

    if (pronunciation[getParameterByName("streamer-name")] != null) {
        h1Name.innerHTML = getParameterByName("streamer-name");
        for (var i = 0; i < pronunciation[getParameterByName("streamer-name")].length; i++) {
            pPronunciation.innerHTML += pronunciation[getParameterByName("streamer-name")][i] + "<br>";
        }

        if (examples[getParameterByName("streamer-name")] != null) {
            var examplesDiv = document.getElementById("div_examples");

            if (examples[getParameterByName("streamer-name")].length > 0) {
                for (var i = 0; i < examples[getParameterByName("streamer-name")].length; i++) {
                    var iframe = document.createElement("iframe");
                    var linkFinal = armarLinkExample(examples[getParameterByName("streamer-name")][i]);
                    // var linkFinal = examples[getParameterByName("streamer-name")][i];
                    if (linkFinal != null) {
                        iframe.src = linkFinal;
                        iframe.width = "200";
                        iframe.height = "100";
                        iframe.frameborder = "0";
                        iframe.allow = "encrypted-media";
                        iframe.allowfullscreen = "";
                        examplesDiv.appendChild(iframe);
                    }
                }
            } else {
                var examplesDiv = document.getElementById("div_examples");
                var p = document.createElement("p");
                p.innerHTML = "No examples found.";
                examplesDiv.appendChild(p);
            }
        } else {
            var examplesDiv = document.getElementById("div_examples");
            var p = document.createElement("p");
            p.innerHTML = "No examples found.";
            examplesDiv.appendChild(p);
        }

        document.getElementById("success-message").classList.remove("ocultar");
        document.getElementById("error-message").classList.add("ocultar");
    } else {
        document.getElementById("success-message").classList.add("ocultar");
        document.getElementById("error-message").classList.remove("ocultar");
    }
}