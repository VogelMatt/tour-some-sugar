import { bookingList } from "./bookings.js"
import { venueList } from "./venues.js"
import { bandList } from "./bands.js"

const mainContainer = document.querySelector("#container")


const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="details">
    <section class="detail--columns details__booking">
        <h2>Current Bookings</h2>
        ${bookingList()} 
    </section>
    <section class="detail--column list details__bands">
        <h2>Available Bands</h2>
        ${bandList()}    
    </section>
    <article class="detail--column list details__venues">
    <h2>Available Venues</h2>
    ${venueList()}   
    </article>
</article>
`

mainContainer.innerHTML = applicationHTML

