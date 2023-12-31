import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::S3::MultiRegionAccessPointPolicy`.
 * The policy to be attached to a Multi Region Access Point
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html}
 */
export type S3MultiRegionAccessPointPolicyProperties = {
  /**
   * The name of the Multi Region Access Point to apply policy
   * @minLength `3`
   * @maxLength `50`
   * @pattern `^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$`
   */
  MrapName: string;
  /**
   * Policy document to apply to a Multi Region Access Point
   */
  Policy: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::S3::MultiRegionAccessPointPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#aws-resource-s3-multiregionaccesspointpolicy-return-values}
 */
export type S3MultiRegionAccessPointPolicyAttributes = {
  /**
   * The Policy Status associated with this Multi Region Access Point
   */
  PolicyStatus: {
    /**
     * Specifies whether the policy is public or not.
     */
    IsPublic: "true" | "false";
  };
};
/**
 * Resource type definition for `AWS::S3::MultiRegionAccessPointPolicy`.
 * The policy to be attached to a Multi Region Access Point
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html}
 */
export class S3MultiRegionAccessPointPolicy extends $Resource<
  "AWS::S3::MultiRegionAccessPointPolicy",
  S3MultiRegionAccessPointPolicyProperties,
  S3MultiRegionAccessPointPolicyAttributes
> {
  public static readonly Type = "AWS::S3::MultiRegionAccessPointPolicy";
  constructor(
    logicalId: string,
    properties: S3MultiRegionAccessPointPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3MultiRegionAccessPointPolicy.Type, properties, options);
  }
}
