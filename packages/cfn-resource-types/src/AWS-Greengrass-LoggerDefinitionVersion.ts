import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::LoggerDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html}
 */
export type GreengrassLoggerDefinitionVersionProperties = {
  LoggerDefinitionId: string;
  Loggers: Logger[];
};
/**
 * Attribute type definition for `AWS::Greengrass::LoggerDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html#aws-resource-greengrass-loggerdefinitionversion-return-values}
 */
export type GreengrassLoggerDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::LoggerDefinitionVersion.Logger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html}
 */
export type Logger = {
  Component: string;
  Id: string;
  Level: string;
  Space?: number;
  Type: string;
};
/**
 * Resource Type definition for AWS::Greengrass::LoggerDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html}
 */
export class GreengrassLoggerDefinitionVersion extends $Resource<
  "AWS::Greengrass::LoggerDefinitionVersion",
  GreengrassLoggerDefinitionVersionProperties,
  GreengrassLoggerDefinitionVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::LoggerDefinitionVersion";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GreengrassLoggerDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassLoggerDefinitionVersion.Type,
      properties,
      GreengrassLoggerDefinitionVersion.AttributeNames,
      options,
    );
  }
}
