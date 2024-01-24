import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Greengrass::FunctionDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html}
 */
export type GreengrassFunctionDefinitionVersionProperties = {
  DefaultConfig?: DefaultConfig;
  FunctionDefinitionId: string;
  Functions: Function[];
};
/**
 * Attribute type definition for `AWS::Greengrass::FunctionDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#aws-resource-greengrass-functiondefinitionversion-return-values}
 */
export type GreengrassFunctionDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.DefaultConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html}
 */
export type DefaultConfig = {
  Execution: Execution;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html}
 */
export type Environment = {
  AccessSysfs?: boolean;
  Execution?: Execution;
  ResourceAccessPolicies?: ResourceAccessPolicy[];
  Variables?: Record<string, any>;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.Execution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html}
 */
export type Execution = {
  IsolationMode?: string;
  RunAs?: RunAs;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html}
 */
export type Function = {
  FunctionArn: string;
  FunctionConfiguration: FunctionConfiguration;
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.FunctionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html}
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
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.ResourceAccessPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html}
 */
export type ResourceAccessPolicy = {
  Permission?: string;
  ResourceId: string;
};
/**
 * Type definition for `AWS::Greengrass::FunctionDefinitionVersion.RunAs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-runas.html}
 */
export type RunAs = {
  Gid?: number;
  Uid?: number;
};
/**
 * Resource Type definition for AWS::Greengrass::FunctionDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html}
 */
export class GreengrassFunctionDefinitionVersion extends $Resource<
  "AWS::Greengrass::FunctionDefinitionVersion",
  GreengrassFunctionDefinitionVersionProperties,
  GreengrassFunctionDefinitionVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::FunctionDefinitionVersion";
  constructor(
    logicalId: string,
    properties: GreengrassFunctionDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassFunctionDefinitionVersion.Type,
      properties,
      options,
    );
  }
}
