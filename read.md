# Enigma Puzzle Fetcher JSON Schemas

The **Enigma Puzzle Fetcher JSON Schemas** define a standard for how puzzle fetchers interact with the **Enigma** system, ensuring consistent and predictable behavior when integrated as plugins.

## Schemas Overview

### `/schemas/capabilities-command-schema.json`
Represents a request to inquire about the types of fetch operations a fetcher supports, such as specific commands (e.g., "date" with an ISO date argument, or "today" with no arguments), allowing Enigma to understand the fetcher's available features.

### `/schemas/fetch-command-schema.json`
Defines the request format for fetching a puzzle from a fetcher, ensuring a consistent structure for puzzle requests across various sources.

### `/schemas/fetch-response-schema.json`
Specifies the structure of the response to a fetch command, ensuring that puzzle data is returned in a predictable and usable format.

### `/schemas/puzzle-data-schema.json`
Outlines the format for puzzle data, including grid, clues, and solutions, to ensure proper rendering and interaction within Enigma.

## Roadmap

A key goal of this project is to eventually replace the `puzzle-data-schema.json` with the **IPUZ schema**. The IPUZ format is designed to standardize crossword puzzle data, allowing fetcher plugins to be used in any application that supports the IPUZ format. This transition will increase flexibility, making puzzle data portable and reusable across different platforms.

For more information on the IPUZ format, visit the [IPUZ Specification](https://www.puzzazz.com/ipuz).

