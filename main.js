$(document).ready(function () {
    $("body > button").click(() => {
        alert("Bienvenue")
    })

    p = $("p")
    p.click(() => {
        p.css("color", "yellow")
    })

    $("#affecter").click(() => {
        elm = $(`.container > ${$("#elements").val()}`)
        prop = $("#property").val()
        val = $("#values").val()
        elm.css(prop, val)
    })

    // $("#reset").click(() => {
    // })

    $("#get").click(() => {
        text = $("#texte").val()
        $("#get").text(text)
    })
}
)