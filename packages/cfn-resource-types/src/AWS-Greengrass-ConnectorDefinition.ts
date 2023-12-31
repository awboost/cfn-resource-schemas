import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html}
 */
export type GreengrassConnectorDefinitionProperties = {
  InitialVersion?: ConnectorDefinitionVersion;
  Name: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Greengrass::ConnectorDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#aws-resource-greengrass-connectordefinition-return-values}
 */
export type GreengrassConnectorDefinitionAttributes = {
  Arn: string;
  Id: string;
  LatestVersionArn: string;
};
/**
 * Type definition for `AWS::Greengrass::ConnectorDefinition.Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html}
 */
export type Connector = {
  ConnectorArn: string;
  Id: string;
  Parameters?: Record<string, any>;
};
/**
 * Type definition for `AWS::Greengrass::ConnectorDefinition.ConnectorDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html}
 */
export type ConnectorDefinitionVersion = {
  Connectors: Connector[];
};
/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html}
 */
export class GreengrassConnectorDefinition extends $Resource<
  "AWS::Greengrass::ConnectorDefinition",
  GreengrassConnectorDefinitionProperties,
  GreengrassConnectorDefinitionAttributes
> {
  public static readonly Type = "AWS::Greengrass::ConnectorDefinition";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "LatestVersionArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: GreengrassConnectorDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassConnectorDefinition.Type,
      properties,
      GreengrassConnectorDefinition.AttributeNames,
      options,
    );
  }
}
