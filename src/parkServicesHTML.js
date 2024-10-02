import { getServices, getAreaServices, getAreas} from "./database.js"

const services = getServices()

export const parkServices = () => {
    let buildServicesHTML = "<ul id='service'>"

    for (const service of services) {
        buildServicesHTML += `<li data-type = "service" data-id="${service.id}" data-name="${service.name}">${service.name}</li>`
    }
    buildServicesHTML += "</ul>"
    return buildServicesHTML
}

// Import getServices() from database

// Invoke services = getServices() and store its value

// Define and export the buildServicesHTML() 
    // Define HTML variable = opening <ul> tag
    // Create the for...of loop to iterate the service of services
    // Close HTML </ul> tag
    // Return HTML string

/* Add onclick function for when we click on a service, it displays what areas have
    that service */

    document.addEventListener("click", clickEvent => {
        const itemClicked = clickEvent.target;
        let areaServices = getAreaServices();
        let areas = getAreas();
        let serviceAreaList = `${itemClicked.dataset.name} is available in `;
        let areaNames = []; // Array to store area names
    
        if (itemClicked.dataset.type === "service") {
            for (let area of areaServices) {
                if (area.serviceId === parseInt(itemClicked.dataset.id)) {
                    for (let areaSelection of areas) {
                        if (area.areaId === areaSelection.id) {
                            areaNames.push(areaSelection.name); // Add area name to the array
                        }
                    }
                }
            }
    
            // Join the area names with " and "
            if (areaNames.length > 0) {
                serviceAreaList += areaNames.slice(0, -1).join(', ') + (areaNames.length > 1 ? ' and ' : '') + areaNames.slice(-1);
            } else {
                serviceAreaList += 'no areas'; // Optional: handle case where no areas found
            }
    
            window.alert(serviceAreaList); // Output the result to the console
        }
    });
    

//     document.addEventListener("click", clickEvent => {
//         const itemClicked = clickEvent.target
//         let areaServices = getAreaServices()
//         let areas = getAreas()
//         let serviceAreaList = `${itemClicked.dataset.name} is available in`
    
//         if(itemClicked.dataset.type === "service"){

//                 for(let area of areaServices){
//                     if(area.serviceId === parseInt(itemClicked.dataset.id)){
//                         for(areaSelection of areas){
//                             if(areaServices.areaId === areaSelection.id){
//                                 serviceAreaList += `${areaSelection.name} and`                                
//                             }
//                         }
//                     }
//                 }

                
    
//             }
            
//     }
    
    
// )
    