import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeBuild::Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html}
 */
export type CodeBuildFleetProperties = {
  /**
   * @min `1`
   */
  BaseCapacity?: number;
  ComputeType?:
    | "BUILD_GENERAL1_SMALL"
    | "BUILD_GENERAL1_MEDIUM"
    | "BUILD_GENERAL1_LARGE"
    | "BUILD_GENERAL1_2XLARGE";
  EnvironmentType?:
    | "WINDOWS_SERVER_2019_CONTAINER"
    | "WINDOWS_SERVER_2022_CONTAINER"
    | "LINUX_CONTAINER"
    | "LINUX_GPU_CONTAINER"
    | "ARM_CONTAINER";
  /**
   * @minLength `2`
   * @maxLength `128`
   */
  Name?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeBuild::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#aws-resource-codebuild-fleet-return-values}
 */
export type CodeBuildFleetAttributes = {
  /**
   * @minLength `1`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `[a-zA-Z+-=._:/]+$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::CodeBuild::Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html}
 */
export class CodeBuildFleet extends $Resource<
  "AWS::CodeBuild::Fleet",
  CodeBuildFleetProperties,
  CodeBuildFleetAttributes
> {
  public static readonly Type = "AWS::CodeBuild::Fleet";
  constructor(
    logicalId: string,
    properties: CodeBuildFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeBuildFleet.Type, properties, options);
  }
}
