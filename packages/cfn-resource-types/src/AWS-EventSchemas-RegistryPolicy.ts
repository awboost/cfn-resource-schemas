import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EventSchemas::RegistryPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html}
 */
export type EventSchemasRegistryPolicyProperties = {
  Policy: Record<string, any>;
  RegistryName: string;
  RevisionId?: string;
};
/**
 * Attribute type definition for `AWS::EventSchemas::RegistryPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#aws-resource-eventschemas-registrypolicy-return-values}
 */
export type EventSchemasRegistryPolicyAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EventSchemas::RegistryPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html}
 */
export class EventSchemasRegistryPolicy extends $Resource<
  "AWS::EventSchemas::RegistryPolicy",
  EventSchemasRegistryPolicyProperties,
  EventSchemasRegistryPolicyAttributes
> {
  public static readonly Type = "AWS::EventSchemas::RegistryPolicy";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EventSchemasRegistryPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EventSchemasRegistryPolicy.Type,
      properties,
      EventSchemasRegistryPolicy.AttributeNames,
      options,
    );
  }
}
