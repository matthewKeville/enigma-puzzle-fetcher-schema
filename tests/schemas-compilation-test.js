import Ajv from "ajv";
import fs from "node:fs";

const ajv = new Ajv();

const schemas = [

  ["schemas/error-schema.json"],
  ["schemas/puzzle-data-schema.json"],

  ["schemas/fetch/fetch-request-body-schema.json"],
  ["schemas/fetch/fetch-response-body-schema.json"],

  ["schemas/methods/method-schema.json"],
  ["schemas/methods/methods-response-body-schema.json"],
  ["schemas/methods/methods-request-body-schema.json"],

  ["schemas/request-schema.json"],
  ["schemas/response-schema.json"],
]

schemas.forEach( sch => {
  var schemaJson = JSON.parse(fs.readFileSync(sch[0], 'utf8'));
  sch.push(schemaJson)
})

schemas.forEach( sch => {
  ajv.addSchema(sch[1],sch[1].$Id)
})

schemas.forEach( sch => {
  ajv.compile(sch[1])
})

