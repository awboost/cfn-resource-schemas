import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Greengrass::CoreDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html}
 */
export type GreengrassCoreDefinitionVersionProperties = {
  CoreDefinitionId: string;
  Cores: Core[];
};
/**
 * Attribute type definition for `AWS::Greengrass::CoreDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html#aws-resource-greengrass-coredefinitionversion-return-values}
 */
export type GreengrassCoreDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::CoreDefinitionVersion.Core`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html}
 */
export type Core = {
  CertificateArn: string;
  Id: string;
  SyncShadow?: boolean;
  ThingArn: string;
};
/**
 * Resource Type definition for AWS::Greengrass::CoreDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html}
 */
export class GreengrassCoreDefinitionVersion extends $Resource<
  "AWS::Greengrass::CoreDefinitionVersion",
  GreengrassCoreDefinitionVersionProperties,
  GreengrassCoreDefinitionVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::CoreDefinitionVersion";
  constructor(
    logicalId: string,
    properties: GreengrassCoreDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GreengrassCoreDefinitionVersion.Type, properties, options);
  }
}
