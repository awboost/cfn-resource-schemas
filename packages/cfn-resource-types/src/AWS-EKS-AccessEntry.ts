import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EKS::AccessEntry`.
 * An object representing an Amazon EKS AccessEntry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html}
 */
export type EKSAccessEntryProperties = {
  /**
   * An array of access policies that are associated with the access entry.
   * @maxLength `20`
   */
  AccessPolicies?: AccessPolicy[];
  /**
   * The cluster that the access entry is created for.
   * @minLength `1`
   */
  ClusterName: string;
  /**
   * The Kubernetes groups that the access entry is associated with.
   */
  KubernetesGroups?: string[];
  /**
   * The principal ARN that the access entry is created for.
   * @minLength `1`
   */
  PrincipalArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The node type to associate with the access entry.
   */
  Type?: string;
  /**
   * The Kubernetes user that the access entry is associated with.
   */
  Username?: string;
};
/**
 * Attribute type definition for `AWS::EKS::AccessEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#aws-resource-eks-accessentry-return-values}
 */
export type EKSAccessEntryAttributes = {
  /**
   * The ARN of the access entry.
   */
  AccessEntryArn: string;
};
/**
 * Type definition for `AWS::EKS::AccessEntry.AccessPolicy`.
 * An access policy to associate with the current access entry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accesspolicy.html}
 */
export type AccessPolicy = {
  /**
   * The access scope of the access policy.
   */
  AccessScope: AccessScope;
  /**
   * The ARN of the access policy to add to the access entry.
   */
  PolicyArn: string;
};
/**
 * Type definition for `AWS::EKS::AccessEntry.AccessScope`.
 * The access scope of the access policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accessscope.html}
 */
export type AccessScope = {
  /**
   * The namespaces to associate with the access scope. Only specify if Type is set to 'namespace'.
   */
  Namespaces?: string[];
  /**
   * The type of the access scope.
   */
  Type: "namespace" | "cluster";
};
/**
 * Type definition for `AWS::EKS::AccessEntry.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EKS::AccessEntry`.
 * An object representing an Amazon EKS AccessEntry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html}
 */
export class EKSAccessEntry extends $Resource<
  "AWS::EKS::AccessEntry",
  EKSAccessEntryProperties,
  EKSAccessEntryAttributes
> {
  public static readonly Type = "AWS::EKS::AccessEntry";
  constructor(
    logicalId: string,
    properties: EKSAccessEntryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSAccessEntry.Type, properties, options);
  }
}
