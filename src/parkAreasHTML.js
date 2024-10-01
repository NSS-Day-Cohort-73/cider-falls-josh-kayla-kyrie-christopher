// Import getAreas() from database
import { getAreas, getAreaServices, getServices } from "./database.js";

// Invoke areas = getAreas() and store its value
const areas = getAreas()
const areaServices = getAreaServices()
const services = getServices()

// Define and export the buildAreasHTML() 
export const buildAreasHTML = () => {
// Define HTML variable = ""
    let areasHTML = ""
    // Create the for...of loop to iterate the area of areas
    for (const area of areas) {
        // Create opening section and list tags + area name header"
        areasHTML += `
            <section>
                <div data-id="${area.id}"
                data-name="${area.name}"
                >${area.name}
                </div>
                <ul>
        `

/*      for (const areaService of areaServices) {
            if (areaService.areaId === area.id) {
                for (const service of services) {
                    if (areaService.serviceId === service.id) {
                        areasHTML += `<li>${service.name}</li>`
                    }
                }   
            } */      

        // iterate over areaServices to populate the list of services for each area
        for (const areaService of areaServices) {
            if (areaService.areaId === area.id) {
                const foundElement = services.find((service) => areaService.serviceId === service.id)
                    areasHTML += `<li>${foundElement.name}</li>`
            }
        }
        // Close HTML list and section tags
        areasHTML += `
                </ul>
            </section>
        `
    }
    // Return HTML string
    return areasHTML
}
    

/* Add onclick function for when we click on an area, it displays how many
    guests are in an area */
    