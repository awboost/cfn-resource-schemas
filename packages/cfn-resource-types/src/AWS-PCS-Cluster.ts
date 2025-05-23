import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::PCS::Cluster resource creates an AWS PCS cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html}
 */
export type PCSClusterProperties = {
  /**
   * The name that identifies the cluster.
   */
  Name?: string;
  /**
   * The networking configuration for the cluster's control plane.
   */
  Networking: {
    /**
     * The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
     */
    SecurityGroupIds?: string[];
    /**
     * The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.
     */
    SubnetIds?: string[];
  };
  /**
   * The cluster management and job scheduling software associated with the cluster.
   */
  Scheduler: {
    /**
     * The software AWS PCS uses to manage cluster scaling and job scheduling.
     */
    Type: "SLURM";
    /**
     * The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.
     */
    Version: string;
  };
  /**
   * The size of the cluster.
   */
  Size: "SMALL" | "MEDIUM" | "LARGE";
  /**
   * Additional options related to the Slurm scheduler.
   */
  SlurmConfiguration?: {
    /**
     * The accounting configuration includes configurable settings for Slurm accounting.
     */
    Accounting?: Accounting;
    /**
     * The shared Slurm key for authentication, also known as the cluster secret.
     */
    AuthKey?: AuthKey;
    /**
     * The time before an idle node is scaled down.
     * @min `1`
     */
    ScaleDownIdleTimeInSeconds?: number;
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    SlurmCustomSettings?: SlurmCustomSetting[];
  };
  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::PCS::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#aws-resource-pcs-cluster-return-values}
 */
export type PCSClusterAttributes = {
  /**
   * The unique Amazon Resource Name (ARN) of the cluster.
   */
  Arn: string;
  /**
   * The list of endpoints available for interaction with the scheduler.
   */
  Endpoints: {
    /**
     * The endpoint's connection port number.
     */
    Port: string;
    /**
     * The endpoint's private IP address.
     */
    PrivateIpAddress: string;
    /**
     * The endpoint's public IP address.
     */
    PublicIpAddress: string;
    /**
     * Indicates the type of endpoint running at the specific IP address.
     */
    Type: "SLURMCTLD" | "SLURMDBD";
  }[];
  /**
   * The list of errors that occurred during cluster provisioning.
   */
  ErrorInfo: {
    /**
     * The short-form error code.
     */
    Code: string;
    /**
     * The detailed error information.
     */
    Message: string;
  }[];
  /**
   * The generated unique ID of the cluster.
   * @pattern `^(pcs_[a-zA-Z0-9]+|[A-Za-z][A-Za-z0-9-]{1,40})$`
   */
  Id: string;
  /**
   * The provisioning status of the cluster. The provisioning status doesn't indicate the overall health of the cluster.
   */
  Status:
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "CREATE_FAILED"
    | "DELETE_FAILED"
    | "UPDATE_FAILED";
};
/**
 * Type definition for `AWS::PCS::Cluster.Accounting`.
 * The accounting configuration includes configurable settings for Slurm accounting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-cluster-accounting.html}
 */
export type Accounting = {
  /**
   * The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.
   * @min `-1`
   * @max `10000`
   */
  DefaultPurgeTimeInDays?: number;
  /**
   * The default value is `STANDARD`. A value of `STANDARD` means that Slurm accounting is enabled.
   */
  Mode: "STANDARD" | "NONE";
};
/**
 * Type definition for `AWS::PCS::Cluster.AuthKey`.
 * The shared Slurm key for authentication, also known as the cluster secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-cluster-authkey.html}
 */
export type AuthKey = {
  /**
   * The Amazon Resource Name (ARN) of the the shared Slurm key.
   */
  SecretArn: string;
  /**
   * The version of the shared Slurm key.
   */
  SecretVersion: string;
};
/**
 * Type definition for `AWS::PCS::Cluster.Endpoint`.
 * An endpoint available for interaction with the scheduler.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-cluster-endpoint.html}
 */
export type Endpoint = {
  /**
   * The endpoint's connection port number.
   */
  Port: string;
  /**
   * The endpoint's private IP address.
   */
  PrivateIpAddress: string;
  /**
   * The endpoint's public IP address.
   */
  PublicIpAddress?: string;
  /**
   * Indicates the type of endpoint running at the specific IP address.
   */
  Type: "SLURMCTLD" | "SLURMDBD";
};
/**
 * Type definition for `AWS::PCS::Cluster.ErrorInfo`.
 * An error that occurred during resource provisioning.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-cluster-errorinfo.html}
 */
export type ErrorInfo = {
  /**
   * The short-form error code.
   */
  Code?: string;
  /**
   * The detailed error information.
   */
  Message?: string;
};
/**
 * Type definition for `AWS::PCS::Cluster.SlurmCustomSetting`.
 * Additional settings that directly map to Slurm settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-cluster-slurmcustomsetting.html}
 */
export type SlurmCustomSetting = {
  /**
   * AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.
   */
  ParameterName: string;
  /**
   * The value for the configured Slurm setting.
   */
  ParameterValue: string;
};
/**
 * AWS::PCS::Cluster resource creates an AWS PCS cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html}
 */
export class PCSCluster extends $Resource<
  "AWS::PCS::Cluster",
  PCSClusterProperties,
  PCSClusterAttributes
> {
  public static readonly Type = "AWS::PCS::Cluster";
  constructor(
    logicalId: string,
    properties: PCSClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PCSCluster.Type, properties, options);
  }
}
