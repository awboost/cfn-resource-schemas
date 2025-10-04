import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::PCS::Queue resource creates an AWS PCS queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html}
 */
export type PCSQueueProperties = {
  /**
   * The ID of the cluster of the queue.
   */
  ClusterId: string;
  /**
   * The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
   */
  ComputeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[];
  /**
   * The name that identifies the queue.
   */
  Name?: string;
  /**
   * The Slurm configuration for the queue.
   */
  SlurmConfiguration?: {
    /**
     * Custom Slurm parameters that directly map to Slurm configuration settings.
     */
    SlurmCustomSettings?: SlurmCustomSetting[];
  };
  /**
   * 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::PCS::Queue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html#aws-resource-pcs-queue-return-values}
 */
export type PCSQueueAttributes = {
  /**
   * The unique Amazon Resource Name (ARN) of the queue.
   * @pattern `^(.*?)`
   */
  Arn: string;
  /**
   * The list of errors that occurred during queue provisioning.
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
   * The generated unique ID of the queue.
   */
  Id: string;
  /**
   * The provisioning status of the queue. The provisioning status doesn't indicate the overall health of the queue.
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
 * Type definition for `AWS::PCS::Queue.ComputeNodeGroupConfiguration`.
 * The compute node group configuration for a queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-queue-computenodegroupconfiguration.html}
 */
export type ComputeNodeGroupConfiguration = {
  /**
   * The compute node group ID for the compute node group configuration.
   */
  ComputeNodeGroupId?: string;
};
/**
 * Type definition for `AWS::PCS::Queue.ErrorInfo`.
 * An error that occurred during resource provisioning.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-queue-errorinfo.html}
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
 * Type definition for `AWS::PCS::Queue.SlurmCustomSetting`.
 * Additional settings that directly map to Slurm settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcs-queue-slurmcustomsetting.html}
 */
export type SlurmCustomSetting = {
  /**
   * AWS PCS supports configuration of the Slurm parameters for queues:.
   */
  ParameterName: string;
  /**
   * The value for the configured Slurm setting.
   */
  ParameterValue: string;
};
/**
 * AWS::PCS::Queue resource creates an AWS PCS queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html}
 */
export class PCSQueue extends $Resource<
  "AWS::PCS::Queue",
  PCSQueueProperties,
  PCSQueueAttributes
> {
  public static readonly Type = "AWS::PCS::Queue";
  constructor(
    logicalId: string,
    properties: PCSQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PCSQueue.Type, properties, options);
  }
}
