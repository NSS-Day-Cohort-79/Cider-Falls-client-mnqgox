import {getArea, getGuest} from '../scripts/database.js';
import { areaServicesList } from './services.js';

const parkAreas = getArea();
const allGuests = getGuest();

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "area-title") {
        const clickedAreaID = parseInt(clickEvent.target.dataset.id)
        let guestCount = 0
        for (const guest of allGuests) {
            if (guest.areaID === clickedAreaID) {
                guestCount++
            }
        }
        window.alert(`There are ${guestCount} guests in this area`)
    }
})

export const parkAreaList = () => {
    let areaHTML = "";
    for (const area of parkAreas) {
        areaHTML += `<section class="park-area">
            <h3 class="area-title" data-id="${area.id}">${area.title}</h3>
            <div class="area-services">${areaServicesList(area)}</div>
        </section>`
    }
    return areaHTML;
}
