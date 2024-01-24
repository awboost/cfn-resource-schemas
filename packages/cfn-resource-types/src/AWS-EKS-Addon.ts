import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::EKS::Addon
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html}
 */
export type EKSAddonProperties = {
  /**
   * Name of Addon
   * @minLength `1`
   */
  AddonName: string;
  /**
   * Version of Addon
   * @minLength `1`
   */
  AddonVersion?: string;
  /**
   * Name of Cluster
   * @minLength `1`
   */
  ClusterName: string;
  /**
   * The configuration values to use with the add-on
   * @minLength `1`
   */
  ConfigurationValues?: string;
  /**
   * PreserveOnDelete parameter value
   */
  PreserveOnDelete?: boolean;
  /**
   * Resolve parameter value conflicts
   * @minLength `1`
   */
  ResolveConflicts?: "NONE" | "OVERWRITE" | "PRESERVE";
  /**
   * IAM role to bind to the add-on's service account
   * @minLength `1`
   */
  ServiceAccountRoleArn?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EKS::Addon`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#aws-resource-eks-addon-return-values}
 */
export type EKSAddonAttributes = {
  /**
   * Amazon Resource Name (ARN) of the add-on
   */
  Arn: string;
};
/**
 * Type definition for `AWS::EKS::Addon.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-addon-tag.html}
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
 * Resource Schema for AWS::EKS::Addon
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html}
 */
export class EKSAddon extends $Resource<
  "AWS::EKS::Addon",
  EKSAddonProperties,
  EKSAddonAttributes
> {
  public static readonly Type = "AWS::EKS::Addon";
  constructor(
    logicalId: string,
    properties: EKSAddonProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSAddon.Type, properties, options);
  }
}
