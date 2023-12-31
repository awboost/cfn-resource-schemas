import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GreengrassCoreDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassCoreDefinitionVersion.Type,
      properties,
      GreengrassCoreDefinitionVersion.AttributeNames,
      options,
    );
  }
}
