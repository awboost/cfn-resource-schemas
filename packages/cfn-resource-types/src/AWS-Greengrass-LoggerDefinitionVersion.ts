import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: GreengrassLoggerDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassLoggerDefinitionVersion.Type,
      properties,
      options,
    );
  }
}
