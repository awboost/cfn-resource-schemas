import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html}
 */
export type SSMMaintenanceWindowTargetProperties = {
  Description?: string;
  Name?: string;
  OwnerInformation?: string;
  ResourceType: string;
  Targets: Targets[];
  WindowId: string;
};
/**
 * Attribute type definition for `AWS::SSM::MaintenanceWindowTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html#aws-resource-ssm-maintenancewindowtarget-return-values}
 */
export type SSMMaintenanceWindowTargetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTarget.Targets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html}
 */
export type Targets = {
  Key: string;
  Values: string[];
};
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html}
 */
export class SSMMaintenanceWindowTarget extends $Resource<
  "AWS::SSM::MaintenanceWindowTarget",
  SSMMaintenanceWindowTargetProperties,
  SSMMaintenanceWindowTargetAttributes
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindowTarget";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMMaintenanceWindowTarget.Type,
      properties,
      SSMMaintenanceWindowTarget.AttributeNames,
      options,
    );
  }
}
