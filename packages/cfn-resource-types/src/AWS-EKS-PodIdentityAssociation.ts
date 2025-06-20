import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EKS::PodIdentityAssociation`.
 * An object representing an Amazon EKS PodIdentityAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html}
 */
export type EKSPodIdentityAssociationProperties = {
  /**
   * The cluster that the pod identity association is created for.
   * @minLength `1`
   */
  ClusterName: string;
  /**
   * The Disable Session Tags of the pod identity association.
   */
  DisableSessionTags?: boolean;
  /**
   * The Kubernetes namespace that the pod identity association is created for.
   */
  Namespace: string;
  /**
   * The IAM role ARN that the pod identity association is created for.
   */
  RoleArn: string;
  /**
   * The Kubernetes service account that the pod identity association is created for.
   */
  ServiceAccount: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The Target Role Arn of the pod identity association.
   * @minLength `1`
   */
  TargetRoleArn?: string;
};
/**
 * Attribute type definition for `AWS::EKS::PodIdentityAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#aws-resource-eks-podidentityassociation-return-values}
 */
export type EKSPodIdentityAssociationAttributes = {
  /**
   * The ARN of the pod identity association.
   */
  AssociationArn: string;
  /**
   * The ID of the pod identity association.
   * @minLength `1`
   */
  AssociationId: string;
  /**
   * The External Id of the pod identity association.
   * @minLength `1`
   */
  ExternalId: string;
};
/**
 * Type definition for `AWS::EKS::PodIdentityAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-podidentityassociation-tag.html}
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
 * Resource type definition for `AWS::EKS::PodIdentityAssociation`.
 * An object representing an Amazon EKS PodIdentityAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html}
 */
export class EKSPodIdentityAssociation extends $Resource<
  "AWS::EKS::PodIdentityAssociation",
  EKSPodIdentityAssociationProperties,
  EKSPodIdentityAssociationAttributes
> {
  public static readonly Type = "AWS::EKS::PodIdentityAssociation";
  constructor(
    logicalId: string,
    properties: EKSPodIdentityAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSPodIdentityAssociation.Type, properties, options);
  }
}
