# airfeed Reference (draft-0)


### Table of contents
- [Schemas](#schemas)
  - [Flight](#flight)

## Schemas
All schemas are defined in [JSON Schema](http://json-schema.org) format and can also be used separately (stored in [`schema/`](/schema) directory).

### Flight
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**ident** | *Object [Flight.ident](#flight-ident)* | Flight identification. |`{ no: "FR8403" }`
**date** | *String* | Departure date according to ISO 8601: `YY-MM-DDDD`. | `"2015-03-29"`
**date_arrival** | *String* | Arrival date (if its overnight flight). | `"2015-03-30"`
**airline** | *Object [Flight.airline](#flight-airline)* | Information about operating airline. | `{ iata: "OK", icao: "CSA", name: "Czech Airlines" }`
**orig** | *Object [Flight.airport](#flight-airport)*| Information about departure airport. | `{ iata: "PRG", name: "Prague" }`
**dest** | *Object [Flight.airport](#flight-airport)* | Information about arrival airport. | `{ iata: "PRG", name: "Prague" }`
**times** | *Object [Flight.times](#flight-times)* | Flight departure and arrival times. | `{ std: "17:00", sta: "18:15" }`
**aircraft** | *Object [Flight.aircraft](#flight-aircraft)* | Info about aircraft. | `{ model: "319" }`
**status** | *String [Flight.status](#flight-status)* | Flight status. See [Flight.status](#flight-status). | `{ code: "departed" }`
**status_history** | *Array of [Flight.status](#flight-historyitem)* | Flight status history. | `[ { code: "cancelled", time: "2015-03-26T03:37:38.654Z" } ]`
**pos** | *Object [Flight.pos](#flight-pos)* | Current flight position, track and other real-time data. | `{ coords: [ 50.0833, 14.4167 ], alt: 1000, speed: 812, track: 108 }`
**pos_history** | *Array of [Flight.position](#flight-position)* | Flight position history. | `[..]`
**params** | *Object [Flight.params](#flight-params)* | Basic flight parameters. | `{ soldout: true }`
**stats** | *Object [Flight.stats](#flight-stats)* | Common statistics. | `{ load_factor: 99 }`

#### Flight.ident
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**no** | *Number* | Flight number without airline code. | `8403`
**no_full** | *String* | Full flight number. | `"FR8403"`

#### Flight.airline
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**iata** | *String* | 2-letter IATA code of airline. | `"OK"`
**icao** | *String* | 3-letter ICAO code of airline. | `"CSA"`
**name** | *String* | Name of airline | `"Czech Airlines"`

#### Flight.location
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**iata** | *String* | 3-letter IATA code of airport. | `"PRG"`
**icao** | *String* | 4-letter ICAO code of airport. | `"LKPR"`
**name** | *String* | Name of airport. | `"Prague"`
**terminal** | *String* | Airport terminal. | `"2"`
**gate** | *String* | Airport gate. | `"A5"`

#### Flight.aircraft
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**model** | *String* | Model of aircraft. | `"738"`
**reg** | *String* | Aircraft registration number. | `"OK-FUN"`

#### Flight.status
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**code** | *String* | Code of status, see below. | `"departed"`
**msg** | *String* | Status message. | `"Flight cancelled due to bad weather."`
**delay** | *Number* | Delay in minutes. | `14`
**time**| *String* | Datetime of current status in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601). | `"2015-03-26T03:33:24.680Z"`

##### Available statuses:

* `checkin`
* `gateopen`
* `boarding`
* `lastcall`
* `finalcall`
* `gateclose`
* `departed`
* `approaching`
* `landing`
* `landed`
* `cancelled`
* `diverted`
* `delayed`

#### Flight.pos
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**coords** | *Array Coordinate* | Coordinates in latitude and longitude. | `[ 50.0833, 14.4167 ]`
**alt** | *Number* | Altitude in feets. | `25525`
**speed** | *Number* | Speed in knots. | `470`
**squawk** | *Number* | Current [Squawk code](http://en.wikipedia.org/wiki/Squawk_code). | `2024`

#### Flight.params
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**soldout** | *Boolean* | If the flight is sold out. | `true`
**cancelled** | *Boolean* | Cancelled flight. | `true`
**diverted** | *Boolean* | Diverted flight. | `true`
**delayed** | *Boolean* | If the flight is delayed more than 15 minutes. | `true`
**flying** | *Boolean* | If the flight is in air. | `true`

#### Flight.stats
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**seats_sold** | *Number* | Number of sold seats. | `43`
**seats_available** | *Number* | Number of available seats | `180`
**load_factor** | *Number* | Load factor in percents. | `50`
**pax** | *Number* | Number of passengers boarded on aircraft. | `155`
**pilots** | *Number* | Number of pilots. | `2`
**crew** | *Number* | Number of crew without pilots. | `4`
**crew_all** | *Number* | Number of all crew including pilots. | `6`



