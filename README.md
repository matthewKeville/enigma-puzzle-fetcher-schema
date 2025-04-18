# Enigma Puzzle Fetcher JSON Schemas

The **Enigma Puzzle Fetcher JSON Schemas** define a standard for how puzzle fetchers interact with the **Enigma** system, ensuring consistent and predictable behavior when integrated as plugins.

## Roadmap

A key goal of this project is to eventually replace the `puzzle-data-schema.json` with the **IPUZ schema**. The IPUZ format is designed to standardize crossword puzzle data, allowing fetcher plugins to be used in any application that supports the IPUZ format. This transition will increase flexibility, making puzzle data portable and reusable across different platforms.

For more information on the IPUZ format, visit the [IPUZ Specification](https://www.puzzazz.com/ipuz).

## Contracts

> The Schema defines a mapping of *response* and *request* objects

- The request must conform to the `schemas/request-schema.json`
- The response must conform to the `schemas/response-schema.json`

### intended object mappings

  Successful requests, will map the following request bodies to response bodies

#### Methods

  `schemas/methods/methods-request-body.json` -> `schemas/methods/methods-response-body-schema.json` 

#### Args Request

  `schemas/args/args-request-body.json` -> `schemas/args/args-response-body.json`

#### Fetch Request

  `schemas/fetch/fetch-request-body.json` -> `schemas/fetch/fetch-response-body.json` 

### Errors

> When Things Go Awry

If the fetcher can't fulfill the request it must reflect that in the response,
setting *success* to false and detailing the reason for failure with an `schemas/error-schema.json`

```json

# Example Error Response

{
  "success" : false,
  "error" : {
    "code" : "BadArgs",
    "errorMessage" : "The date argument must be in the format mm/dd/yyyy"
  }
}

