import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: EventSchemasRegistryPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventSchemasRegistryPolicy.Type, properties, options);
  }
}
