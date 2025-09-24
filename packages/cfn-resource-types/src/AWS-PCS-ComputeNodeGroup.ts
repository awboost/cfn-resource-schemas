import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::PCS::ComputeNodeGroup resource creates an AWS PCS compute node group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-computenodegroup.html}
 */
export type PCSComputeNodeGroupProperties = {
  /**
   * The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. If not provided, AWS PCS uses the AMI ID specified in the custom launch template.
   * @pattern `^ami-[a-z0-9]+$`
   */
  AmiId?: string;
  /**
   * The ID of the cluster of the compute node group.
   */
  ClusterId: string;
  /**
   * An Amazon EC2 launch template AWS PCS uses to launch compute nodes.
   */
  CustomLaunchTemplate: {
    /**
     * The ID of the EC2 launch template to use to provision instances.
     */
    TemplateId?: string;
    /**
     * The version of the EC2 launch template to use to provision instances.
     */
    Version: string;
  };
  /**
   * The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.
   * @pattern `^arn:aws([a-zA-Z-]{0,10})?:iam::[0-9]{12}:instance-profile/.{1,128}$`
   */
  IamInstanceProfileArn: string;
  /**
   * A list of EC2 instance configurations that AWS PCS can provision in the compute node group.
   */
  InstanceConfigs: InstanceConfig[];
  /**
   * The name that identifies the compute node group.
   */
  Name?: string;
  /**
   * Specifies how EC2 instances are purchased on your behalf. AWS PCS supports On-Demand, Spot and Capacity Block instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
   */
  PurchaseOption?: "ONDEMAND" | "SPOT" | "CAPACITY_BLOCK";
  /**
   * Specifies the boundaries of the compute node group auto scaling.
   */
  ScalingConfiguration: {
    /**
     * The upper bound of the number of instances allowed in the compute fleet.
     * @min `0`
     */
    MaxInstanceCount: number;
    /**
     * The lower bound of the number of instances allowed in the compute fleet.
     * @min `0`
     */
    MinInstanceCount: number;
  };
  /**
   * Additional options related to the Slurm scheduler.
   */
  SlurmConfiguration?: {
    /**
     * Additional Slurm-specific configuration that directly maps to Slurm settings.
     */
    SlurmCustomSettings?: SlurmCustomSetting[];
  };
  /**
   * Additional configuration when you specify SPOT as the purchase option.
   */
  SpotOptions?: {
    /**
     * The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances. AWS PCS supports lowest price, capacity optimized, and price capacity optimized. If you don't provide this option, it defaults to price capacity optimized.
     */
    AllocationStrategy?:
      | "lowest-price"
      | "capacity-optimized"
      | "price-capacity-optimized";
  };
  /**
   * The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.
   */
  SubnetIds: string[];
  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::PCS::ComputeNodeGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-computenodegroup.html#aws-resource-pcs-computenodegroup-return-values}
 */
export type PCSComputeNodeGroupAttributes = {
  /**
   * The unique Amazon Resource Name (ARN) of the compute node group.
   */
  Arn: string;
  /**
   * The list of errors that occurred during compute node group provisioning.
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
   * The generated unique ID of the compute node group.
   */
  Id: string;
  /**
   * The provisioning status of the compute node group. The provisioning status doesn't indicate the overall health of the compute node group.
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
 * Type definition for `AWS::PCS::ComputeNodeGroup.ErrorInfo`.
 * An error that occurred during resource provisioning.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-computenodegroup-errorinfo.html}
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
 * Type definition for `AWS::PCS::ComputeNodeGroup.InstanceConfig`.
 * An EC2 instance configuration AWS PCS uses to launch compute nodes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-computenodegroup-instanceconfig.html}
 */
export type InstanceConfig = {
  /**
   * The EC2 instance type that AWS PCS can provision in the compute node group.
   */
  InstanceType?: string;
};
/**
 * Type definition for `AWS::PCS::ComputeNodeGroup.SlurmCustomSetting`.
 * Additional settings that directly map to Slurm settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-computenodegroup-slurmcustomsetting.html}
 */
export type SlurmCustomSetting = {
  /**
   * AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory.
   */
  ParameterName: string;
  /**
   * The value for the configured Slurm setting.
   */
  ParameterValue: string;
};
/**
 * AWS::PCS::ComputeNodeGroup resource creates an AWS PCS compute node group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-computenodegroup.html}
 */
export class PCSComputeNodeGroup extends $Resource<
  "AWS::PCS::ComputeNodeGroup",
  PCSComputeNodeGroupProperties,
  PCSComputeNodeGroupAttributes
> {
  public static readonly Type = "AWS::PCS::ComputeNodeGroup";
  constructor(
    logicalId: string,
    properties: PCSComputeNodeGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PCSComputeNodeGroup.Type, properties, options);
  }
}
