// import getServices and getAreaServices
import { getServices, getAreaServices } from "./database.js"

// invoke the functions and get the data to work with
const allServices = getServices()
const allAreaServices = getAreaServices()

// export function to return service list html
export const serviceList = () => {
    let servicesHTML =`<ul class="service-list">`
    servicesHTML += allServices.map((service) => {
        return `<li class="service" id="service-${service.id}">${service.name}</li>`
    }).join()
    servicesHTML +=`</ul>`
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

