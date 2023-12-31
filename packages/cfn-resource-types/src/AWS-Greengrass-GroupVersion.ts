import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::GroupVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html}
 */
export type GreengrassGroupVersionProperties = {
  ConnectorDefinitionVersionArn?: string;
  CoreDefinitionVersionArn?: string;
  DeviceDefinitionVersionArn?: string;
  FunctionDefinitionVersionArn?: string;
  GroupId: string;
  LoggerDefinitionVersionArn?: string;
  ResourceDefinitionVersionArn?: string;
  SubscriptionDefinitionVersionArn?: string;
};
/**
 * Attribute type definition for `AWS::Greengrass::GroupVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#aws-resource-greengrass-groupversion-return-values}
 */
export type GreengrassGroupVersionAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Greengrass::GroupVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html}
 */
export class GreengrassGroupVersion extends $Resource<
  "AWS::Greengrass::GroupVersion",
  GreengrassGroupVersionProperties,
  GreengrassGroupVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::GroupVersion";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GreengrassGroupVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassGroupVersion.Type,
      properties,
      GreengrassGroupVersion.AttributeNames,
      options,
    );
  }
}
