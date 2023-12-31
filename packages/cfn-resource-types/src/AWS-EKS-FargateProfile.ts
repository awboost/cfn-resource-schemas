import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::EKS::FargateProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html}
 */
export type EKSFargateProfileProperties = {
  /**
   * Name of the Cluster
   * @minLength `1`
   */
  ClusterName: string;
  /**
   * Name of FargateProfile
   * @minLength `1`
   */
  FargateProfileName?: string;
  /**
   * The IAM policy arn for pods
   * @minLength `1`
   */
  PodExecutionRoleArn: string;
  /**
   * @minLength `1`
   */
  Selectors: Selector[];
  Subnets?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EKS::FargateProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#aws-resource-eks-fargateprofile-return-values}
 */
export type EKSFargateProfileAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::EKS::FargateProfile.Label`.
 * A key-value pair to associate with a pod.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-label.html}
 */
export type Label = {
  /**
   * The key name of the label.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the label.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Type definition for `AWS::EKS::FargateProfile.Selector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-selector.html}
 */
export type Selector = {
  Labels?: Label[];
  /**
   * @minLength `1`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::EKS::FargateProfile.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource Schema for AWS::EKS::FargateProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html}
 */
export class EKSFargateProfile extends $Resource<
  "AWS::EKS::FargateProfile",
  EKSFargateProfileProperties,
  EKSFargateProfileAttributes
> {
  public static readonly Type = "AWS::EKS::FargateProfile";
  constructor(
    logicalId: string,
    properties: EKSFargateProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSFargateProfile.Type, properties, options);
  }
}
