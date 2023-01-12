import { getBands, getBookings, getVenues } from "./database.js";



const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

const findVenue = (venueId) => {
    for (const venue of venues){
        if(venue.id === venueId){
            return venue
        }
    }    
}

const findBand = (bandId) => {
    for (const band of bands){
        if(band.id === bandId){
            return band
        }
    }    
}



export const bookingList = () => {
    let html = ""
     html = "<ul>"

    for (const booking of bookings) {
        //{id:1, venueId:1, bookingDate:"02.19.1982", bandId:6},
        const band = findBand(booking.bandId);
        const venue = findVenue(booking.venueId);
        html += `<li class="Bookijist" id="booking--${booking.id}">${band.name} is playing at ${venue.venueName} on ${booking.bookingDate} </li>`
            }
            html += "</ul>"
        
            return html
        }

document.addEventListener(
    "click",  
    (clickEvent) => {
               const itemClicked = clickEvent.target

        
        if (itemClicked.id.startsWith("booking")) {

            const [,bookingIdString] = itemClicked.id.split("--")

            for (const booking of bookings) {
                if (booking.id === parseInt(bookingIdString)) {
                  for (const band of bands) {
                    if (band.id === booking.bandId) {

                        window.alert(`${band.name} \n${band.genre} \nFormed in ${band.yearFormed} \n${band.members} band members`)
                    }
                  }
                }
            }
        
        }
    }
)

