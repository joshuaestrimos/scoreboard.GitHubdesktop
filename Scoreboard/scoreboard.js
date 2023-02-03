let scoreHomeEl = document.getElementById("home-point")
let scoreGuestEl = document.getElementById("guest-point")


let points = []


let homeScore = 0
let guestScore = 0



function plusone(){
    let scoreHome1 = homeScore + 1
    scoreHomeEl.textContent = scoreHome1
    homeScore = scoreHome1
    
}
// points.push(homeScore)


// function undo(){
//     points.pop()
// }


// function plusone(){
//     let scoreHome1 = homeScore + 1
//     scoreHomeEl.textContent = scoreHome1
//     homeScore = scoreHome1
// }

// function plustwo(){
//     let scoreHome2 = homeScore + 2
//     scoreHomeEl.textContent = scoreHome2
//     homeScore = scoreHome2
// }

// function plusthree(){
//     let scoreHome3 = homeScore + 3
//     scoreHomeEl.textContent = scoreHome3
//     homeScore = scoreHome3
// }
// function gplusone(){
//     let scoreGuest1 = guestScore + 1
//     scoreGuestEl.textContent = scoreGuest1
//     guestScore = scoreGuest1
// }

// function gplustwo(){
//     let scoreGuest2 = guestScore + 2
//     scoreGuestEl.textContent = scoreGuest2
//     guestScore = scoreGuest2
// }
// function gplusthree(){
//     let scoreGuest3 = guestScore + 3
//     scoreGuestEl.textContent = scoreGuest3
//     guestScore = scoreGuest3
// }

// function reset(){
//     let restartHome = scoreHomeEl.textContent = 0
//     let restartGuest = scoreGuestEl.textContent = 0
//     homeScore = 0
//     guestScore = 0
    
// }
