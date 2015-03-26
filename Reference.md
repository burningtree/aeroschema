# airfeed Reference (draft-0)


### Table of contents
- [Feeds](#feeds)
   - [Collection](#collection)
- [Schemas](#schemas)
  - [Flight](#flight)
    - [Flight.ident](#flightident)
    - [Flight.airline](#flightairline)
    - [Flight.airport](#flightairport)
    - [Flight.times](#flighttimes)
    - [Flight.status](#flightstatus)
    - [Flight.params](#flightparams)
    - [Flight.stats](#flightstats)
    - [Flight.rt](#flightrt)

## Feeds
### Collection

##### Collection example
```javascript
{
  items: [
    {
      flight: {
        date: "2014-03-26",
        ident: "FR1234",
        status: {
          code: "cancelled"
          msg: "Flight cancelled due to bad weather at destination."
        }
      }
    },
    {
      flight: {
        ident: "OK9922",
        rt: {
          coords: [ 50.0833, 14.4167 ],
          speed: 470
        }
      }
    },
  ],
  count: 2,
  time: "2015-03-26T04:57:02.643"
}
```

## Schemas
All schemas are defined in [JSON Schema](http://json-schema.org) format and can also be used separately (stored in [`schema/`](/schema) directory).

### Flight
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**ident** | *String* or *Object [Flight.ident](#flightident)* | Flight identification. | `"FR8403"` or `{ no: 8403 }`
**date** | *String* | Departure date according to ISO 8601: `YY-MM-DDDD`. | `"2015-03-29"`
**date_arrival** | *String* | Arrival date (if its overnight flight). | `"2015-03-30"`
**airline** | *Object [Flight.airline](#flightairline)* | Information about operating airline. | `{ iata: "OK", icao: "CSA", name: "Czech Airlines" }`
**orig** | *Object [Flight.airport](#flightairport)*| Information about departure airport. | `{ iata: "PRG", name: "Prague" }`
**dest** | *Object [Flight.airport](#flightairport)* | Information about arrival airport. | `{ iata: "PRG", name: "Prague" }`
**times** | *Object [Flight.times](#flighttimes)* | Flight departure and arrival times. | `{ std: "17:00", sta: "18:15" }`
**aircraft** | *Object [Flight.aircraft](#flightaircraft)* | Info about aircraft. | `{ model: "319" }`
**status** | *String [Flight.status](#flightstatus)* | Flight status. See [Flight.status](#flightstatus). | `{ code: "departed" }`
**status_history** | *Array of [Flight.status](#flightstatus)* | Flight status history. | `[ { code: "cancelled", time: "2015-03-26T03:37:38.654Z" } ]`
**params** | *Object [Flight.params](#flightparams)* | Basic flight parameters. | `{ soldout: true }`
**stats** | *Object [Flight.stats](#flightstats)* | Common statistics. | `{ load_factor: 99 }`
**rt** | *Object [Flight.rt](#flightrt)* | Current real-time information - flight position, track and other. | `{ coords: [ 50.0833, 14.4167 ], alt: 1000, speed: 812, track: 108 }`
**rt_history** | *Array of [Flight.rt](#flightrt)* | Flight position history. | `[..]`
**time** | *String* | Datetime of generation in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601). | `"2015-03-26T03:33:24.680"` 

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

#### Flight.airport
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**iata** | *String* | 3-letter IATA code of airport. | `"PRG"`
**icao** | *String* | 4-letter ICAO code of airport. | `"LKPR"`
**name** | *String* | Name of airport. | `"Prague"`
**terminal** | *String* | Airport terminal. | `"2"`
**gate** | *String* | Airport gate. | `"A5"`

#### Flight.times
All times are in local time in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format, for example: `"03:33:01"` or less specific `"03:33"`.

&nbsp; | Type | Description
---- | ---- | ---- | ----
**std** | *String* | Scheduled time of departure.
**sta** | *String* | Scheduled time of arrival.
**etd** | *String* | Estimated time of departure.
**eta** | *String* | Estimated time of arrival.
**atd** | *String* | Actual time of departure.
**ata** | *String* | Actual time of arrival.
**rtd** | *String* | Runway time of departure - take-off.
**rta** | *String* | Runway time of arrival - touch down.
**gtd** | *String* | Gate time of departure - aircraft doors closed.
**gta** | *String* | Gate time of arrival - aircraft doors open.
**xtd** | *String* | Radar time of departure.
**xta** | *String* | Radar time of arrival.

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
**time**| *String* | Datetime of current status in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601). | `"2015-03-26T03:33:24.680"`

##### Available statuses:

* `checkin`
* `gateopen`
* `gatechange`
* `boarding`
* `lastcall`
* `finalcall`
* `gateclose`
* `taxiing`
* `departed`
* `approaching`
* `landing`
* `landed`
* `cancelled`
* `diverted`
* `delayed`

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

#### Flight.rt
&nbsp; | Type | Description | Example
---- | ---- | ---- | ---- | ----
**coords** | *Array Coordinate* | Coordinates in latitude and longitude. | `[ 50.0833, 14.4167 ]`
**alt** | *Number* | Altitude in feets. | `25525`
**speed** | *Number* | Speed in knots. | `470`
**track** | *Number* | Current track. | `160`
**squawk** | *Number* | Current [Squawk code](http://en.wikipedia.org/wiki/Squawk_code). | `2024`



