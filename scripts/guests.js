// import getGuests from database
// build an html list of guests
// export guestList function to return html
import { getGuest } from "./database.js"

export const guestList = () => {
    const guests = getGuest()
    let guestsHTML = `<div id="guestbody"><h2>Guests</h2>`

    for (const guest of guests) {
        guestsHTML += `<p data-id="${guest.id}">${guest.name}</p>`
    }
    
    guestsHTML += "</div>"
    return guestsHTML
}