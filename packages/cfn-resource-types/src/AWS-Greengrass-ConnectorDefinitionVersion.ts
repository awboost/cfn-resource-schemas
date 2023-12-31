import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html}
 */
export type GreengrassConnectorDefinitionVersionProperties = {
  ConnectorDefinitionId: string;
  Connectors: Connector[];
};
/**
 * Attribute type definition for `AWS::Greengrass::ConnectorDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html#aws-resource-greengrass-connectordefinitionversion-return-values}
 */
export type GreengrassConnectorDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::ConnectorDefinitionVersion.Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html}
 */
export type Connector = {
  ConnectorArn: string;
  Id: string;
  Parameters?: Record<string, any>;
};
/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html}
 */
export class GreengrassConnectorDefinitionVersion extends $Resource<
  "AWS::Greengrass::ConnectorDefinitionVersion",
  GreengrassConnectorDefinitionVersionProperties,
  GreengrassConnectorDefinitionVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::ConnectorDefinitionVersion";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GreengrassConnectorDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassConnectorDefinitionVersion.Type,
      properties,
      GreengrassConnectorDefinitionVersion.AttributeNames,
      options,
    );
  }
}
