data1 = {
  "network": {
    "company": [
      "DecoBike LLC"
    ],
    "href": "/v2/networks/decobike-miami-beach",
    "id": "decobike-miami-beach",
    "location": {
      "city": "Miami Beach, FL",
      "country": "US",
      "latitude": 25.790654,
      "longitude": -80.1300455
    },
    "name": "Citi Bike Miami",
    "stations": [
      {
      "empty_slots": 0,
      "extra": {
      "address": "Demo CycloShare  Lab",
      "uid": "5"
      },
      "free_bikes": 0,
      "id": "fc3ce29e4cbee5e7185f3b528b4dd1bc",
      "latitude": 0,
      "longitude": 0,
      "name": "5 - Demo CycloShare  Lab",
      "timestamp": "2020-10-19T17:35:59.262000Z"
      },
      {
      "empty_slots": 8,
      "extra": {
      "address": "Grand Ave & Main Hwy",
      "uid": "601"
      },
      "free_bikes": 8,
      "id": "689147fd14212f383478f37d856682cf",
      "latitude": 25.72805,
      "longitude": -80.24173,
      "name": "601 - Grand Ave & Main Hwy",
      "timestamp": "2020-10-19T17:35:59.054000Z"
      }
    ]
  }
}

data2 = {
  "network": {
    "company": [
      "DecoBike LLC"
    ],
    "href": "/v2/networks/decobike-miami-beach",
    "id": "decobike-miami-beach",
    "location": {
      "city": "Miami Beach, FL",
      "country": "US",
      "latitude": 25.790654,
      "longitude": -80.1300455
    },
    "name": "Citi Bike Miami",
    "stations": [
      {
      "empty_slots": 0,
      "extra": {
      "address": "Demo CycloShare  Lab",
      "uid": "5"
      },
      "free_bikes": 3,
      "id": "fc3ce29e4cbee5e7185f3b528b4dd1bc",
      "latitude": 0,
      "longitude": 0,
      "name": "5 - Demo CycloShare  Lab",
      "timestamp": "2020-10-19T17:35:59.262000Z"
      },
      {
      "empty_slots": 8,
      "extra": {
      "address": "Grand Ave & Main Hwy",
      "uid": "601"
      },
      "free_bikes": 8,
      "id": "689147fd14212f383478f37d856682cf",
      "latitude": 25.72805,
      "longitude": -80.24173,
      "name": "601 - Grand Ave & Main Hwy",
      "timestamp": "2020-10-19T17:35:59.054000Z"
      }
    ]
  }
}

data1stations = data1.network.stations;
data2stations = data2.network.stations;

var freebikes1 = {}
data1stations.forEach(station =>
  {
    freebikes1[station.name] = station.free_bikes
  }
)

var freebikes2 = {}
data2stations.forEach(station =>
  {
    freebikes2[station.name] = station.free_bikes
  }
)

var differentFreebikes = []
for (var name in freebikes1){
  if (freebikes1[name] == freebikes2[name]){

  }else{
    console.log("diferentes")
    differentFreebikes.push([name,freebikes1[name]])
  }
}

console.log(differentFreebikes);
