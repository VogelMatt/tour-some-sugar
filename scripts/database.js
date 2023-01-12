const database = {
    bookings: [
        {id:1, venueId:1, bookingDate:"02.19.1982", bandId:2},
        {id:2, venueId:1, bookingDate:"06.23.2024", bandId:1},
        {id:3, venueId:2, bookingDate:"09.20.2019", bandId:5},
        {id:4, venueId:1, bookingDate:"12.01.2087", bandId:6},
        {id:5, venueId:2, bookingDate:"01.01.3000", bandId:3},
        {id:6, venueId:2, bookingDate:"01.14.2034", bandId:4}
    ],
    venues: [
        {id:1, venueName:"Lord Have Mercy Lounge", address:"221B Baker St., London, United Kingdom", sqFt:16000, maxOcc:100},
        {id:2, venueName:"The Galley", address:"1663 Marigold Way, Montego Bay, Jamacia", sqFt:3000, maxOcc:120}
    ],
    bands: [
        {id:1, name:"RudeTooth", members:1, genre:"Experimental Funk", yearFormed:1992},
        {id:2, name:"HandBrake Handshake", members:4, genre:"Hard Rock", yearFormed:2000},
        {id:3, name:"Chick-fil-AK-47", members:2, genre:"Rap", yearFormed:1984},
        {id:4, name:"You In The Future", members:5, genre:"Future Funk", yearFormed:2974},
        {id:5, name:"Alabama MilkShakes", members:4, genre:"Alternative", yearFormed:2020},
        {id:6, name:"Hans Zimmer", members:1, genre:"Classical", yearFormed:2014},
    ]
}   

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}
export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}
export const getBands = () => {
    return database.bands.map(band => ({...band}))
}