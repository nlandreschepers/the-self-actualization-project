export const JSON_QUESTIONNAIRE_SCHEMA = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://www.the-self-actualization-project.com/schemas/json-questionnaire-schema.json",
  "title": "JSON Questionnaire Schema",
  "description": "A JSON Questionnaire Schema",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the JSON Questionnaire",
      "minLength": 1
    },
    "items": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "cardinality": {
            "type": "string"
          },
          "promptTitle": {
            "type": "string",
            "minLength": 1
          },
          "promptItemLines": {
            "type": "array",
            "minItems": 1
          },
          "options": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uuid"
                },
                "text": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "text"
              ]
            },
            "minItems": 2
          },
          "feedbackLines": {
            "type": "array",
            "minItems": 1
          }
        },
        "required": [
          "id",
          "cardinality",
          "promptTitle",
          "promptItemLines",
          "options"
        ]
      }
    }
  }
};