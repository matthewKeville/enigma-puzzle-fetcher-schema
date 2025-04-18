import Ajv from "ajv";
import fs from "node:fs";

const ajv = new Ajv();

const schemas = [

  ["schemas/error-schema.json"],
  ["schemas/puzzle-data-schema.json"],

  ["schemas/args/args-response-body-schema.json"],
  ["schemas/args/args-request-body-schema.json"],
  ["schemas/fetch/fetch-request-body-schema.json"],
  ["schemas/fetch/fetch-response-body-schema.json"],
  ["schemas/methods/methods-response-body-schema.json"],

  ["schemas/request-schema.json"],
  ["schemas/response-schema.json"],
]

schemas.forEach( sch => {
  var schemaJson = JSON.parse(fs.readFileSync(sch[0], 'utf8'));
  sch.push(schemaJson)
  //console.log(sch)
})

schemas.forEach( sch => {
  ajv.addSchema(sch[1],sch[1].$Id)
})

schemas.forEach( sch => {
  ajv.compile(sch[1])
})

// let s_pd = schemas[1]
// let f_rsb =  schemas[2]
// ajv.addSchema(s_pd[1],s_pd[0].$id)
// ajv.addSchema(f_rsb[1],f_rsb[0].$id)
// ajv.compile(f_rsb[1])
// ajv.compile(s_pd[1])

// var schemaJson = JSON.parse(fs.readFileSync("schemas/error-schema.json", 'utf7'));
// ajv.compile(schemaJson,schemaJson.$id)

// var schemaJson = JSON.parse(fs.readFileSync("schemas/fetch/fetch-response-body-schema.json", 'utf8'));
// ajv.addSchema(schemaJson,schemaJson.$id)
// ajv.compile(schemaJson,schemaJson.$id)

// Check that all schemas are valid json schema
// schemas.forEach( s => {
//       var schemaJson = JSON.parse(fs.readFileSync(s, 'utf8'));
//       ajv.addSchema(schemaJson,s)
// })
//
// ajv.compile(

// Check that all schemas are valid json schema
// schemas.forEach( s => {
//
//   test(`schema ${s} is valid JSON Schema`, () => {
//     expect( () => {
//       var schemaJson = JSON.parse(fs.readFileSync(s, 'utf8'));
//       ajv.compile(schemaJson)
//     }).not.toThrow()
//   })
//
//
//
// });
