import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::SSM::MaintenanceWindowTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html}
 */
export type SSMMaintenanceWindowTargetProperties = {
  /**
   * A description for the target.
   */
  Description?: string;
  /**
   * The name for the maintenance window target.
   */
  Name?: string;
  /**
   * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
   */
  OwnerInformation?: string;
  /**
   * The type of target that is being registered with the maintenance window.
   */
  ResourceType: string;
  /**
   * The targets to register with the maintenance window.
   */
  Targets: Targets[];
  /**
   * The ID of the maintenance window to register the target with.
   */
  WindowId: string;
};
/**
 * Attribute type definition for `AWS::SSM::MaintenanceWindowTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#aws-resource-ssm-maintenancewindowtarget-return-values}
 */
export type SSMMaintenanceWindowTargetAttributes = {
  /**
   * The ID of the target.
   */
  WindowTargetId: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTarget.Targets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html}
 */
export type Targets = {
  /**
   * User-defined criteria for sending commands that target managed nodes that meet the criteria.
   */
  Key: string;
  /**
   * User-defined criteria that maps to Key.
   */
  Values: string[];
};
/**
 * Resource type definition for AWS::SSM::MaintenanceWindowTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html}
 */
export class SSMMaintenanceWindowTarget extends $Resource<
  "AWS::SSM::MaintenanceWindowTarget",
  SSMMaintenanceWindowTargetProperties,
  SSMMaintenanceWindowTargetAttributes
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindowTarget";
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMMaintenanceWindowTarget.Type, properties, options);
  }
}
