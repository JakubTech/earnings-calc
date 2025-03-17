let wynagrodzenie = document.getElementById("brutto")

function reset() {
    location.reload()
}

function calculate() {
    let w_brutto = document.getElementById("brutto").value
    let u_chorobowe = Math.round(w_brutto * 0.0245)
    let u_rentowe = Math.round(w_brutto * 0.015)
    let u_emerytalne = Math.round(w_brutto * 0.0976)
    let zus = Math.round(w_brutto - u_chorobowe - u_rentowe - u_emerytalne)
    let u_zdrowotne = Math.round(zus * 0.09)
    let podatek_dochodowy = Math.round(((zus - 250) * 0.12) - 300)
    let w_netto = 0

    if (((zus - u_zdrowotne) * 12) < 30000) {
        w_netto = Math.round(zus - u_zdrowotne)
        podatek_dochodowy = 0
    }
    else {
        w_netto = Math.round(zus - u_zdrowotne - podatek_dochodowy)
    }

    document.getElementById("u-cho").innerHTML = "Ubezpieczenie chorobowe: " + u_chorobowe + " zł"
    document.getElementById("u-ren").innerHTML = "Ubezpieczenie rentowe: " + u_rentowe + " zł"
    document.getElementById("u-eme").innerHTML = "Ubezpieczenie emerytalne: " + u_emerytalne + " zł"
    document.getElementById("u-zdr").innerHTML = "Ubezpieczenie zdrowotne: " + u_zdrowotne + " zł"
    document.getElementById("podatek").innerHTML = "Podatek dochodowy: " + podatek_dochodowy + " zł"
    document.getElementById("netto").innerHTML = "Wynagrodzenie netto: " + w_netto + " zł"
}