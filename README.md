# aeroschema
**Open Air Transport Schema Specification** (draft-0)

## Introduction
Main goal is to create a unified schemas for exchange passengers-oriented air transport data. These will include real-time informations like delays, departure gates, waiting times at security and so on. Recommended transport format is JSON or [msgpack](http://msgpack.org) and all schemas are defined in [JSON Schema](http://json-schema.org) format.

This specification does not want to compete with professional specifications such as [AIXM](http://www.aixm.aero), but wants to complement it and its suitable for the general public.

This project is open source, so any suggestions and improvements are welcome.

**Warning: This schema are under development and not suitable for production use. Use at your own risk.**

### Docs
- [Aeroschema Reference (draft-0)](Reference.md)

## Summary

### Schemas
All schemas are defined in [JSON Schema](http://json-schema.org) format and can also be used separately (stored in [`schema/`](/schema) directory).

- **Aircraft** - planned
- **AircraftModel** - planned
- **AircraftSeating** - planned
- **Airline** - in progress
- **AirlineStatistics** - planned
- **[Airport](Reference.md#airport)** ([json](schema/airport.json))
- **AirportStatistics** - planned
- **BoardingPass** - planned
- **[Flight](Reference.md#flight)** ([json](schema/flight.json))
- **Incident** - planned
- **Reservation** - planned

## Resources

### Specifications
* [IATA Delay Codes (IATA AHM730)](https://www.eurocontrol.int/sites/default/files/content/documents/official-documents/facts-and-figures/coda-reports/standard-iata-delay-codes-ahm730.pdf)
* [IATA Delay Sub-Codes (IATA AHM731)](https://www.eurocontrol.int/sites/default/files/content/documents/official-documents/facts-and-figures/coda-reports/iata_delay_sub_code_list_ahm731.pdf)
* [AIP - Aeronautical Information Publication](http://en.wikipedia.org/wiki/Aeronautical_Information_Publication)

### Datasets

#### Airlines
* [IATA Airline Members](http://www.iata.org/about/members/pages/airline-list.aspx?All=true) - All IATA Member Airlines (2-letter IATA designator and 3-digit code)

#### Regional aviation databases
* [Eurocontrol - Useful links for statistics data](https://www.eurocontrol.int/articles/useful-links-statistics-data) - Links to statistics data in EU region.
* [UK Civil Aviation Authority](http://www.caa.co.uk/default.aspx?catid=80&pagetype=90) - UK Airline/Airport statistics

#### Airports data
* [PHL Flight Information API](http://flightinfo.phlapi.com/) - A REST and WebSocket API for PHL Flight Information Data

#### Geography
- [mledoze/countries](https://github.com/mledoze/countries) - World countries in JSON
- [GeoNames](http://www.geonames.org/) - Geographical database

## TODO
- geojson for airports/route?

## Name change proposals
- airjson
- aerojson
- airschema
- airpack

## Credits

[Jan Stránský](https://github.com/burningtree) &lt;<jan.stransky@arnal.cz>&gt;

## LICENCE

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Aeroschema</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

