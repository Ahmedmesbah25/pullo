// start bar 
let bar = document.querySelector(".la-bars")
let nav = document.querySelector(".la-bars + ul")
let clos = document.querySelector(".la-bars + ul span")

bar.onclick =function() {      
    nav.classList.add("open")
}
clos.onclick =function() {      
    nav.classList.remove("open")
}
console.log(nav)
// end bar 