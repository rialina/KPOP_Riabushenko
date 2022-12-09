import {IProductChild} from "./childProsucts";

export interface IProduct {
  "coord": {
    "lon": number,
    "lat": number
  },
  "weather": [
    {
      "id": number,
      "main": string,
      "description": string,
      "icon": string
    }
  ],
  "base": string,
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number,
    "sea_level": number,
    "grnd_level": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number,
    "gust": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number

}

//
// export interface IProduct {
//   "a1": {
//     "coord": {
//       "lon": number,
//       "lat": number
//     },
//     "weather": [
//       {
//         "id": number,
//         "main": string,
//         "description": string,
//         "icon": string
//       }
//     ],
//     "base": string,
//     "main": {
//       "temp": number,
//       "feels_like": number,
//       "temp_min": number,
//       "temp_max": number,
//       "pressure": number,
//       "humidity": number,
//       "sea_level": number,
//       "grnd_level": number
//     },
//     "visibility": number,
//     "wind": {
//       "speed": number,
//       "deg": number,
//       "gust": number
//     },
//     "clouds": {
//       "all": number
//     },
//     "dt": number,
//     "sys": {
//       "country": string,
//       "sunrise": number,
//       "sunset": number
//     },
//     "timezone": number,
//     "id": number,
//     "name": string,
//     "cod": number
//   },
//   "a2": {
//     "coord": {
//       "lon": number,
//       "lat": number
//     },
//     "weather": [
//       {
//         "id": number,
//         "main": string,
//         "description": string,
//         "icon": string
//       }
//     ],
//     "base": string,
//     "main": {
//       "temp": number,
//       "feels_like": number,
//       "temp_min": number,
//       "temp_max": number,
//       "pressure": number,
//       "humidity": number,
//       "sea_level": number,
//       "grnd_level": number
//     },
//     "visibility": number,
//     "wind": {
//       "speed": number,
//       "deg": number,
//       "gust": number
//     },
//     "clouds": {
//       "all": number
//     },
//     "dt": number,
//     "sys": {
//       "country": string,
//       "sunrise": number,
//       "sunset": number
//     },
//     "timezone": number,
//     "id": number,
//     "name": string,
//     "cod": number
//   },
//   "a3": {
//     "coord": {
//       "lon": number,
//       "lat": number
//     },
//     "weather": [
//       {
//         "id": number,
//         "main": string,
//         "description": string,
//         "icon": string
//       }
//     ],
//     "base": string,
//     "main": {
//       "temp": number,
//       "feels_like": number,
//       "temp_min": number,
//       "temp_max": number,
//       "pressure": number,
//       "humidity": number,
//       "sea_level": number,
//       "grnd_level": number
//     },
//     "visibility": number,
//     "wind": {
//       "speed": number,
//       "deg": number,
//       "gust": number
//     },
//     "clouds": {
//       "all": number
//     },
//     "dt": number,
//     "sys": {
//       "country": string,
//       "sunrise": number,
//       "sunset": number
//     },
//     "timezone": number,
//     "id": number,
//     "name": string,
//     "cod": number
//   }
//
// }




// export interface IProduct {
//   "results": [
//     {
//       "gender": string,
//       "name": {
//         "title": string,
//         "first": string,
//         "last": string
//       },
//       "location": {
//         "street": {
//           "number": number,
//           "name": string
//         },
//         "city": string,
//         "state": string,
//         "country": string,
//         "postcode": string,
//         "coordinates": {
//           "latitude": string,
//           "longitude": string
//         },
//         "timezone": {
//           "offset": string,
//           "description": string
//         }
//       },
//       "email": string,
//       "login": {
//         "uuid": string,
//         "username": string,
//         "password": string,
//         "salt": string,
//         "md5": string,
//         "sha1": string,
//         "sha256": string
//       },
//       "dob": {
//         "date": string,
//         "age": number
//       },
//       "registered": {
//         "date": string,
//         "age": number
//       },
//       "phone": string,
//       "cell": string,
//       "id": {
//         "name": string,
//         "value": string
//       },
//       "picture": {
//         "large": string,
//         "medium": string,
//         "thumbnail": string
//       },
//       "nat": string
//     }
//   ],
//   "info": {
//     "seed": string,
//     "results": number,
//     "page": number,
//     "version": string
//   }
//
// }
