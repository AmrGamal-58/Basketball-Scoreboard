let homeEl= document.getElementById("home-score-el")
let guestEl= document.getElementById("guest-score-el")
let homeScore = 0
let guestScore= 0
function homeIncrease(y){
    homeScore+= y
    homeEl.innerText= homeScore
}
function guestIncrease(x){
    guestScore+= x
    guestEl.innerText = guestScore
}