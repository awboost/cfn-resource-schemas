import Ajv from "ajv";
import addFormats from "ajv-formats";
import { JSONSchema7 } from "json-schema";
import { ResourceTypeSchema } from "./types.js";

/**
 * JSON Schemas to validate the Resource Schema.
 * @see {@link https://github.com/aws-cloudformation/cloudformation-cli/blob/1b72946fdb256de80830ebe1a078356fd7f1ce97/src/rpdk/core/data/schema/base.definition.schema.v1.json}
 */
export const metaSchemas: JSONSchema7[] = [
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://schema.cloudformation.us-east-1.amazonaws.com/base.definition.schema.v1.json",
    title: "CloudFormation Provider Base Definition MetaSchema",
    description:
      "All the basic building blocks for the provider definition schemas are in this schema to maintain consistency among different provider definition schemas. Provider definition schemas could refer to this schema for using basic things like properties, definitions etc.",
    definitions: {
      httpsUrl: {
        type: "string",
        pattern:
          "^https://[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])(:[0-9]*)*([?/#].*)?$",
        maxLength: 4096,
      },
      jsonPointerArray: {
        type: "array",
        minItems: 1,
        items: {
          type: "string",
          format: "json-pointer",
        },
      },
      schemaArray: {
        type: "array",
        minItems: 1,
        items: {
          $ref: "#/definitions/properties",
        },
      },
      validations: {
        dependencies: {
          enum: {
            $comment:
              "Enforce that properties are strongly typed when enum, or const is specified.",
            required: ["type"],
          },
          const: {
            required: ["type"],
          },
          properties: {
            $comment:
              "An object cannot have both defined and undefined properties; therefore, patternProperties is not allowed when properties is specified.",
            not: {
              required: ["patternProperties"],
            },
          },
        },
      },
      properties: {
        allOf: [
          {
            $ref: "#/definitions/validations",
          },
          {
            $comment:
              "The following subset of draft-07 property references is supported for resource definitions. Nested properties are disallowed and should be specified as a $ref to a definitions block.",
            type: "object",
            properties: {
              insertionOrder: {
                description:
                  "When set to true, this flag indicates that the order of insertion of the array will be honored, and that changing the order of the array would indicate a diff",
                type: "boolean",
                default: true,
              },
              arrayType: {
                description:
                  "When set to AttributeList, it indicates that the array is of nested type objects, and when set to Standard it indicates that the array consists of primitive types",
                type: "string",
                default: "Standard",
                enum: ["Standard", "AttributeList"],
              },
              $ref: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/$ref",
              },
              $comment: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
              },
              title: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/title",
              },
              description: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/description",
              },
              examples: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/examples",
              },
              default: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/default",
              },
              multipleOf: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/multipleOf",
              },
              maximum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maximum",
              },
              exclusiveMaximum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/exclusiveMaximum",
              },
              minimum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minimum",
              },
              exclusiveMinimum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/exclusiveMinimum",
              },
              maxLength: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maxLength",
              },
              minLength: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minLength",
              },
              pattern: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/pattern",
              },
              items: {
                $comment:
                  "Redefined as just a schema. A list of schemas is not allowed",
                $ref: "#/definitions/properties",
                default: {},
              },
              maxItems: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maxItems",
              },
              minItems: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minItems",
              },
              uniqueItems: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/uniqueItems",
              },
              contains: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/contains",
              },
              maxProperties: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maxProperties",
              },
              minProperties: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minProperties",
              },
              required: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/required",
              },
              properties: {
                type: "object",
                patternProperties: {
                  "^[A-Za-z0-9]{1,64}$": {
                    $ref: "#/definitions/properties",
                  },
                },
                additionalProperties: false,
                minProperties: 1,
              },
              additionalProperties: {
                $comment:
                  "All properties of a resource must be expressed in the schema - arbitrary inputs are not allowed",
                type: "boolean",
                const: false,
              },
              patternProperties: {
                $comment:
                  "patternProperties allow providers to introduce a specification for key-value pairs, or Map inputs.",
                type: "object",
                propertyNames: {
                  format: "regex",
                },
              },
              dependencies: {
                $comment: "Redefined to capture our properties override.",
                type: "object",
                additionalProperties: {
                  anyOf: [
                    {
                      $ref: "#/definitions/properties",
                    },
                    {
                      $ref: "http://json-schema.org/draft-07/schema#/definitions/stringArray",
                    },
                  ],
                },
              },
              const: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/const",
              },
              enum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/enum",
              },
              type: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/type",
              },
              format: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/format",
              },
              allOf: {
                $ref: "#/definitions/schemaArray",
              },
              anyOf: {
                $ref: "#/definitions/schemaArray",
              },
              oneOf: {
                $ref: "#/definitions/schemaArray",
              },
            },
            additionalProperties: false,
          },
        ],
      },
    },
    type: "object",
    patternProperties: {
      "^\\$id$": {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$id",
      },
    },
    properties: {
      $schema: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$schema",
      },
      typeName: {
        $comment: "Resource Type Identifier",
        examples: [
          "Organization::Service::Resource",
          "AWS::EC2::Instance",
          "Initech::TPS::Report",
        ],
        type: "string",
        pattern: "^[a-zA-Z0-9]{2,64}::[a-zA-Z0-9]{2,64}::[a-zA-Z0-9]{2,64}$",
      },
      $comment: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
      },
      title: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/title",
      },
      description: {
        $comment:
          "A short description of the resource provider. This will be shown in the AWS CloudFormation console.",
        $ref: "http://json-schema.org/draft-07/schema#/properties/description",
      },
      sourceUrl: {
        $comment:
          "The location of the source code for this resource provider, to help interested parties submit issues or improvements.",
        examples: [
          "https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-s3",
        ],
        $ref: "#/definitions/httpsUrl",
      },
      documentationUrl: {
        $comment:
          "A page with supplemental documentation. The property documentation in schemas should be able to stand alone, but this is an opportunity for e.g. rich examples or more guided documents.",
        examples: [
          "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/CHAP_Using.html",
        ],
        $ref: "#/definitions/httpsUrl",
      },
      additionalProperties: {
        $comment:
          "All properties of a resource must be expressed in the schema - arbitrary inputs are not allowed",
        type: "boolean",
        const: false,
      },
      properties: {
        type: "object",
        patternProperties: {
          "^[A-Za-z0-9]{1,64}$": {
            $ref: "#/definitions/properties",
          },
        },
        additionalProperties: false,
        minProperties: 1,
      },
      definitions: {
        type: "object",
        patternProperties: {
          "^[A-Za-z0-9]{1,64}$": {
            $ref: "#/definitions/properties",
          },
        },
        additionalProperties: false,
      },
      propertyTransform: {
        type: "object",
        patternProperties: {
          "^[A-Za-z0-9]{1,64}$": {
            type: "string",
          },
        },
      },
      remote: {
        description:
          "Reserved for CloudFormation use. A namespace to inline remote schemas.",
        type: "object",
        patternProperties: {
          "^schema[0-9]+$": {
            description:
              "Reserved for CloudFormation use. A inlined remote schema.",
            type: "object",
            properties: {
              $comment: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
              },
              properties: {
                $ref: "#/properties/properties",
              },
              definitions: {
                $ref: "#/properties/definitions",
              },
            },
            additionalProperties: true,
          },
        },
        additionalProperties: false,
      },
      deprecatedProperties: {
        description:
          "A list of JSON pointers to properties that have been deprecated by the underlying service provider. These properties are still accepted in create & update operations, however they may be ignored, or converted to a consistent model on application. Deprecated properties are not guaranteed to be present in read paths.",
        $ref: "#/definitions/jsonPointerArray",
      },
      required: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/required",
      },
    },
  },
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://schema.cloudformation.us-east-1.amazonaws.com/provider.configuration.definition.schema.hooks.v1.json",
    title: "CloudFormation Hook Provider Configuration Definition MetaSchema",
    description:
      "This schema validates a CloudFormation hook provider configuration definition.",
    type: "object",
    properties: {
      additionalProperties: {
        $comment:
          "All properties must be expressed in the schema - arbitrary inputs are not allowed",
        type: "boolean",
        const: false,
      },
      deprecatedProperties: {
        $ref: "base.definition.schema.v1.json#/properties/deprecatedProperties",
      },
      allOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      anyOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      oneOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      required: {
        $ref: "base.definition.schema.v1.json#/properties/required",
      },
      description: {
        $comment:
          "A short description of the hook configuration. This will be shown in the AWS CloudFormation console.",
        $ref: "base.definition.schema.v1.json#/properties/description",
      },
      properties: {
        type: "object",
        patternProperties: {
          "(?!CloudFormation)^[A-Za-z0-9]{1,64}$": {
            $comment:
              "TypeConfiguration properties starting with `CloudFormation` are reserved for CloudFormation use",
            $ref: "base.definition.schema.v1.json#/definitions/properties",
          },
        },
        minProperties: 0,
        additionalProperties: false,
      },
    },
    required: ["properties", "additionalProperties"],
    additionalProperties: false,
  },
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://schema.cloudformation.us-east-1.amazonaws.com/provider.configuration.definition.schema.v1.json",
    title: "CloudFormation Type Provider Configuration Definition MetaSchema",
    description:
      "This schema validates a CloudFormation type provider configuration definition.",
    type: "object",
    properties: {
      additionalProperties: {
        $comment:
          "All properties must be expressed in the schema - arbitrary inputs are not allowed",
        type: "boolean",
        const: false,
      },
      deprecatedProperties: {
        $ref: "base.definition.schema.v1.json#/properties/deprecatedProperties",
      },
      allOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      anyOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      oneOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      required: {
        $ref: "base.definition.schema.v1.json#/properties/required",
      },
      description: {
        $comment:
          "A short description of the type configuration. This will be shown in the AWS CloudFormation console.",
        $ref: "base.definition.schema.v1.json#/properties/description",
      },
      properties: {
        type: "object",
        patternProperties: {
          "(?!CloudFormation)^[A-Za-z0-9]{1,64}$": {
            $comment:
              "TypeConfiguration properties starting with `CloudFormation` are reserved for CloudFormation use",
            $ref: "base.definition.schema.v1.json#/definitions/properties",
          },
        },
        minProperties: 1,
        additionalProperties: false,
      },
    },
    required: ["properties", "additionalProperties"],
    additionalProperties: false,
  },
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://schema.cloudformation.us-east-1.amazonaws.com/provider.definition.schema.hooks.v1.json",
    title: "CloudFormation Hook Provider Definition MetaSchema",
    description:
      "This schema validates a CloudFormation hook provider definition.",
    definitions: {
      handlerDefinition: {
        description:
          "Defines any execution operations which can be performed on this hook provider",
        type: "object",
        properties: {
          targetNames: {
            type: "array",
            items: {
              type: "string",
            },
            additionalItems: false,
          },
          permissions: {
            type: "array",
            items: {
              type: "string",
            },
            additionalItems: false,
          },
        },
        additionalProperties: false,
        required: ["targetNames", "permissions"],
      },
    },
    type: "object",
    patternProperties: {
      "^\\$id$": {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$id",
      },
    },
    properties: {
      $schema: {
        $ref: "base.definition.schema.v1.json#/properties/$schema",
      },
      type: {
        $comment: "Hook Type",
        type: "string",
        const: "HOOK",
      },
      typeName: {
        $comment: "Hook Type Identifier",
        examples: [
          "Organization::Service::Hook",
          "AWS::EC2::Hook",
          "Initech::TPS::Hook",
        ],
        $ref: "base.definition.schema.v1.json#/properties/typeName",
      },
      $comment: {
        $ref: "base.definition.schema.v1.json#/properties/$comment",
      },
      title: {
        $ref: "base.definition.schema.v1.json#/properties/title",
      },
      description: {
        $comment:
          "A short description of the hook provider. This will be shown in the AWS CloudFormation console.",
        $ref: "base.definition.schema.v1.json#/properties/description",
      },
      sourceUrl: {
        $comment:
          "The location of the source code for this hook provider, to help interested parties submit issues or improvements.",
        examples: [
          "https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-s3",
        ],
        $ref: "base.definition.schema.v1.json#/properties/sourceUrl",
      },
      documentationUrl: {
        $comment:
          "A page with supplemental documentation. The property documentation in schemas should be able to stand alone, but this is an opportunity for e.g. rich examples or more guided documents.",
        examples: [
          "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/CHAP_Using.html",
        ],
        $ref: "base.definition.schema.v1.json#/definitions/httpsUrl",
      },
      additionalProperties: {
        $comment:
          "All properties of a hook must be expressed in the schema - arbitrary inputs are not allowed",
        $ref: "base.definition.schema.v1.json#/properties/additionalProperties",
      },
      definitions: {
        $ref: "base.definition.schema.v1.json#/properties/definitions",
      },
      handlers: {
        description:
          "Defines the provisioning operations which can be performed on this hook type",
        type: "object",
        properties: {
          preCreate: {
            $ref: "#/definitions/handlerDefinition",
          },
          preUpdate: {
            $ref: "#/definitions/handlerDefinition",
          },
          preDelete: {
            $ref: "#/definitions/handlerDefinition",
          },
        },
        additionalProperties: false,
      },
      remote: {
        description:
          "Reserved for CloudFormation use. A namespace to inline remote schemas.",
        $ref: "base.definition.schema.v1.json#/properties/remote",
      },
      deprecatedProperties: {
        description:
          "A list of JSON pointers to properties that have been deprecated by the underlying service provider. These properties are still accepted in create & update operations, however they may be ignored, or converted to a consistent model on application. Deprecated properties are not guaranteed to be present in read paths.",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      required: {
        $ref: "base.definition.schema.v1.json#/properties/required",
      },
      allOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      anyOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      oneOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      typeConfiguration: {
        description:
          "TypeConfiguration to set the configuration data for registry types. This configuration data is not passed through the hook properties in template. One of the possible use cases is configuring auth keys for 3P hook providers.",
        $ref: "provider.configuration.definition.schema.hooks.v1.json",
      },
    },
    required: [
      "typeName",
      "typeConfiguration",
      "description",
      "additionalProperties",
    ],
    additionalProperties: false,
  },
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://schema.cloudformation.us-east-1.amazonaws.com/module.definition.schema.v1.json",
    title: "CloudFormation Module Provider Definition MetaSchema",
    description:
      "This schema validates a CloudFormation module provider definition.",
    definitions: {
      httpsUrl: {
        type: "string",
        pattern:
          "^https://[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])(:[0-9]*)*([?/#].*)?$",
        maxLength: 4096,
      },
      handlerDefinition: {
        description:
          "Defines any execution operations which can be performed on this module provider",
        type: "object",
        properties: {
          permissions: {
            type: "array",
            items: {
              type: "string",
            },
            additionalItems: false,
          },
          timeoutInMinutes: {
            description:
              "Defines the timeout for the entire operation to be interpreted by the invoker of the handler.  The default is 120 (2 hours).",
            type: "integer",
            minimum: 2,
            maximum: 720,
            default: 120,
          },
        },
        additionalProperties: false,
        required: ["permissions"],
      },
      jsonPointerArray: {
        type: "array",
        minItems: 1,
        items: {
          type: "string",
          format: "json-pointer",
        },
      },
      schemaArray: {
        type: "array",
        minItems: 1,
        items: {
          $ref: "#/definitions/properties",
        },
      },
      validations: {
        dependencies: {
          enum: {
            $comment:
              "Enforce that properties are strongly typed when enum, or const is specified.",
            required: ["type"],
          },
          const: {
            required: ["type"],
          },
          properties: {
            $comment:
              "An object cannot have both defined and undefined properties; therefore, patternProperties is not allowed when properties is specified.",
            not: {
              required: ["patternProperties"],
            },
          },
        },
      },
      replacementStrategy: {
        type: "string",
        description:
          "The valid replacement strategies are [create_then_delete] and [delete_then_create]. All other inputs are invalid.",
        default: ["create_then_delete"],
        enum: ["create_then_delete", "delete_then_create"],
      },
      properties: {
        allOf: [
          {
            $ref: "#/definitions/validations",
          },
          {
            $comment:
              "The following subset of draft-07 property references is supported for module definitions. Nested properties are disallowed and should be specified as a $ref to a definitions block.",
            type: "object",
            properties: {
              insertionOrder: {
                description:
                  "When set to true, this flag indicates that the order of insertion of the array will be honored, and that changing the order of the array would indicate a diff",
                type: "boolean",
                default: true,
              },
              arrayType: {
                description:
                  "When set to AttributeList, it indicates that the array is of nested type objects, and when set to Standard it indicates that the array consists of primitive types",
                type: "string",
                default: "Standard",
                enum: ["Standard", "AttributeList"],
              },
              $ref: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/$ref",
              },
              $comment: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
              },
              title: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/title",
              },
              description: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/description",
              },
              examples: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/examples",
              },
              default: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/default",
              },
              multipleOf: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/multipleOf",
              },
              maximum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maximum",
              },
              exclusiveMaximum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/exclusiveMaximum",
              },
              minimum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minimum",
              },
              exclusiveMinimum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/exclusiveMinimum",
              },
              maxLength: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maxLength",
              },
              minLength: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minLength",
              },
              pattern: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/pattern",
              },
              items: {
                $comment:
                  "Redefined as just a schema. A list of schemas is not allowed",
                $ref: "#/definitions/properties",
                default: {},
              },
              maxItems: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maxItems",
              },
              minItems: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minItems",
              },
              uniqueItems: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/uniqueItems",
              },
              contains: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/contains",
              },
              maxProperties: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/maxProperties",
              },
              minProperties: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/minProperties",
              },
              required: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/required",
              },
              properties: {
                type: "object",
                patternProperties: {
                  "^[A-Za-z0-9]{1,64}$": {
                    $ref: "#/definitions/properties",
                  },
                },
                additionalProperties: false,
                minProperties: 1,
              },
              additionalProperties: {
                $comment:
                  "All properties of a resource must be expressed in the schema - arbitrary inputs are not allowed",
                type: "boolean",
              },
              patternProperties: {
                $comment:
                  "patternProperties allow providers to introduce a specification for key-value pairs, or Map inputs.",
                type: "object",
                propertyNames: {
                  format: "regex",
                },
              },
              dependencies: {
                $comment: "Redefined to capture our properties override.",
                type: "object",
                additionalProperties: {
                  anyOf: [
                    {
                      $ref: "#/definitions/properties",
                    },
                    {
                      $ref: "http://json-schema.org/draft-07/schema#/definitions/stringArray",
                    },
                  ],
                },
              },
              const: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/const",
              },
              enum: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/enum",
              },
              type: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/type",
              },
              format: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/format",
              },
              allOf: {
                $ref: "#/definitions/schemaArray",
              },
              anyOf: {
                $ref: "#/definitions/schemaArray",
              },
              oneOf: {
                $ref: "#/definitions/schemaArray",
              },
              Resources: {
                description: "List of all the resources that module creates.",
                type: "object",
              },
              Parameters: {
                description: "List of input parameters",
                type: "object",
              },
            },
            additionalProperties: false,
          },
        ],
      },
      moduleLink: {
        type: "object",
        properties: {
          $comment: {
            $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
          },
          templateUri: {
            type: "string",
            pattern: "^(/|https:)",
          },
          mappings: {
            type: "object",
            patternProperties: {
              "^[A-Za-z0-9]{1,64}$": {
                type: "string",
                format: "json-pointer",
              },
            },
            additionalProperties: false,
          },
        },
        required: ["templateUri", "mappings"],
        additionalProperties: false,
      },
    },
    type: "object",
    patternProperties: {
      "^\\$id$": {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$id",
      },
    },
    properties: {
      $schema: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$schema",
      },
      type: {
        $comment: "Type",
        type: "string",
        const: "MODULE",
      },
      typeName: {
        $comment: "Module Type Identifier",
        examples: [
          "Organization::Service::XYZ::MODULE",
          "AWS::S3::SecureBucket::MODULE",
        ],
        type: "string",
        pattern:
          "^[a-zA-Z0-9]{2,64}::[a-zA-Z0-9]{2,64}::[a-zA-Z0-9]{2,64}::MODULE$",
      },
      $comment: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
      },
      title: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/title",
      },
      description: {
        $comment:
          "A short description of the module provider. This will be shown in the AWS CloudFormation console.",
        $ref: "http://json-schema.org/draft-07/schema#/properties/description",
      },
      sourceUrl: {
        $comment:
          "The location of the source code for this module provider, to help interested parties submit issues or improvements.",
        examples: [
          "https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-s3",
        ],
        $ref: "#/definitions/httpsUrl",
      },
      documentationUrl: {
        $comment:
          "A page with supplemental documentation. The property documentation in schemas should be able to stand alone, but this is an opportunity for e.g. rich examples or more guided documents.",
        examples: [
          "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/CHAP_Using.html",
        ],
        $ref: "#/definitions/httpsUrl",
      },
      additionalProperties: {
        $comment: "Does schema allow additional properties for a some types",
        type: "boolean",
      },
      properties: {
        type: "object",
        patternProperties: {
          "^[A-Za-z0-9]{1,64}$": {
            $ref: "#/definitions/properties",
          },
        },
        additionalProperties: true,
        minProperties: 1,
        required: ["Resources"],
      },
      definitions: {
        type: "object",
        patternProperties: {
          "^[A-Za-z0-9]{1,64}$": {
            $ref: "#/definitions/properties",
          },
        },
        additionalProperties: false,
      },
      handlers: {
        description:
          "Defines the provisioning operations which can be performed on this type",
        type: "object",
        properties: {
          resolve: {
            $ref: "#/definitions/handlerDefinition",
          },
        },
        additionalProperties: false,
      },
      remote: {
        description:
          "Reserved for CloudFormation use. A namespace to inline remote schemas.",
        type: "object",
        patternProperties: {
          "^schema[0-9]+$": {
            description:
              "Reserved for CloudFormation use. A inlined remote schema.",
            type: "object",
            properties: {
              $comment: {
                $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
              },
              properties: {
                $ref: "#/properties/properties",
              },
              definitions: {
                $ref: "#/properties/definitions",
              },
            },
            additionalProperties: true,
          },
        },
        additionalProperties: false,
      },
      replacementStrategy: {
        $comment: "The order of replacement for an immutable module update.",
        $ref: "#/definitions/replacementStrategy",
      },
      required: {
        $ref: "http://json-schema.org/draft-07/schema#/properties/required",
      },
      allOf: {
        $ref: "#/definitions/schemaArray",
      },
      anyOf: {
        $ref: "#/definitions/schemaArray",
      },
      oneOf: {
        $ref: "#/definitions/schemaArray",
      },
      moduleLink: {
        description:
          "A template-able link to a resource instance. AWS-internal service links must be relative to the AWS console domain. External service links must be absolute, HTTPS URIs.",
        $ref: "#/definitions/moduleLink",
      },
    },
    required: ["typeName", "properties", "description", "additionalProperties"],
    additionalProperties: false,
  },
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://schema.cloudformation.us-east-1.amazonaws.com/provider.definition.schema.v1.json",
    title: "CloudFormation Resource Provider Definition MetaSchema",
    description:
      "This schema validates a CloudFormation resource provider definition.",
    definitions: {
      handlerSchema: {
        type: "object",
        properties: {
          properties: {
            $ref: "base.definition.schema.v1.json#/properties/properties",
          },
          required: {
            $ref: "base.definition.schema.v1.json#/properties/required",
          },
          allOf: {
            $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
          },
          anyOf: {
            $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
          },
          oneOf: {
            $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
          },
        },
        required: ["properties"],
        additionalProperties: false,
      },
      handlerDefinitionWithSchemaOverride: {
        description:
          "Defines any execution operations which can be performed on this resource provider",
        type: "object",
        properties: {
          handlerSchema: {
            $ref: "#/definitions/handlerSchema",
          },
          permissions: {
            type: "array",
            items: {
              type: "string",
            },
            additionalItems: false,
          },
          timeoutInMinutes: {
            description:
              "Defines the timeout for the entire operation to be interpreted by the invoker of the handler.  The default is 120 (2 hours).",
            type: "integer",
            minimum: 2,
            maximum: 2160,
            default: 120,
          },
        },
        additionalProperties: false,
        required: ["permissions"],
      },
      handlerDefinition: {
        description:
          "Defines any execution operations which can be performed on this resource provider",
        type: "object",
        properties: {
          permissions: {
            type: "array",
            items: {
              type: "string",
            },
            additionalItems: false,
          },
          timeoutInMinutes: {
            description:
              "Defines the timeout for the entire operation to be interpreted by the invoker of the handler.  The default is 120 (2 hours).",
            type: "integer",
            minimum: 2,
            maximum: 2160,
            default: 120,
          },
        },
        additionalProperties: false,
        required: ["permissions"],
      },
      replacementStrategy: {
        type: "string",
        description:
          "The valid replacement strategies are [create_then_delete] and [delete_then_create]. All other inputs are invalid.",
        default: "create_then_delete",
        enum: ["create_then_delete", "delete_then_create"],
      },
      resourceLink: {
        type: "object",
        properties: {
          $comment: {
            $ref: "http://json-schema.org/draft-07/schema#/properties/$comment",
          },
          templateUri: {
            type: "string",
            pattern: "^(/|https:)",
          },
          mappings: {
            type: "object",
            patternProperties: {
              "^[A-Za-z0-9]{1,64}$": {
                type: "string",
                format: "json-pointer",
              },
            },
            additionalProperties: false,
          },
        },
        required: ["templateUri", "mappings"],
        additionalProperties: false,
      },
    },
    type: "object",
    patternProperties: {
      "^\\$id$": {
        $ref: "http://json-schema.org/draft-07/schema#/properties/$id",
      },
    },
    properties: {
      $schema: {
        $ref: "base.definition.schema.v1.json#/properties/$schema",
      },
      type: {
        $comment: "Resource Type",
        type: "string",
        const: "RESOURCE",
      },
      typeName: {
        $comment: "Resource Type Identifier",
        examples: [
          "Organization::Service::Resource",
          "AWS::EC2::Instance",
          "Initech::TPS::Report",
        ],
        $ref: "base.definition.schema.v1.json#/properties/typeName",
      },
      $comment: {
        $ref: "base.definition.schema.v1.json#/properties/$comment",
      },
      title: {
        $ref: "base.definition.schema.v1.json#/properties/title",
      },
      description: {
        $comment:
          "A short description of the resource provider. This will be shown in the AWS CloudFormation console.",
        $ref: "base.definition.schema.v1.json#/properties/description",
      },
      sourceUrl: {
        $comment:
          "The location of the source code for this resource provider, to help interested parties submit issues or improvements.",
        examples: [
          "https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-s3",
        ],
        $ref: "base.definition.schema.v1.json#/properties/sourceUrl",
      },
      documentationUrl: {
        $comment:
          "A page with supplemental documentation. The property documentation in schemas should be able to stand alone, but this is an opportunity for e.g. rich examples or more guided documents.",
        examples: [
          "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/CHAP_Using.html",
        ],
        $ref: "base.definition.schema.v1.json#/definitions/httpsUrl",
      },
      taggable: {
        description:
          "(Deprecated, please use new metadata attribute tagging) A boolean flag indicating whether this resource type supports tagging.",
        type: "boolean",
        default: true,
      },
      tagging: {
        type: "object",
        properties: {
          taggable: {
            description:
              "A boolean flag indicating whether this resource type supports tagging.",
            type: "boolean",
            default: true,
          },
          tagOnCreate: {
            description:
              "A boolean flag indicating whether this resource type supports tagging resources upon creation.",
            type: "boolean",
            default: true,
          },
          tagUpdatable: {
            description:
              "A boolean flag indicating whether this resource type supports updatable tagging.",
            type: "boolean",
            default: true,
          },
          cloudFormationSystemTags: {
            description:
              "A boolean flag indicating whether this resource type supports CloudFormation system tags.",
            type: "boolean",
            default: true,
          },
          tagProperty: {
            description: "A reference to the Tags property in the schema.",
            $ref: "http://json-schema.org/draft-07/schema#/properties/$ref",
            default: "/properties/Tags",
          },
          permissions: {
            type: "array",
            items: {
              type: "string",
            },
            additionalItems: false,
          },
        },
        required: ["taggable"],
        additionalProperties: false,
      },
      replacementStrategy: {
        $comment: "The order of replacement for an immutable resource update.",
        $ref: "#/definitions/replacementStrategy",
      },
      additionalProperties: {
        $comment:
          "All properties of a resource must be expressed in the schema - arbitrary inputs are not allowed",
        $ref: "base.definition.schema.v1.json#/properties/additionalProperties",
      },
      properties: {
        $ref: "base.definition.schema.v1.json#/properties/properties",
      },
      definitions: {
        $ref: "base.definition.schema.v1.json#/properties/definitions",
      },
      handlers: {
        description:
          "Defines the provisioning operations which can be performed on this resource type",
        type: "object",
        properties: {
          create: {
            $ref: "#/definitions/handlerDefinition",
          },
          read: {
            $ref: "#/definitions/handlerDefinition",
          },
          update: {
            $ref: "#/definitions/handlerDefinition",
          },
          delete: {
            $ref: "#/definitions/handlerDefinition",
          },
          list: {
            $ref: "#/definitions/handlerDefinitionWithSchemaOverride",
          },
        },
        additionalProperties: false,
      },
      remote: {
        description:
          "Reserved for CloudFormation use. A namespace to inline remote schemas.",
        $ref: "base.definition.schema.v1.json#/properties/remote",
      },
      readOnlyProperties: {
        description:
          "A list of JSON pointers to properties that are able to be found in a Read request but unable to be specified by the customer",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      writeOnlyProperties: {
        description:
          "A list of JSON pointers to properties (typically sensitive) that are able to be specified by the customer but unable to be returned in a Read request",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      conditionalCreateOnlyProperties: {
        description:
          "A list of JSON pointers for properties that can only be updated under certain conditions. For example, you can upgrade the engine version of an RDS DBInstance but you cannot downgrade it.  When updating this property for a resource in a CloudFormation stack, the resource will be replaced if it cannot be updated.",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      nonPublicProperties: {
        description:
          "A list of JSON pointers for properties that are hidden. These properties will still be used but will not be visible",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      nonPublicDefinitions: {
        description:
          "A list of JSON pointers for definitions that are hidden. These definitions will still be used but will not be visible",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      createOnlyProperties: {
        description:
          "A list of JSON pointers to properties that are only able to be specified by the customer when creating a resource. Conversely, any property *not* in this list can be applied to an Update request.",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      deprecatedProperties: {
        description:
          "A list of JSON pointers to properties that have been deprecated by the underlying service provider. These properties are still accepted in create & update operations, however they may be ignored, or converted to a consistent model on application. Deprecated properties are not guaranteed to be present in read paths.",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      primaryIdentifier: {
        description:
          "A required identifier which uniquely identifies an instance of this resource type. An identifier is a non-zero-length list of JSON pointers to properties that form a single key. An identifier can be a single or multiple properties to support composite-key identifiers.",
        $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
      },
      additionalIdentifiers: {
        description:
          "An optional list of supplementary identifiers, each of which uniquely identifies an instance of this resource type. An identifier is a non-zero-length list of JSON pointers to properties that form a single key. An identifier can be a single or multiple properties to support composite-key identifiers.",
        type: "array",
        minItems: 1,
        items: {
          $ref: "base.definition.schema.v1.json#/definitions/jsonPointerArray",
        },
      },
      required: {
        $ref: "base.definition.schema.v1.json#/properties/required",
      },
      allOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      anyOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      oneOf: {
        $ref: "base.definition.schema.v1.json#/definitions/schemaArray",
      },
      resourceLink: {
        description:
          "A template-able link to a resource instance. AWS-internal service links must be relative to the AWS console domain. External service links must be absolute, HTTPS URIs.",
        $ref: "#/definitions/resourceLink",
      },
      propertyTransform: {
        description:
          "A map which allows resource owners to define a function for a property with possible transformation. This property helps ensure the input to the model is equal to output",
        type: "object",
        patternProperties: {
          "^[A-Za-z0-9]{1,64}$": {
            type: "string",
          },
        },
      },
      typeConfiguration: {
        description:
          "TypeConfiguration to set the configuration data for registry types. This configuration data is not passed through the resource properties in template. One of the possible use cases is configuring auth keys for 3P resource providers.",
        $ref: "provider.configuration.definition.schema.v1.json",
      },
    },
    required: [
      "typeName",
      "properties",
      "description",
      "primaryIdentifier",
      "additionalProperties",
    ],
    additionalProperties: false,
  },
];

export const validateResourceTypeSchema = addFormats
  .default(
    new Ajv.default({
      schemas: metaSchemas.slice(1),
    }),
  )
  .compile<ResourceTypeSchema>(metaSchemas[0]);
