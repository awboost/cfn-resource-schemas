import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::CoreDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html}
 */
export type GreengrassCoreDefinitionProperties = {
  InitialVersion?: CoreDefinitionVersion;
  Name: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Greengrass::CoreDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#aws-resource-greengrass-coredefinition-return-values}
 */
export type GreengrassCoreDefinitionAttributes = {
  Arn: string;
  Id: string;
  LatestVersionArn: string;
};
/**
 * Type definition for `AWS::Greengrass::CoreDefinition.Core`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html}
 */
export type Core = {
  CertificateArn: string;
  Id: string;
  SyncShadow?: boolean;
  ThingArn: string;
};
/**
 * Type definition for `AWS::Greengrass::CoreDefinition.CoreDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-coredefinitionversion.html}
 */
export type CoreDefinitionVersion = {
  Cores: Core[];
};
/**
 * Resource Type definition for AWS::Greengrass::CoreDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html}
 */
export class GreengrassCoreDefinition extends $Resource<
  "AWS::Greengrass::CoreDefinition",
  GreengrassCoreDefinitionProperties,
  GreengrassCoreDefinitionAttributes
> {
  public static readonly Type = "AWS::Greengrass::CoreDefinition";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "LatestVersionArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: GreengrassCoreDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassCoreDefinition.Type,
      properties,
      GreengrassCoreDefinition.AttributeNames,
      options,
    );
  }
}
