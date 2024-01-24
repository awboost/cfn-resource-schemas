import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: GreengrassGroupVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GreengrassGroupVersion.Type, properties, options);
  }
}
