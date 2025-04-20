export const SelectTravelsList = [
  {
    id: 1,
    title: "Jsut Me",
    desc: "A sole traveles in exploration",
    icon: "🏄‍♂️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "💍",
    people: "2 people",
  },

  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurers",
    icon: "🏡",
    people: "3 to 4 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill seeks",
    icon: "⛵️",
    people: "5 to 6 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDay} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details , Flight Price with Booking url, Hotels option list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDay} days and {totalNight} night with each day plan with best time to visit in JSON format. remember to give only json not any additonal text in your repsonse.";
