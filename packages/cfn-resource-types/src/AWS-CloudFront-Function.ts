import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::Function
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export type CloudFrontFunctionProperties = {
  AutoPublish?: boolean;
  FunctionCode: string;
  FunctionConfig: FunctionConfig;
  Name: string;
};
/**
 * Attribute type definition for `AWS::CloudFront::Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#aws-resource-cloudfront-function-return-values}
 */
export type CloudFrontFunctionAttributes = {
  FunctionARN: string;
  FunctionMetadata: {
    FunctionARN: string;
  };
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
 * Resource Type definition for AWS::CloudFront::Function
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export class CloudFrontFunction extends $Resource<
  "AWS::CloudFront::Function",
  CloudFrontFunctionProperties,
  CloudFrontFunctionAttributes
> {
  public static readonly Type = "AWS::CloudFront::Function";
  constructor(
    logicalId: string,
    properties: CloudFrontFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontFunction.Type, properties, options);
  }
}
