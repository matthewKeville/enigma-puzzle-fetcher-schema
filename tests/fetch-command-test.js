import Ajv from "ajv";
import fs from "node:fs";

const ajv = new Ajv();
const fetchCommandSchema = JSON.parse(fs.readFileSync('schemas/fetch-command-schema.json', 'utf8'));

test('fetch-command : empty json is invalid', () => {
  const emptyJson = {}
  const isDataValid = ajv.validate(fetchCommandSchema, emptyJson);
  expect(isDataValid).toBe(false);
});

test('fetch-command : no fetchType is invalid', () => {
  const emptyJson = {
    "args": [ "abcde" ]
  }
  const isDataValid = ajv.validate(fetchCommandSchema, emptyJson);
  expect(isDataValid).toBe(false);
});

test('fetch-command : no args is valid', () => {
  const emptyJson = {
    "fetchType" : "date"
  }
  const isDataValid = ajv.validate(fetchCommandSchema, emptyJson);
  expect(isDataValid).toBe(true);
});

test('fetch-command : empty arg list is valid', () => {
  const emptyJson = {
    "fetchType" : "date",
    "args" : []
  }
  const isDataValid = ajv.validate(fetchCommandSchema, emptyJson);
  expect(isDataValid).toBe(true);
});

// This tests one case of this possibility, I should look more into
// this testing framework to automate the other cases
test('fetch-command : non array args fails', () => {
  const emptyJson = {
    "fetchType" : "date",
    "args" : {}
  }
  const isDataValid = ajv.validate(fetchCommandSchema, emptyJson);
  expect(isDataValid).toBe(false);
});
