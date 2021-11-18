class Knife {
    constructor (name, blade, handle, deliveryTime) {
        this.name = name;
        this.blade = blade;
        this.handle = handle;
        this.deliveryTime = deliveryTime;
    }
}

let knives = [];

knives.push(new Knife("Kockkniv 180", "180 mm långt och består av 210 lager damaskusstål.", "Valnöt", "8-10 veckor"));
knives.push(new Knife("Trancherkniv 160", "160 mm långt och består av 120 lager damaskusstål.", "Valnöt", "6-8 veckor"));
knives.push(new Knife("Skalkniv 90", "90 mm långt och består av 140 lager damaskusstål.", "Valnöt", "1-2 veckor"));


function moreInfoChef(x) {
    document.write("<p>");
    document.write("<b>Namn: </b>" + knives[x].name + " <br>");
    document.write("<b>Blad: </b>" + knives[x].blade + " <br>");
    document.write("<b>Handtag: </b>" + knives[x].handle + " <br>");
    document.write("<b>Leveranstid: </b>" + knives[x].deliveryTime + " <br>");
    document.write("</p>");
}

// Bladet har 210 lager Damaskusstål, som skapar dess vackra mönster.