# Aeroschema Reference

 * [Flight](#Flight)
 * [Airport](#Airport)

## Flight

Flight schema

* [Flight](#Flight)
  * [Flight.ident](#Flight.ident)
  * [Flight.airline](#Flight.airline)
  * [Flight.airport](#Flight.airport)
  * [Flight.times](#Flight.times)
  * [Flight.aircraft](#Flight.aircraft)
  * [Flight.status](#Flight.status)
  * [Flight.params](#Flight.params)
  * [Flight.stats](#Flight.stats)
  * [Flight.rt](#Flight.rt)

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**ident** | *String or Object [Flight.ident](#Flight.ident)* | Flight ID - Flight identification. | `"DY1502"`
**date** | *String* | Departure date - ISO 8601 format: `YY-MM-DDDD`. | `"2015-03-27"`
**date_arrival** | *String* | Arrival date - Only if its overnight night. ISO 8601 format: `YY-MM-DDDD`. | `"2015-03-28"`
**airline** | *Object [Flight.airline](#Flight.airline)* | Airline | `{"iata":"DY","icao":"NAX","name":"Norwegian"}`
**orig** | *Object [Flight.airport](#Flight.airport)* | Origin - Information about origin airport. | `{"icao":"ENGM","name":"Oslo"}`
**dest** | *Object [Flight.airport](#Flight.airport)* | Destination - Information about destination airport. | `{"iata":"PRG","name":"Prague"}`
**times** | *Object [Flight.times](#Flight.times)* | Flight times - All times are in local time in ISO 8601 format, for example: &quot;03:33:01&quot; or less specific &quot;03:33&quot;. | `{"std":"19:00","atd":"19:08"}`
**aircraft** | *Object [Flight.aircraft](#Flight.aircraft)* | Aircraft - Info about aircraft. | `{"model":"73H"}`
**status** | *String or Object [Flight.status](#Flight.status)* | Flight status | `{"code":"departed","delay":8}`
**status_history** | *Array [Object [Flight.status](#Flight.status)]* | Status history - Flight status history. | `null`
**params** | *Object [Flight.params](#Flight.params)* | Flight parameters - Basic flight parameters. | `{"flying":true,"soldout":false}`
**stats** | *Object [Flight.stats](#Flight.stats)* | Statistics - Common statistics. | `null`
**rt** | *Object [Flight.rt](#Flight.rt)* | Real-time data - Current real-time information - flight position, track and other. | `{"coords":[50.532,19.231],"speed":560}`
**rt_history** | *Array [Object [Flight.rt](#Flight.rt)]* | Real-time history - Flight real-time data history. | `null`
**time** | *String* | Time of generation - Datetime in ISO 8601. | `"2015-03-27T01:38:05.419"`

#### Example
```javascript
{
  "ident": "DY1502",
  "date": "2015-03-27",
  "date_arrival": "2015-03-28",
  "airline": {
    "iata": "DY",
    "icao": "NAX",
    "name": "Norwegian"
  },
  "orig": {
    "icao": "ENGM",
    "name": "Oslo"
  },
  "dest": {
    "iata": "PRG",
    "name": "Prague"
  },
  "times": {
    "std": "19:00",
    "atd": "19:08"
  },
  "aircraft": {
    "model": "73H"
  },
  "status": {
    "code": "departed",
    "delay": 8
  },
  "params": {
    "flying": true,
    "soldout": false
  },
  "rt": {
    "coords": [
      50.532,
      19.231
    ],
    "speed": 560
  },
  "time": "2015-03-27T01:38:05.419"
}
```

### Flight.ident

Flight identification.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**no** | *Number* | Flight number - Flight number without airline code. | `null`
**no_full** | *String* | Full flight number - Full flight number with airline code. | `null`


#### Example
```javascript
"DY1502"
```
### Flight.airline

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**iata** | *String* | IATA code - 2-letter airline IATA code. | `"DY"`
**icao** | *String* | ICAO code - 3-letter airline ICAO code. | `"NAX"`
**name** | *String* | Airline name | `"Norwegian"`


#### Example
```javascript
{
  "iata": "DY",
  "icao": "NAX",
  "name": "Norwegian"
}
```
### Flight.airport

Information about origin airport.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**iata** | *String* | IATA code - 3-letter IATA code of airport. | `null`
**icao** | *String* | ICAO code - 4-letter ICAO code of airport. | `"ENGM"`
**name** | *String* | Airport name - Name of airport. | `"Oslo"`
**terminal** | *String* | Terminal - Airport terminal. | `null`
**gate** | *String* | Gate - Airport gate. | `null`
**belt** | *String* | Baggage belt - Baggage belt. | `null`
**exit** | *String* | Exit section | `null`


#### Example
```javascript
{
  "icao": "ENGM",
  "name": "Oslo"
}
```
### Flight.times

All times are in local time in ISO 8601 format, for example: &quot;03:33:01&quot; or less specific &quot;03:33&quot;.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**std** | *String* | Scheduled time of departure | `"19:00"`
**sta** | *String* | Scheduled time of arrival | `null`
**etd** | *String* | Estimated time of departure | `null`
**eta** | *String* | Estimated time of arrival | `null`
**atd** | *String* | Actual time of departure | `"19:08"`
**ata** | *String* | Actual time of arrival | `null`
**rtd** | *String* | Runway time of departure - Take-off | `null`
**rta** | *String* | Runway time of arrival - Touch down. | `null`
**gtd** | *String* | Gate time of departure - Aircraft doors closed. | `null`
**gta** | *String* | Gate time of arrival - Aircraft doors open. | `null`
**xtd** | *String* | Radar time of departure | `null`
**xta** | *String* | Radar time of arrival | `null`


#### Example
```javascript
{
  "std": "19:00",
  "atd": "19:08"
}
```
### Flight.aircraft

Info about aircraft.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**model** | *String* | Model - Model of aircraft. | `"73H"`
**reg** | *String* | Registration - Aircraft registration number. | `null`


#### Example
```javascript
{
  "model": "73H"
}
```
### Flight.status

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**code** | *String* | Status code - Code of status, see below. | `"departed"`
**msg** | *String* | Message - Status message. | `null`
**delay** | *Number* | Delay - Delay in minutes. | `8`
**time** | *String* | Time - Datetime of current status in ISO 8601. | `null`

#### Enum `code`
* checkin
* gateopen
* gatechange
* boarding
* lastcall
* finalcall
* gateclose
* taxiing
* departed
* approaching
* landing
* landed
* cancelled
* diverted
* delayed

#### Example
```javascript
{
  "code": "departed",
  "delay": 8
}
```
### Flight.params

Basic flight parameters.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**soldout** | *Boolean* | Sold out - If the flight is sold out. | `false`
**cancelled** | *Boolean* | Cancelled - Cancelled flight. | `null`
**diverted** | *Boolean* | Diverted - Diverted flight. | `null`
**delayed** | *Boolean* | Delayed - If the flight is delayed more than 15 minutes. | `null`
**flying** | *Boolean* | Flying - If the flight is in air. | `true`


#### Example
```javascript
{
  "flying": true,
  "soldout": false
}
```
### Flight.stats

Common statistics.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**seats_sold** | *Number* | Sold seats - Number of sold seats. | `null`
**seats_available** | *Number* | Available seats - Number of available seats. | `null`
**load_factor** | *Number* | Load factor - Load factor in percents. | `null`
**pax** | *Number* | Passengers - Number of passengers boarded on aircraft. | `null`
**pilots** | *Number* | Pilots - Number of pilots. | `null`
**crew** | *Number* | Crew - Number of crew without pilots. | `null`
**crew_all** | *Number* | All crew - Number of all crew including pilots. | `null`


#### Example
```javascript
null
```
### Flight.rt

Current real-time information - flight position, track and other.

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**coords** | *Array [number]* | Coordinates - Coordinates in latitude and longitude. | `[50.532,19.231]`
**alt** | *Number* | Altitude - Altitude in feets. | `null`
**speed** | *Number* | Speed - Speed in knots. | `560`
**track** | *Number* | Track - Current track. | `null`
**squawk** | *Number* | Squawk code - Current [Squawk code](http:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Squawk_code). | `null`


#### Example
```javascript
{
  "coords": [
    50.532,
    19.231
  ],
  "speed": 560
}
```

## Airport

Airport schema

* [Airport](#Airport)
  * [Airport.ident](#Airport.ident)
  * [Airport.aliases](#Airport.aliases)
  * [Airport.served](#Airport.served)
  * [Airport.runways](#Airport.runways)
  * [Airport.helipads](#Airport.helipads)
  * [Airport.terminals](#Airport.terminals)
  * [Airport.website](#Airport.website)
  * [Airport.website.languages](#Airport.website.languages)
  * [Airport.refs](#Airport.refs)
  * [Airport.waiting_times](#Airport.waiting_times)
  * [Airport.waiting_times.times](#Airport.waiting_times.times)
  * [Airport.webcams](#Airport.webcams)
  * [Airport.apps](#Airport.apps)
  * [Airport.opening_hours](#Airport.opening_hours)

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**ident** | *Object [Airport.ident](#Airport.ident)* | Airport ID - Airport identificators | `{"icao":"LKPR","iata":"PRG","geonames":6299654}`
**name** | *String* | Name - Name of airport. | `"Václav Havel Airport Prague"`
**domain** | *String* | Internet domain - Internet domain of airport. | `"prg.aero"`
**aliases** | *Array [Object [Airport.aliases](#Airport.aliases)]* | Aliases - Name aliases of airport. | `[{"lang":"en","value":"Václav Havel Airport Prague","preferred":true},{"lang":"cs","value":"Letiště Václava Havla Praha"},{"lang":"cs","value":"Mezinárodní letiště Praha-Ruzyně","historical":true}]`
**continent** | *String* | Continent - Continent where is airport located. | `"EU"`
**region** | *String* | Region - ISO 3166-2 region code | `"CZ-PR"`
**country** | *String* | Country - ISO 3166-1 alpha-3 code | `"CZE"`
**served** | *Array [Object [Airport.served](#Airport.served)]* | Served - Cities&#x2F;locations served by this airport. | `[{"name":"Prague","geonames":3067696}]`
**timezone** | *String* | Timezone - tz database code. | `"Europe/Prague"`
**coords** | *Array [number]* | Coordinates - Airport location coordinates. | `[50.100833,14.26]`
**elevation** | *Number* | Elevation - Elevation of airport in feets. | `1247`
**runways** | *Array [Object [Airport.runways](#Airport.runways)]* | Runways - Info about airport runways. | `[{"direction":"06/24","size":"12191x197","surface":"concrete","active":true},{"direction":"12/30","length":10665,"surface":"concrete","active":true},{"direction":"04/22","length":6955,"surface":"asphaltic-concrete","active":false}]`
**helipads** | *Array [Object [Airport.helipads](#Airport.helipads)]* | Helipads - Info about airport helipads. | `[{"number":"H2","length":11.2,"surface":"asphalt"}]`
**terminals** | *Array [Object [Airport.terminals](#Airport.terminals)]* | Terminals - Airport terminals. | `[{"name":"Terminal 1","alias":"T1","public":true},{"name":"Terminal 2","alias":"T2","public":true},{"name":"Terminal 3","alias":"T3","public":false},{"name":"Terminal 4","alias":"T4","public":false}]`
**website** | *String or Object [Airport.website](#Airport.website)* | Website - Airport website. | `{"url":"http://www.prg.aero/en/","url_mobile":"http://m.prg.aero/en/","languages":[{"lang":"cs","url":"http://www.prg.aero/cs/","url_mobile":"http://m.prg.aero/cs/","primary":true},{"lang":"en","url":"http://www.prg.aero/en/","url_mobile":"http://m.prg.aero/en/"},{"lang":"ru","url":"http://www.prg.aero/ru/","url_mobile":"http://m.prg.aero/ru/"}],"features":["sms-info","webcam","map"]}`
**refs** | *Array [Object [Airport.refs](#Airport.refs)]* | References | `[{"type":"wikipedia/en","value":296099,"url":"http://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague"},{"type":"wikipedia/cs","value":13630,"url":"http://cs.wikipedia.org/wiki/Leti%C5%A1t%C4%9B_V%C3%A1clava_Havla_Praha"},{"type":"foursquare","value":"4adcdaa8f964a520824f21e3","url":"https://foursquare.com/v/leti%C5%A1t%C4%9B-v%C3%A1clava-havla--v%C3%A1clav-havel-airport-prg/4adcdaa8f964a520824f21e3"}]`
**waiting_times** | *Object [Airport.waiting_times](#Airport.waiting_times)* | Waiting times | `{"security":[{"terminal":"T1","time":"<10"},{"terminal":"T2","area":"left","time":2},{"terminal":"T2","area":"right","time":"<15"}]}`
**webcams** | *Array [Object [Airport.webcams](#Airport.webcams)]* | Webcams - Webcams at airport. | `[{"terminal":"T1","fps":0.33,"resolution":"704x480","raw_url":"http://apollo.prg.aero/kamera/image.jpg","url":"http://www.prg.aero/en/prague-airport/webcam/"}]`
**apps** | *Array [Object [Airport.apps](#Airport.apps)]* | Applications | `[{"platform":"android","id":"cz.sw.upis.upisand","url":"https://play.google.com/store/apps/details?id=cz.sw.upis.upisand"},{"platform":"ios","id":581517376,"url":"https://itunes.apple.com/us/app/prague-airport-letiste-praha/id581517376"}]`
**features** | *Array [string]* | Features - Airport features. | `["free-wifi","open-nonstop"]`
**opening_hours** | *Array [Object [Airport.opening_hours](#Airport.opening_hours)]* | Opening hours | `[{"days":"all","times":"00:00-24:00"}]`

#### Example
```javascript
{
  "ident": {
    "icao": "LKPR",
    "iata": "PRG",
    "geonames": 6299654
  },
  "name": "Václav Havel Airport Prague",
  "domain": "prg.aero",
  "elevation": 1247,
  "continent": "EU",
  "region": "CZ-PR",
  "country": "CZE",
  "timezone": "Europe/Prague",
  "coords": [
    50.100833,
    14.26
  ],
  "served": [
    {
      "name": "Prague",
      "geonames": 3067696
    }
  ],
  "aliases": [
    {
      "lang": "en",
      "value": "Václav Havel Airport Prague",
      "preferred": true
    },
    {
      "lang": "cs",
      "value": "Letiště Václava Havla Praha"
    },
    {
      "lang": "cs",
      "value": "Mezinárodní letiště Praha-Ruzyně",
      "historical": true
    }
  ],
  "features": [
    "free-wifi",
    "open-nonstop"
  ],
  "terminals": [
    {
      "name": "Terminal 1",
      "alias": "T1",
      "public": true
    },
    {
      "name": "Terminal 2",
      "alias": "T2",
      "public": true
    },
    {
      "name": "Terminal 3",
      "alias": "T3",
      "public": false
    },
    {
      "name": "Terminal 4",
      "alias": "T4",
      "public": false
    }
  ],
  "runways": [
    {
      "direction": "06/24",
      "size": "12191x197",
      "surface": "concrete",
      "active": true
    },
    {
      "direction": "12/30",
      "length": 10665,
      "surface": "concrete",
      "active": true
    },
    {
      "direction": "04/22",
      "length": 6955,
      "surface": "asphaltic-concrete",
      "active": false
    }
  ],
  "helipads": [
    {
      "number": "H2",
      "length": 11.2,
      "surface": "asphalt"
    }
  ],
  "website": {
    "url": "http://www.prg.aero/en/",
    "url_mobile": "http://m.prg.aero/en/",
    "languages": [
      {
        "lang": "cs",
        "url": "http://www.prg.aero/cs/",
        "url_mobile": "http://m.prg.aero/cs/",
        "primary": true
      },
      {
        "lang": "en",
        "url": "http://www.prg.aero/en/",
        "url_mobile": "http://m.prg.aero/en/"
      },
      {
        "lang": "ru",
        "url": "http://www.prg.aero/ru/",
        "url_mobile": "http://m.prg.aero/ru/"
      }
    ],
    "features": [
      "sms-info",
      "webcam",
      "map"
    ]
  },
  "refs": [
    {
      "type": "wikipedia/en",
      "value": 296099,
      "url": "http://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague"
    },
    {
      "type": "wikipedia/cs",
      "value": 13630,
      "url": "http://cs.wikipedia.org/wiki/Leti%C5%A1t%C4%9B_V%C3%A1clava_Havla_Praha"
    },
    {
      "type": "foursquare",
      "value": "4adcdaa8f964a520824f21e3",
      "url": "https://foursquare.com/v/leti%C5%A1t%C4%9B-v%C3%A1clava-havla--v%C3%A1clav-havel-airport-prg/4adcdaa8f964a520824f21e3"
    }
  ],
  "waiting_times": {
    "security": [
      {
        "terminal": "T1",
        "time": "<10"
      },
      {
        "terminal": "T2",
        "area": "left",
        "time": 2
      },
      {
        "terminal": "T2",
        "area": "right",
        "time": "<15"
      }
    ]
  },
  "webcams": [
    {
      "terminal": "T1",
      "fps": 0.33,
      "resolution": "704x480",
      "raw_url": "http://apollo.prg.aero/kamera/image.jpg",
      "url": "http://www.prg.aero/en/prague-airport/webcam/"
    }
  ],
  "apps": [
    {
      "platform": "android",
      "id": "cz.sw.upis.upisand",
      "url": "https://play.google.com/store/apps/details?id=cz.sw.upis.upisand"
    },
    {
      "platform": "ios",
      "id": 581517376,
      "url": "https://itunes.apple.com/us/app/prague-airport-letiste-praha/id581517376"
    }
  ],
  "opening_hours": [
    {
      "days": "all",
      "times": "00:00-24:00"
    }
  ]
}
```

### Airport.ident

Airport identificators

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**iata** | *String* | IATA code - 3-letter IATA code of airport. | `"PRG"`
**icao** | *String* | ICAO code - 3-letter ICAO code of airport. | `"LKPR"`


#### Example
```javascript
{
  "icao": "LKPR",
  "iata": "PRG",
  "geonames": 6299654
}
```
### Airport.aliases

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**lang** | *String* | Language - Three-letter ISO 639-3 language code. | `"en"`
**value** | *String* | Value | `"Václav Havel Airport Prague"`
**preferred** | *Boolean* | Preferred | `true`
**historical** | *Boolean* | Historical - Historical names. | `null`
**colloquial** | *Boolean* | Colloquial | `null`


#### Example
```javascript
{
  "lang": "en",
  "value": "Václav Havel Airport Prague",
  "preferred": true
}
```
### Airport.served

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**name** | *String* | Name - Name of city&#x2F;location. | `"Prague"`
**geonames** | *Number* | Geonames ID | `3067696`


#### Example
```javascript
{
  "name": "Prague",
  "geonames": 3067696
}
```
### Airport.runways

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**direction** | *String* | Direction - Runway direction. | `"06/24"`
**length** | *Number* | Length - Runway length in feets. | `null`
**size** | *String* | Size - Runway dimensions in feets (length x width). | `"12191x197"`
**surface** | *String* | Surface - Type of surface. | `"concrete"`
**active** | *Boolean* | Active? | `true`

#### Enum `surface`
* concrete
* asphaltic-concrete
* asphalt

#### Example
```javascript
{
  "direction": "06/24",
  "size": "12191x197",
  "surface": "concrete",
  "active": true
}
```
### Airport.helipads

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**number** | *String* | Number | `"H2"`
**length** | *Number* | Length - ft | `11.2`
**surface** | *String* | Surface - Type of surface. | `"asphalt"`

#### Enum `surface`
* concrete
* asphaltic-concrete
* asphalt

#### Example
```javascript
{
  "number": "H2",
  "length": 11.2,
  "surface": "asphalt"
}
```
### Airport.terminals

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**name** | *String* | Name - Terminal name. | `"Terminal 1"`
**alias** | *String* | Alias - Terminal alias or shortname. | `"T1"`
**public** | *Boolean* | Public - Its public terminal? | `true`
**coords** | *Array [number]* | Coordinates - Location coordinates of terminal. | `null`
**features** | *String* | Features - Terminal features. | `null`

#### Enum `features`
* free-wifi
* payable-wifi
* open-nonstop
* sleep-forbidden

#### Example
```javascript
{
  "name": "Terminal 1",
  "alias": "T1",
  "public": true
}
```
### Airport.website

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**url** | *String* | URL | `"http://www.prg.aero/en/"`
**url_mobile** | *String* | Mobile URL - URL to mobile version of web. | `"http://m.prg.aero/en/"`
**mobile_ready** | *Boolean* | Mobile ready? | `null`
**languages** | *Array [Object [Airport.website.languages](#Airport.website.languages)]* | Languages - Website languages. | `[{"lang":"cs","url":"http://www.prg.aero/cs/","url_mobile":"http://m.prg.aero/cs/","primary":true},{"lang":"en","url":"http://www.prg.aero/en/","url_mobile":"http://m.prg.aero/en/"},{"lang":"ru","url":"http://www.prg.aero/ru/","url_mobile":"http://m.prg.aero/ru/"}]`
**features** | *Array [string]* | Features - Website features. | `["sms-info","webcam","map"]`


#### Example
```javascript
{
  "url": "http://www.prg.aero/en/",
  "url_mobile": "http://m.prg.aero/en/",
  "languages": [
    {
      "lang": "cs",
      "url": "http://www.prg.aero/cs/",
      "url_mobile": "http://m.prg.aero/cs/",
      "primary": true
    },
    {
      "lang": "en",
      "url": "http://www.prg.aero/en/",
      "url_mobile": "http://m.prg.aero/en/"
    },
    {
      "lang": "ru",
      "url": "http://www.prg.aero/ru/",
      "url_mobile": "http://m.prg.aero/ru/"
    }
  ],
  "features": [
    "sms-info",
    "webcam",
    "map"
  ]
}
```
### Airport.website.languages

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**lang** | *String* |  | `null`
**url** | *String* |  | `null`
**url_mobile** | *String* |  | `null`
**primary** | *Boolean* |  | `null`


#### Example
```javascript
null
```
### Airport.refs

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**type** | *String* | Type - Type of reference. | `"wikipedia/en"`
**value** | *String or Number* | Reference value | `296099`
**url** | *String* | URL of reference | `"http://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague"`


#### Example
```javascript
{
  "type": "wikipedia/en",
  "value": 296099,
  "url": "http://en.wikipedia.org/wiki/V%C3%A1clav_Havel_Airport_Prague"
}
```
### Airport.waiting_times

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**security** | *Array [Object [Airport.waiting_times.times](#Airport.waiting_times.times)]* | Security | `[{"terminal":"T1","time":"<10"},{"terminal":"T2","area":"left","time":2},{"terminal":"T2","area":"right","time":"<15"}]`


#### Example
```javascript
{
  "security": [
    {
      "terminal": "T1",
      "time": "<10"
    },
    {
      "terminal": "T2",
      "area": "left",
      "time": 2
    },
    {
      "terminal": "T2",
      "area": "right",
      "time": "<15"
    }
  ]
}
```
### Airport.waiting_times.times

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**terminal** | *String* | Terminal | `null`
**area** | *String* | Area | `null`
**time** | *String or Number* | Waiting time - in minutes | `null`


#### Example
```javascript
null
```
### Airport.webcams

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**name** | *String* | Name - Name of webcam | `null`
**terminal** | *String* | Terminal - Terminal name or alias. | `"T1"`
**fps** | *Number* | FPS - Frames per second. | `0.33`
**resolution** | *String* | Resolution - Resolution in pixels. | `"704x480"`
**url** | *String* | URL | `"http://www.prg.aero/en/prague-airport/webcam/"`
**raw_url** | *String* | Raw URL | `"http://apollo.prg.aero/kamera/image.jpg"`


#### Example
```javascript
{
  "terminal": "T1",
  "fps": 0.33,
  "resolution": "704x480",
  "raw_url": "http://apollo.prg.aero/kamera/image.jpg",
  "url": "http://www.prg.aero/en/prague-airport/webcam/"
}
```
### Airport.apps

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**platform** | *String* | Platform - Platform of application. | `"android"`
**id** | *String or Number* | ID - Application ID. | `"cz.sw.upis.upisand"`
**url** | *String* | URL - Link to application. | `"https://play.google.com/store/apps/details?id=cz.sw.upis.upisand"`

#### Enum `platform`
* ios
* android
* wp
* firefox
* blackberry
* linux
* osx
* windows

#### Example
```javascript
{
  "platform": "android",
  "id": "cz.sw.upis.upisand",
  "url": "https://play.google.com/store/apps/details?id=cz.sw.upis.upisand"
}
```
### Airport.opening_hours

Property | Type | Description | Example
---- | ---- | ---- | ---- | ----
**days** | *String* | Days - Days in week. | `"all"`
**times** | *String* | Times - Opening time. | `"00:00-24:00"`


#### Example
```javascript
{
  "days": "all",
  "times": "00:00-24:00"
}
```


