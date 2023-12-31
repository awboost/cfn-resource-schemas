import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudFront::Function
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export type CloudFrontFunctionProperties = {
  AutoPublish?: boolean;
  FunctionCode: string;
  FunctionConfig: FunctionConfig;
  FunctionMetadata?: FunctionMetadata;
  Name: string;
};
/**
 * Attribute type definition for `AWS::CloudFront::Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#aws-resource-cloudfront-function-return-values}
 */
export type CloudFrontFunctionAttributes = {
  FunctionARN: string;
  Stage: string;
};
/**
 * Type definition for `AWS::CloudFront::Function.FunctionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionconfig.html}
 */
export type FunctionConfig = {
  Comment: string;
  Runtime: string;
};
/**
 * Type definition for `AWS::CloudFront::Function.FunctionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionmetadata.html}
 */
export type FunctionMetadata = {
  FunctionARN?: string;
};
/**
 * Resource Type definition for AWS::CloudFront::Function
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export class CloudFrontFunction extends $Resource<
  "AWS::CloudFront::Function",
  CloudFrontFunctionProperties,
  CloudFrontFunctionAttributes
> {
  public static readonly Type = "AWS::CloudFront::Function";
  public static readonly AttributeNames = [
    "FunctionARN" as const,
    "Stage" as const,
  ];
  constructor(
    logicalId: string,
    properties: CloudFrontFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontFunction.Type,
      properties,
      CloudFrontFunction.AttributeNames,
      options,
    );
  }
}
