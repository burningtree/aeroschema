# airfeed
**Open Air Transport Feed Specification** (draft)

## Introduction
Main goal is to create a unified format (and schemas) for handling passengers-oriented air transport data. These will include real-time informations like delays, departure gates, waiting times at security and so on. Preferred transport format is JSON or [msgpack](http://msgpack.org).

This project is open source, so any suggestions and improvements are welcome.

**Warning: This specification is under construction, and definitely not suitable for production use. Use at your own risk.**

### Docs
[airfeed Reference (draft-0)](Reference.md)

## Summary
### Feeds
Single feed item is same as used schema.

- **[Collection](Reference.md#Collection)**

### Schemas
All schemas are defined in [JSON Schema](http://json-schema.org) format and can also be used separately (stored in [`schema/`](/schema) directory).

- **Aircraft** - planned
- **AircraftModel** - planned
- **AircraftSeating** - planned
- **Airline** - in progress
- **Airport** - in progress
- **BoardingPass** - planned
- **[Flight](Reference.md#Flight)** ([json](/schema/flight.json))
- **Incident** - planned
- **Reservation** - planned

## TODO
- Examples

## Credits

[Jan Stránský](https://github.com/burningtree) &lt;<jan.stransky@arnal.cz>&gt;

## LICENCE

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">airfeed</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

