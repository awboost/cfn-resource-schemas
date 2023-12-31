import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::EKS::Cluster`.
 * An object representing an Amazon EKS cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html}
 */
export type EKSClusterProperties = {
  EncryptionConfig?: EncryptionConfig[];
  /**
   * The Kubernetes network configuration for the cluster.
   */
  KubernetesNetworkConfig?: KubernetesNetworkConfig;
  /**
   * Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. By default, cluster control plane logs aren't exported to CloudWatch Logs.
   */
  Logging?: Logging;
  /**
   * The unique name to give to your cluster.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z][A-Za-z0-9\-_]*`
   */
  Name?: string;
  /**
   * An object representing the Outpost configuration to use for AWS EKS outpost cluster.
   */
  OutpostConfig?: OutpostConfig;
  /**
   * An object representing the VPC configuration to use for an Amazon EKS cluster.
   */
  ResourcesVpcConfig: ResourcesVpcConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
   */
  RoleArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.
   * @pattern `1\.\d\d`
   */
  Version?: string;
};
/**
 * Attribute type definition for `AWS::EKS::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#aws-resource-eks-cluster-return-values}
 */
export type EKSClusterAttributes = {
  /**
   * The ARN of the cluster, such as arn:aws:eks:us-west-2:666666666666:cluster/prod.
   */
  Arn: string;
  /**
   * The certificate-authority-data for your cluster.
   */
  CertificateAuthorityData: string;
  /**
   * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.
   */
  ClusterSecurityGroupId: string;
  /**
   * Amazon Resource Name (ARN) or alias of the customer master key (CMK).
   */
  EncryptionConfigKeyArn: string;
  /**
   * The endpoint for your Kubernetes API server, such as https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com.
   */
  Endpoint: string;
  /**
   * The unique ID given to your cluster.
   */
  Id: string;
  /**
   * The issuer URL for the cluster's OIDC identity provider, such as https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E. If you need to remove https:// from this output value, you can include the following code in your template.
   */
  OpenIdConnectIssuerUrl: string;
};
/**
 * Type definition for `AWS::EKS::Cluster.ClusterLogging`.
 * The cluster control plane logging configuration for your cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html}
 */
export type ClusterLogging = {
  /**
   * Enable control plane logs for your cluster, all log types will be disabled if the array is empty
   */
  EnabledTypes?: LoggingTypeConfig[];
};
/**
 * Type definition for `AWS::EKS::Cluster.ControlPlanePlacement`.
 * Specify the placement group of the control plane machines for your cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-controlplaneplacement.html}
 */
export type ControlPlanePlacement = {
  /**
   * Specify the placement group name of the control place machines for your cluster.
   */
  GroupName?: string;
};
/**
 * Type definition for `AWS::EKS::Cluster.EncryptionConfig`.
 * The encryption configuration for the cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html}
 */
export type EncryptionConfig = {
  /**
   * The encryption provider for the cluster.
   */
  Provider?: Provider;
  /**
   * Specifies the resources to be encrypted. The only supported value is "secrets".
   */
  Resources?: string[];
};
/**
 * Type definition for `AWS::EKS::Cluster.KubernetesNetworkConfig`.
 * The Kubernetes network configuration for the cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html}
 */
export type KubernetesNetworkConfig = {
  /**
   * Ipv4 or Ipv6. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on
   */
  IpFamily?: "ipv4" | "ipv6";
  /**
   * The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC.
   */
  ServiceIpv4Cidr?: string;
  /**
   * The CIDR block to assign Kubernetes service IP addresses from.
   */
  ServiceIpv6Cidr?: string;
};
/**
 * Type definition for `AWS::EKS::Cluster.Logging`.
 * Enable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs based on log types. By default, cluster control plane logs aren't exported to CloudWatch Logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html}
 */
export type Logging = {
  /**
   * The cluster control plane logging configuration for your cluster.
   */
  ClusterLogging?: ClusterLogging;
};
/**
 * Type definition for `AWS::EKS::Cluster.LoggingTypeConfig`.
 * Enabled Logging Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html}
 */
export type LoggingTypeConfig = {
  /**
   * name of the log type
   */
  Type?: "api" | "audit" | "authenticator" | "controllerManager" | "scheduler";
};
/**
 * Type definition for `AWS::EKS::Cluster.OutpostConfig`.
 * An object representing the Outpost configuration to use for AWS EKS outpost cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html}
 */
export type OutpostConfig = {
  /**
   * Specify the Instance type of the machines that should be used to create your cluster.
   */
  ControlPlaneInstanceType: string;
  /**
   * Specify the placement group of the control plane machines for your cluster.
   */
  ControlPlanePlacement?: ControlPlanePlacement;
  /**
   * Specify one or more Arn(s) of Outpost(s) on which you would like to create your cluster.
   */
  OutpostArns: string[];
};
/**
 * Type definition for `AWS::EKS::Cluster.Provider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-provider.html}
 */
export type Provider = {
  /**
   * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.
   */
  KeyArn?: string;
};
/**
 * Type definition for `AWS::EKS::Cluster.ResourcesVpcConfig`.
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html}
 */
export type ResourcesVpcConfig = {
  /**
   * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.
   */
  EndpointPrivateAccess?: boolean;
  /**
   * Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.
   */
  EndpointPublicAccess?: boolean;
  /**
   * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.
   */
  PublicAccessCidrs?: string[];
  /**
   * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
   */
  SecurityGroupIds?: string[];
  /**
   * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::EKS::Cluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EKS::Cluster`.
 * An object representing an Amazon EKS cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html}
 */
export class EKSCluster extends $Resource<
  "AWS::EKS::Cluster",
  EKSClusterProperties,
  EKSClusterAttributes
> {
  public static readonly Type = "AWS::EKS::Cluster";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CertificateAuthorityData" as const,
    "ClusterSecurityGroupId" as const,
    "EncryptionConfigKeyArn" as const,
    "Endpoint" as const,
    "Id" as const,
    "OpenIdConnectIssuerUrl" as const,
  ];
  constructor(
    logicalId: string,
    properties: EKSClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EKSCluster.Type,
      properties,
      EKSCluster.AttributeNames,
      options,
    );
  }
}
