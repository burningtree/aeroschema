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
- **[Airport](Reference.md#airport)** ([json](schema/airport.json))
- **BoardingPass** - planned
- **[Flight](Reference.md#flight)** ([json](schema/flight.json))
- **Incident** - planned
- **Reservation** - planned

## Resources
### Related datasets
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

