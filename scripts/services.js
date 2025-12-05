// import getServices and getAreaServices
import { getServices, getAreaServices, getArea } from "./database.js"

// invoke the functions and get the data to work with
const allServices = getServices()
const allAreaServices = getAreaServices()
const allAreas = getArea()

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "service") {
        const serviceID = parseInt(clickEvent.target.dataset.id)
        const serviceName = clickEvent.target.innerHTML
        const foundAreaServices = allAreaServices.filter((areaService) => areaService.service_id === serviceID)
        let alertString = `${serviceName} is available in `
        let nameArray = []
        for (const foundAreaService of foundAreaServices) {
            const areaName = allAreas.find((area) => area.id === foundAreaService.area_id).title
            nameArray.push(areaName)
        }
        alertString += nameArray.join(" and ")
        window.alert(alertString)
    }
})

// export function to return service list html
export const serviceList = () => {
    let servicesHTML =""
    servicesHTML += allServices.map((service) => {
        return `<span class="service" id="service-${service.id}" data-id="${service.id}">${service.name}</span>`
    }).join(", ")
    return servicesHTML
}

// export function to return service list html per area
export const areaServicesList = (area) => {
    // filter AreaServices for correct area and then match each with service name
    const currentAreaServices = allAreaServices.filter((areaService) => areaService.area_id === area.id)
    const serviceNames = currentAreaServices.map((areaService) => allServices.find(service => service.id === areaService.service_id).name)

    let areaServicesHTML =`<ul class="area-service-list">`

    areaServicesHTML += serviceNames.map((serviceName) => {
        return `<li class="areaService">${serviceName}</li>`
    }).join()
    areaServicesHTML +=`</ul>`
    return areaServicesHTML
}

