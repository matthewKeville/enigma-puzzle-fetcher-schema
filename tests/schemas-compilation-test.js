import Ajv from "ajv";
import fs from "node:fs";
import jest from 'jest';

const ajv = new Ajv();

// Ajv doesn't support OpenAI keywords (i'm using discriminator')

// CHATGPT
// Define custom discriminator keyword
ajv.addKeyword('discriminator', {
  validate: function (schema, data) {
    if (schema && data) {
      const discriminatorField = data[schema.propertyName];
      const mappedSchema = schema.mapping[discriminatorField];
      if (mappedSchema) {
        // Perform custom validation against the mapped schema
        // Add logic here to check the body against the schema
      } else {
        return false; // Invalid discriminator value
      }
    }
    return true;
  }
});
// UNCHATGPT


const schemas = [

  ["schemas/error-schema.json"],
  ["schemas/puzzle-data-schema.json"],

  ["schemas/info/info-response-body-schema.json"],

  ["schemas/fetch/fetch-request-body-schema.json"],
  ["schemas/fetch/fetch-response-body-schema.json"],

  ["schemas/methods/method-schema.json"],
  ["schemas/methods/methods-response-body-schema.json"],

  ["schemas/request-schema.json"],
  ["schemas/response-schema.json"],
]

  schemas.forEach( sch => {
    test(`${sch} parses`, () => {
      var schemaJson = JSON.parse(fs.readFileSync(sch[0], 'utf8'));
      sch.push(schemaJson)
    })
  })


schemas.forEach( sch => {
  test(`${sch} added`, () => {
    ajv.addSchema(sch[1],sch[1].$Id)
  })
})

schemas.forEach( sch => {
  test(`${sch} compiles`, () => {
    ajv.compile(sch[1])
  })
})

