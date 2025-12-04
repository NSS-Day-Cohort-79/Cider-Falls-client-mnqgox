//const database = will have the Areas array, guests array, and services array
const database = {
    areas: [
        {
            id: 1,
            title: "Lodge",
            location: "Northwest",
        },
        {
            id: 2,
            title: "Lost Wolf Hiking Trail",
            location: "Northern",
        },
        {
            id: 3,
            title: "Chamfort River",
            location: "Northeast",
        },
        {
            id: 4,
            title: "Gander River",
            location: "Southwest",
        },
        {
            id: 5,
            title: "Campgrounds",
            location: "Southern",
        },
        {
            id: 6,
            title: "Pine Bluff Trail",
            location: "Southeast",
        }        
    ],
    services: [
        {
            id: 1,
            name: "hiking"
        },
        {
            id: 2,
            name: "canoeing"
        },
        {
            id: 3,
            name: "picnicking"
        },
        {
            id: 4,
            name: "parking"
        },
        {
            id: 5,
            name: "lodging"
        },
        {
            id: 6,
            name: "wall climbing"
        },
        {
            id: 7,
            name: "rafting"
        },
        {
            id: 8,
            name: "fishing"
        },
        {
            id: 9,
            name: "information"
        },
        {
            id: 10,
            name: "zip lines"
        },
        {
            id: 11,
            name: "food"
        }
    ],
    areaServices: [
        {
            id: 1,
            area_id: 3,
            service_id: 7
        },
        {
            id: 2,
            area_id: 3,
            service_id: 2
        },
        {
            id: 3,
            area_id: 3,
            service_id: 8
        },
        {
            id: 4,
            area_id: 2,
            service_id: 1
        },
        {
            id: 5,
            area_id: 2,
            service_id: 3
        },
        {
            id: 6,
            area_id: 2,
            service_id: 6
        },
        {
            id: 7,
            area_id: 1,
            service_id: 5
        },
        {
            id: 8,
            area_id: 1,
            service_id: 4
        },
        {
            id: 9,
            area_id: 1,
            service_id: 9
        },
        {
            id: 10,
            area_id: 1,
            service_id: 3
        },
        {
            id: 11,
            area_id: 4,
            service_id: 8
        },
        {
            id: 12,
            area_id: 4,
            service_id: 1
        },
        {
            id: 13,
            area_id: 5,
            service_id: 9
        },
        {
            id: 14,
            area_id: 5,
            service_id: 5
        },
        {
            id: 15,
            area_id: 5,
            service_id: 4
        },
        {
            id: 16,
            area_id: 6,
            service_id: 1
        },
        {
            id: 17,
            area_id: 6,
            service_id: 3
        },
        {
            id: 18,
            area_id: 6,
            service_id: 10
        },
        {
            id: 19,
            area_id: 1,
            service_id: 11
        },
        {
            id: 20,
            area_id: 6,
            service_id: 11
        }
    ],
    guests: [
        {
            id: 1,
            name: "Spongebob Squarepants",
            areaID: 1
        },
        {
            id: 2,
            name: "Patrick Star",
            areaID: 2
        },
        {
            id: 3,
            name: "Squidward Tentacles",
            areaID: 4
        },
        {
            id: 4,
            name: "Mr. Krabs",
            areaID: 5
        },
        {
            id: 5,
            name: "Sandy Cheeks",
            areaID: 3
        },
        {
            id: 6,
            name: "Plankton Shortguy",
            areaID: 2
        },
        {
            id: 7, 
            name: "Gary the Snail",
            areaID: 6
        },
        {
            id: 8,
            name: "Mrs. Puff",
            areaID: 4
        },
        {
            id: 9,
            name: "Pearl Krabs",
            areaID: 2
        },
        {   id: 10,
            name: "Larry the Lobster",
            areaID: 4
        },
        {   id: 11,
            name: "Eugene H. Krabs",
            areaID: 5
        },
        {   id: 12,
            name: "Mermaid Man",
            areaID: 6
        },
        {   id: 13,
            name: "Barnacle Boy",
            areaID: 2
        },
        {   id: 14,
            name: "Phineas",
            areaID: 1
        },
        {   id: 15,
            name: "Ferb",
            areaID: 1
        },
        {   id: 16,
            name: "Dr. Doofenshmirtz",
            areaID: 2
        },
        {   id: 17,
            name: "Perry the Platypus",
            areaID: 3
        },
        {   id: 18,
            name: "Candace Flynn",
            areaID: 4
        },
        {   id: 19,
            name: "Baljeet",
            areaID: 5
        },
        {   id: 20,
            name: "Buford van Stomm",
            areaID: 4
        },
        {   id: 21,
            name: "Isabella Garcia-Shapiro",
            areaID: 5
        },  
        {   id: 22,
            name: "Major Monogram",
            areaID: 6
        },
        {   id: 23,
            name: "Admiral Ackbar",
            areaID: 6
        },
        {   id: 24,
            name: "Luke Skywalker",
            areaID: 1
        },
        {   id: 25,
            name: "Princess Leia",
            areaID: 1
        },
        {   id: 26,
            name: "Han Solo",
            areaID: 4
        },
        {   id: 27,
            name: "Chewbacca",
            areaID: 3
        },
        {   id: 28,
            name: "C-3PO",
            areaID: 5
        },  
        {   id: 29,
            name: "R2-D2",
            areaID: 2
        },  
        {   id: 30,
            name: "Darth Vader",
            areaID: 3
        },
        {   id: 31,
            name: "Obi-Wan Kenobi",
            areaID: 2
        },  
        {   id: 32,
            name: "Yoda",
            areaID: 2
        },
        {   id: 33,
            name: "Dark Helmet",
            areaID: 6
        },  
        {   id: 34,
            name: "Colonel Sandurz",
            areaID: 6
        },
        {   id: 35,
            name: "Princess Vespa",
            areaID: 5
        },
        {   id: 36,
            name: "Barf",
            areaID: 3
        },
        {   id: 37,
            name: "Lonestar",
            areaID: 3
        },
        {   id: 38,
            name: "Dot Matrix",
            areaID: 1
        },
        {   id: 39, 
            name: "Pizza the Hutt",
            areaID: 5
        },
        {   id: 40,
            name: "Graham Chapman",
            areaID: 3
        },
        {   id: 41,
            name: "John Cleese",
            areaID: 2
        }, 
        {   id: 42, 
            name: "Terry Gilliam",
            areaID: 5
        },
        {   id: 43,
            name: "Eric Idle",
            areaID: 6
        },  
        {   id: 44, 
            name: "Michael Palin",
            areaID: 4
        },
        {   id: 45,
            name: "Terry Jones",
            areaID: 1
        },
        {   id: 46,
            name: "Inigo Montoya",
            areaID: 4
        },
        {   id: 47,
            name: "Westley",
            areaID: 2
        },
        {   id: 48,
            name: "Fezzik",
            areaID: 2
        },
        {   id: 49,
            name: "Vizzini",
            areaID: 4
        },
        {   id: 50,
            name: "Prince Humperdinck",
            areaID: 5
        }
    ]
}


//Then we will make three functions that will create a structure clone of the three separate arrays 

//getArea() = this will create a structureClone of the Area array and export it to parkAreas.js
export const getArea = () => structuredClone(database.areas)

//getGuest() = this will create a structureClone of the guest array and export it to guest.js
export const getGuest = () => structuredClone(database.guests)

//getServices() = this will create a structureClone of the services array and export it to services.js
export const getServices = () => structuredClone(database.services)

//getAreaServices() = this will create a structuredClone of the AreaServices array
export const getAreaServices = () => structuredClone(database.areaServices)