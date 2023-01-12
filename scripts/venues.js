import { getBands, getBookings, getVenues } from "./database.js";

const bookings = getBookings();
const venues = getVenues();
const bands = getBands();

export const venueList = () => {
    let html = "<ul>"
    
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.venueName}, Address- ${venue.address} SqFt- ${venue.sqFt} </li>`
    }

    html += "</ul>"

    return html
}

// venue name is clicked window alert all of the bands that have booked the venue

//1. create a function that accepts a venueIdString as a parameter 
//2. loops through bookings to find the venueId that matches the bandId
const windowClickAlertOnVenue = (venueIdString) => {
    let keyFromBookingsDBContainingBandId = []
    for (const booking of bookings) {
        if(booking.venueId === parseInt(venueIdString)) {
            keyFromBookingsDBContainingBandId.push(booking.bandId)
        }
    }
    let bandPlayingAtVenueClicked = []
    for (const band of bands) {  
            for (const bandIdFromBookingArray of keyFromBookingsDBContainingBandId) {
                if (bandIdFromBookingArray === band.id) {
                    bandPlayingAtVenueClicked.push(band.name)
                }
        }
    }
    return bandPlayingAtVenueClicked
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const venueThatWasClicked = clickEvent.target

     if (venueThatWasClicked.id.startsWith("venue")) {
        
        const [,venueIdString] = venueThatWasClicked.id.split("--")
            
            let bandPlaying = windowClickAlertOnVenue(venueIdString)
        
            window.alert(`The band playing tonight is ${bandPlaying}`) 
        }
    }
    
)