import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RedshiftServerless::Workgroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html}
 */
export type RedshiftServerlessWorkgroupProperties = {
  /**
   * The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
   */
  BaseCapacity?: number;
  /**
   * A list of parameters to set for finer control over a database. Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.
   * @minLength `1`
   */
  ConfigParameters?: ConfigParameter[];
  /**
   * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
   */
  EnhancedVpcRouting?: boolean;
  /**
   * The max compute capacity of the workgroup in Redshift Processing Units (RPUs).
   */
  MaxCapacity?: number;
  /**
   * The namespace the workgroup is associated with.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^(?=^[a-z0-9-]+$).{3,64}$`
   */
  NamespaceName?: string;
  /**
   * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
   */
  Port?: number;
  /**
   * A property that represents the price performance target settings for the workgroup.
   */
  PricePerformanceTarget?: PerformanceTarget;
  /**
   * A value that specifies whether the workgroup can be accessible from a public network.
   */
  PubliclyAccessible?: boolean;
  /**
   * The identifier of the recovery point to restore the namespace from. When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.
   */
  RecoveryPointId?: string;
  /**
   * A list of security group IDs to associate with the workgroup.
   * @minLength `1`
   * @maxLength `32`
   */
  SecurityGroupIds?: string[];
  /**
   * The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.
   */
  SnapshotArn?: string;
  /**
   * The name of the snapshot to restore the namespace from. Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.
   */
  SnapshotName?: string;
  /**
   * The AWS account ID that owns the snapshot. Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.
   */
  SnapshotOwnerAccount?: string;
  /**
   * A list of subnet IDs the workgroup is associated with.
   * @minLength `1`
   * @maxLength `32`
   */
  SubnetIds?: string[];
  /**
   * The map of the key-value pairs used to tag the workgroup.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_]+$`
   */
  TrackName?: string;
  /**
   * Definition for workgroup resource
   */
  Workgroup?: Workgroup;
  /**
   * The name of the workgroup.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^(?=^[a-z0-9-]+$).{3,64}$`
   */
  WorkgroupName: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.ConfigParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html}
 */
export type ConfigParameter = {
  /**
   * @minLength `0`
   * @maxLength `255`
   */
  ParameterKey?: string;
  /**
   * @minLength `0`
   * @maxLength `15000`
   */
  ParameterValue?: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.PerformanceTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-performancetarget.html}
 */
export type PerformanceTarget = {
  /**
   * @min `1`
   * @max `100`
   */
  Level?: number;
  Status?: PerformanceTargetStatus;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.PerformanceTargetStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-performancetargetstatus.html}
 */
export type PerformanceTargetStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.Workgroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html}
 */
export type Workgroup = {
  PricePerformanceTarget?: PerformanceTarget;
};
/**
 * Type definition for `AWS::RedshiftServerless::Workgroup.WorkgroupStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroupstatus.html}
 */
export type WorkgroupStatus =
  | "CREATING"
  | "AVAILABLE"
  | "MODIFYING"
  | "DELETING";
/**
 * Definition of AWS::RedshiftServerless::Workgroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html}
 */
export class RedshiftServerlessWorkgroup extends $Resource<
  "AWS::RedshiftServerless::Workgroup",
  RedshiftServerlessWorkgroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RedshiftServerless::Workgroup";
  constructor(
    logicalId: string,
    properties: RedshiftServerlessWorkgroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftServerlessWorkgroup.Type, properties, options);
  }
}
