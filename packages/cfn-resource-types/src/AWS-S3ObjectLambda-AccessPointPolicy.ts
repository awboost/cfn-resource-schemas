import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon S3ObjectLambda policy type that you can use to control permissions for your S3ObjectLambda
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html}
 */
export type S3ObjectLambdaAccessPointPolicyProperties = {
  /**
   * The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.
   * @minLength `3`
   * @maxLength `45`
   * @pattern `^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$`
   */
  ObjectLambdaAccessPoint: string;
  /**
   * A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide.
   */
  PolicyDocument: Record<string, any>;
};
/**
 * AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon S3ObjectLambda policy type that you can use to control permissions for your S3ObjectLambda
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html}
 */
export class S3ObjectLambdaAccessPointPolicy extends $Resource<
  "AWS::S3ObjectLambda::AccessPointPolicy",
  S3ObjectLambdaAccessPointPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3ObjectLambda::AccessPointPolicy";
  constructor(
    logicalId: string,
    properties: S3ObjectLambdaAccessPointPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3ObjectLambdaAccessPointPolicy.Type, properties, options);
  }
}
