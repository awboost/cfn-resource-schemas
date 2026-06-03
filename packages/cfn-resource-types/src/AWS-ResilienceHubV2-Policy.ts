import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResilienceHubV2::Policy`.
 * Creates a resilience policy that defines availability and disaster recovery requirements.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-policy.html}
 */
export type ResilienceHubV2PolicyProperties = {
  AvailabilitySlo?: AvailabilitySlo;
  DataRecovery?: DataRecoveryTargets;
  /**
   * The description of the policy.
   * @maxLength `615`
   */
  Description?: string;
  /**
   * The KMS key ID for encrypting policy data.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^((arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:((key/[a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+)))|([a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+))$`
   */
  KmsKeyId?: string;
  MultiAz?: MultiAzTargets;
  MultiRegion?: MultiRegionTargets;
  /**
   * The name of the policy.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * Tags assigned to the policy.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ResilienceHubV2::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-policy.html#aws-resource-resiliencehubv2-policy-return-values}
 */
export type ResilienceHubV2PolicyAttributes = {
  /**
   * The number of services associated with this policy.
   */
  AssociatedServiceCount: number;
  /**
   * The timestamp when the policy was created.
   */
  CreatedAt: string;
  /**
   * The ARN of the policy.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  PolicyArn: string;
  /**
   * The timestamp when the policy was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Policy.AvailabilitySlo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-policy-availabilityslo.html}
 */
export type AvailabilitySlo = {
  /**
   * Availability target percentage.
   * @min `0`
   * @max `100`
   */
  Target?: number;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Policy.DataRecoveryTargets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-policy-datarecoverytargets.html}
 */
export type DataRecoveryTargets = {
  /**
   * Time between backups in minutes.
   * @min `0`
   */
  TimeBetweenBackupsInMinutes?: number;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Policy.MultiAzTargets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-policy-multiaztargets.html}
 */
export type MultiAzTargets = {
  /**
   * Multi-AZ disaster recovery approach.
   */
  DisasterRecoveryApproach?:
    | "ACTIVE_ACTIVE"
    | "HOT_STANDBY"
    | "WARM_STANDBY"
    | "PILOT_LIGHT"
    | "BACKUP_AND_RESTORE";
  /**
   * Recovery Point Objective in minutes.
   * @min `0`
   * @max `2147483647`
   */
  RpoInMinutes?: number;
  /**
   * Recovery Time Objective in minutes.
   * @min `0`
   * @max `2147483647`
   */
  RtoInMinutes?: number;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Policy.MultiRegionTargets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-policy-multiregiontargets.html}
 */
export type MultiRegionTargets = {
  /**
   * Multi-Region disaster recovery approach.
   */
  DisasterRecoveryApproach?:
    | "ACTIVE_ACTIVE"
    | "HOT_STANDBY"
    | "WARM_STANDBY"
    | "PILOT_LIGHT"
    | "BACKUP_AND_RESTORE";
  /**
   * Recovery Point Objective in minutes.
   * @min `0`
   * @max `2147483647`
   */
  RpoInMinutes?: number;
  /**
   * Recovery Time Objective in minutes.
   * @min `0`
   * @max `2147483647`
   */
  RtoInMinutes?: number;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Policy.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-policy-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag value.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ResilienceHubV2::Policy`.
 * Creates a resilience policy that defines availability and disaster recovery requirements.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-policy.html}
 */
export class ResilienceHubV2Policy extends $Resource<
  "AWS::ResilienceHubV2::Policy",
  ResilienceHubV2PolicyProperties,
  ResilienceHubV2PolicyAttributes
> {
  public static readonly Type = "AWS::ResilienceHubV2::Policy";
  constructor(
    logicalId: string,
    properties: ResilienceHubV2PolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubV2Policy.Type, properties, options);
  }
}
