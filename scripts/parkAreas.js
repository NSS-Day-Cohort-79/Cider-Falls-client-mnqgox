import { getArea } from "./database.js";

export const parkAreaList = () => {
    const areas = getArea()
    let parkAreasHTML = "<ul>"
    for (const area of areas) {
        parkAreasHTML += `<li data-id="${area.id}" data-parkAreaService = "${area.areaServicesList}">${area.name}</li>`
    }
    parkAreasHTML += "</ul>"
    return parkAreasHTML
}