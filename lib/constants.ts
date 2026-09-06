export const dojos = [
  {
    name: "CARSA Honbu Dojo",
    venue: "CARSA University of Victoria",
    address: "3800 Finnerty Rd, Victoria, BC",
    city: "Victoria",
    mapsUrl: "https://maps.app.goo.gl/6YGjvT35znpxZ2Ho9",
    facebookUrl: "https://www.facebook.com/CanadaBudokaiAcademy",
    classes: [
      { day: "Tuesday", level: "All levels", time: "6:00pm-8:00pm" },
      { day: "Thursday", level: "Advanced", time: "6:00pm-8:00pm" },
      { day: "Friday", level: "All levels", time: "6:00pm-8:00pm" },
    ],
  },
  {
    name: "Vimy Dojo",
    venue: "Vimy Community Hall",
    address: "3968 Gibbins Rd, Duncan, BC",
    city: "Duncan",
    mapsUrl: "https://maps.app.goo.gl/iHJZEyBAW5puKLLT8",
    facebookUrl: "https://www.facebook.com/CanadaBudokaiAcademyDuncan",
    classes: [
      { day: "Monday", level: "All levels", time: "6:00pm-8:00pm" },
      { day: "Wednesday", level: "All levels", time: "6:00pm-8:00pm" },
      { day: "Thursday", level: "All levels", time: "6:00pm-8:00pm" },
    ],
  },
  {
    name: "QMS Dojo",
    venue: "Queen Margaret's School",
    address: "660 Brownsey Ave, Duncan, BC",
    city: "Duncan",
    mapsUrl: "https://maps.app.goo.gl/R89Y9P64WRW4AZmg9",
    facebookUrl: null,
    classes: [],
  },
] as const;

export type Dojo = (typeof dojos)[number];
export type DojoClass = Dojo["classes"][number];
