import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EKS::Capability`.
 * Resource Type definition for EKS Capability.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-capability.html}
 */
export type EKSCapabilityProperties = {
  /**
   * A unique name for the capability. The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.
   * @minLength `1`
   * @maxLength `100`
   */
  CapabilityName: string;
  /**
   * The name of the EKS cluster where you want to create the capability.
   * @minLength `1`
   * @maxLength `100`
   */
  ClusterName: string;
  /**
   * The configuration settings for the capability. The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.
   */
  Configuration?: CapabilityConfiguration;
  /**
   * Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.
   */
  DeletePropagationPolicy: "RETAIN";
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.
   * @pattern `^arn:aws[a-z-]*:iam::[0-9]+:role/[a-zA-Z0-9+=,.@_-]+$`
   */
  RoleArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The type of capability to create. Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).
   */
  Type: "ARGOCD" | "ACK" | "KRO";
};
/**
 * Attribute type definition for `AWS::EKS::Capability`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-capability.html#aws-resource-eks-capability-return-values}
 */
export type EKSCapabilityAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the capability.
   */
  Arn: string;
  /**
   * The configuration settings for the capability. The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.
   */
  Configuration: {
    /**
     * Configuration settings for an Argo CD capability. This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.
     */
    ArgoCd: {
      /**
       * Configuration for integrating Argo CD with IAM Identity Center. This allows you to use your organization's identity provider for authentication to Argo CD.
       */
      AwsIdc: {
        /**
         * The ARN of the managed application created in IAM Identity Center for this Argo CD capability. This application is automatically created and managed by EKS.
         */
        IdcManagedApplicationArn: string;
      };
      /**
       * The URL of the Argo CD server. Use this URL to access the Argo CD web interface and API.
       */
      ServerUrl: string;
    };
  };
  /**
   * The Unix epoch timestamp in seconds for when the capability was created.
   */
  CreatedAt: string;
  /**
   * The Unix epoch timestamp in seconds for when the capability was last modified.
   */
  ModifiedAt: string;
  /**
   * The current status of the capability. Valid values include: CREATING (the capability is being created), ACTIVE (the capability is running and available), UPDATING (the capability is being updated), DELETING (the capability is being deleted), CREATE_FAILED (the capability creation failed), UPDATE_FAILED (the capability update failed), or DELETE_FAILED (the capability deletion failed).
   */
  Status: string;
  /**
   * The version of the capability software that is currently running.
   */
  Version: string;
};
/**
 * Type definition for `AWS::EKS::Capability.ArgoCd`.
 * Configuration settings for an Argo CD capability. This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-argocd.html}
 */
export type ArgoCd = {
  /**
   * Configuration for integrating Argo CD with IAM Identity Center. This allows you to use your organization's identity provider for authentication to Argo CD.
   */
  AwsIdc: AwsIdc;
  /**
   * The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.
   */
  Namespace?: string;
  /**
   * Configuration for network access to the Argo CD capability's managed API server endpoint. By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.
   */
  NetworkAccess?: NetworkAccess;
  /**
   * A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles. Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.
   */
  RbacRoleMappings?: ArgoCdRoleMapping[];
};
/**
 * Type definition for `AWS::EKS::Capability.ArgoCdRoleMapping`.
 * A mapping between an Argo CD role and IAM Identity Center identities. This defines which users or groups have specific permissions in Argo CD.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-argocdrolemapping.html}
 */
export type ArgoCdRoleMapping = {
  /**
   * A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role.
   */
  Identities: SsoIdentity[];
  /**
   * The Argo CD role to assign. Valid values are: ADMIN (full administrative access to Argo CD), EDITOR (edit access to Argo CD resources), or VIEWER (read-only access to Argo CD resources).
   */
  Role: "ADMIN" | "EDITOR" | "VIEWER";
};
/**
 * Type definition for `AWS::EKS::Capability.AwsIdc`.
 * Configuration for integrating Argo CD with IAM Identity Center. This allows you to use your organization's identity provider for authentication to Argo CD.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-awsidc.html}
 */
export type AwsIdc = {
  /**
   * The ARN of the IAM Identity Center instance to use for authentication.
   */
  IdcInstanceArn: string;
  /**
   * The Region where your IAM Identity Center instance is located.
   */
  IdcRegion?: string;
};
/**
 * Type definition for `AWS::EKS::Capability.CapabilityConfiguration`.
 * Configuration settings for a capability. The structure of this object varies depending on the capability type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-capabilityconfiguration.html}
 */
export type CapabilityConfiguration = {
  /**
   * Configuration settings for an Argo CD capability. This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.
   */
  ArgoCd?: ArgoCd;
};
/**
 * Type definition for `AWS::EKS::Capability.NetworkAccess`.
 * Configuration for network access to the Argo CD capability's managed API server endpoint. By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-networkaccess.html}
 */
export type NetworkAccess = {
  /**
   * A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.
   */
  VpceIds?: string[];
};
/**
 * Type definition for `AWS::EKS::Capability.SsoIdentity`.
 * An IAM Identity Center identity (user or group) that can be assigned permissions in a capability.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-ssoidentity.html}
 */
export type SsoIdentity = {
  /**
   * The unique identifier of the IAM Identity Center user or group.
   */
  Id: string;
  /**
   * The type of identity. Valid values are SSO_USER or SSO_GROUP.
   */
  Type: "SSO_USER" | "SSO_GROUP";
};
/**
 * Type definition for `AWS::EKS::Capability.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-capability-tag.html}
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
 * Resource type definition for `AWS::EKS::Capability`.
 * Resource Type definition for EKS Capability.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-capability.html}
 */
export class EKSCapability extends $Resource<
  "AWS::EKS::Capability",
  EKSCapabilityProperties,
  EKSCapabilityAttributes
> {
  public static readonly Type = "AWS::EKS::Capability";
  constructor(
    logicalId: string,
    properties: EKSCapabilityProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSCapability.Type, properties, options);
  }
}
