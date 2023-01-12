import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const bandList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}-- Genre: ${band.genre} Formed: ${band.yearFormed} </li>`
    }

    html += "</ul>"

    return html
}
//When a band name is clicked, a window alert displays all of the venues at which the band is playing.
const bandIdFinder = (bandIdString) => {
    let bandBooking = null
    let venueNames = ''
    for (const booking of bookings) {
        if (booking.bandId === parseInt(bandIdString)) {
            bandBooking = booking.venueId
            for (const venue of venues) {
                if ( bandBooking === venue.id) {
                    venueNames = venue.venueName
                }
            }
            
        }
    }
    return venueNames
}



document.addEventListener(
    "click",  
    (clickEvent) => {
               const itemClicked = clickEvent.target

        
        if (itemClicked.id.startsWith("band")) {

            const [,bandId] = itemClicked.id.split("--")

            let matchingBand = null
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                  matchingBand = band
                }
            }
        
            window.alert(`${matchingBand.name} is playing at ` + bandIdFinder(bandId))
        }
    }
)