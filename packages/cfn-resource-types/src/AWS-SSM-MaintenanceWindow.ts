import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html}
 */
export type SSMMaintenanceWindowProperties = {
  AllowUnassociatedTargets: boolean;
  Cutoff: number;
  Description?: string;
  Duration: number;
  EndDate?: string;
  Name: string;
  Schedule: string;
  ScheduleOffset?: number;
  ScheduleTimezone?: string;
  StartDate?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSM::MaintenanceWindow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#aws-resource-ssm-maintenancewindow-return-values}
 */
export type SSMMaintenanceWindowAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindow.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindow-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html}
 */
export class SSMMaintenanceWindow extends $Resource<
  "AWS::SSM::MaintenanceWindow",
  SSMMaintenanceWindowProperties,
  SSMMaintenanceWindowAttributes
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindow";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMMaintenanceWindow.Type,
      properties,
      SSMMaintenanceWindow.AttributeNames,
      options,
    );
  }
}
