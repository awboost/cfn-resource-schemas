import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::FunctionDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html}
 */
export type GreengrassFunctionDefinitionProperties = {
  InitialVersion?: FunctionDefinitionVersion;
  Name: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Greengrass::FunctionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html#aws-resource-greengrass-functiondefinition-return-values}
 */
export type GreengrassFunctionDefinitionAttributes = {
  Arn: string;
  Id: string;
  LatestVersionArn: string;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.DefaultConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html}
 */
export type DefaultConfig = {
  Execution: Execution;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html}
 */
export type Environment = {
  AccessSysfs?: boolean;
  Execution?: Execution;
  ResourceAccessPolicies?: ResourceAccessPolicy[];
  Variables?: Record<string, any>;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.Execution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html}
 */
export type Execution = {
  IsolationMode?: string;
  RunAs?: RunAs;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html}
 */
export type Function = {
  FunctionArn: string;
  FunctionConfiguration: FunctionConfiguration;
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.FunctionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html}
 */
export type FunctionConfiguration = {
  EncodingType?: string;
  Environment?: Environment;
  ExecArgs?: string;
  Executable?: string;
  MemorySize?: number;
  Pinned?: boolean;
  Timeout?: number;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.FunctionDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html}
 */
export type FunctionDefinitionVersion = {
  DefaultConfig?: DefaultConfig;
  Functions: Function[];
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.ResourceAccessPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-resourceaccesspolicy.html}
 */
export type ResourceAccessPolicy = {
  Permission?: string;
  ResourceId: string;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinition.RunAs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-runas.html}
 */
export type RunAs = {
  Gid?: number;
  Uid?: number;
};
/**
 * Resource Type definition for AWS::Greengrass::FunctionDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html}
 */
export class GreengrassFunctionDefinition extends $Resource<
  "AWS::Greengrass::FunctionDefinition",
  GreengrassFunctionDefinitionProperties,
  GreengrassFunctionDefinitionAttributes
> {
  public static readonly Type = "AWS::Greengrass::FunctionDefinition";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "LatestVersionArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: GreengrassFunctionDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassFunctionDefinition.Type,
      properties,
      GreengrassFunctionDefinition.AttributeNames,
      options,
    );
  }
}
