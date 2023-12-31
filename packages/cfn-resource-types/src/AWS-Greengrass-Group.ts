import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html}
 */
export type GreengrassGroupProperties = {
  InitialVersion?: GroupVersion;
  Name: string;
  RoleArn?: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Greengrass::Group`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#aws-resource-greengrass-group-return-values}
 */
export type GreengrassGroupAttributes = {
  Arn: string;
  Id: string;
  LatestVersionArn: string;
  RoleAttachedAt: string;
};
/**
 * Type definition for `AWS::Greengrass::Group.GroupVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html}
 */
export type GroupVersion = {
  ConnectorDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  LoggerDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
};
/**
 * Resource Type definition for AWS::Greengrass::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html}
 */
export class GreengrassGroup extends $Resource<
  "AWS::Greengrass::Group",
  GreengrassGroupProperties,
  GreengrassGroupAttributes
> {
  public static readonly Type = "AWS::Greengrass::Group";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "LatestVersionArn" as const,
    "RoleAttachedAt" as const,
  ];
  constructor(
    logicalId: string,
    properties: GreengrassGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassGroup.Type,
      properties,
      GreengrassGroup.AttributeNames,
      options,
    );
  }
}
