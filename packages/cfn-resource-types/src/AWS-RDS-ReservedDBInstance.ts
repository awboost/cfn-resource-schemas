import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::RDS::ReservedDBInstance`.
 * Represents an Amazon RDS Reserved DB Instance. Reserved DB Instances provide a discounted hourly rate compared to on-demand DB instance pricing.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-reserveddbinstance.html}
 */
export type RDSReservedDBInstanceProperties = {
  /**
   * The number of reserved DB instances.
   */
  DBInstanceCount?: number;
};
/**
 * Attribute type definition for `AWS::RDS::ReservedDBInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-reserveddbinstance.html#aws-resource-rds-reserveddbinstance-return-values}
 */
export type RDSReservedDBInstanceAttributes = {
  /**
   * The currency code for the reserved DB instance.
   */
  CurrencyCode: string;
  /**
   * The DB instance class for the reserved DB instance.
   */
  DBInstanceClass: string;
  /**
   * The duration of the reservation in seconds.
   */
  Duration: number;
  /**
   * The fixed price charged for this reserved DB instance.
   */
  FixedPrice: number;
  /**
   * Indicates whether the reservation applies to Multi-AZ deployments.
   */
  MultiAZ: boolean;
  /**
   * The offering type of this reserved DB instance.
   */
  OfferingType: string;
  /**
   * The description of the reserved DB instance.
   */
  ProductDescription: string;
  /**
   * The recurring price charged to run this reserved DB instance.
   */
  RecurringCharges: {
    /**
     * The amount of the recurring charge.
     */
    RecurringChargeAmount: number;
    /**
     * The frequency of the recurring charge.
     */
    RecurringChargeFrequency: string;
  }[];
  /**
   * The Amazon Resource Name (ARN) for the reserved DB instance.
   */
  ReservedDBInstanceArn: string;
  /**
   * The unique identifier for the reservation.
   */
  ReservedDBInstanceId: string;
  /**
   * The offering identifier.
   */
  ReservedDBInstancesOfferingId: string;
  /**
   * The time the reservation started.
   */
  StartTime: string;
  /**
   * The state of the reserved DB instance.
   */
  State: string;
  /**
   * A list of tags.
   */
  Tags: {
    /**
     * The key of the tag.
     * @minLength `1`
     * @maxLength `128`
     */
    Key: string;
    /**
     * The value of the tag.
     * @minLength `0`
     * @maxLength `256`
     */
    Value: string;
  }[];
  /**
   * The hourly price charged for this reserved DB instance.
   */
  UsagePrice: number;
};
/**
 * Type definition for `AWS::RDS::ReservedDBInstance.RecurringCharge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-reserveddbinstance-recurringcharge.html}
 */
export type RecurringCharge = {
  /**
   * The amount of the recurring charge.
   */
  RecurringChargeAmount?: number;
  /**
   * The frequency of the recurring charge.
   */
  RecurringChargeFrequency?: string;
};
/**
 * Type definition for `AWS::RDS::ReservedDBInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-reserveddbinstance-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value of the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::RDS::ReservedDBInstance`.
 * Represents an Amazon RDS Reserved DB Instance. Reserved DB Instances provide a discounted hourly rate compared to on-demand DB instance pricing.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-reserveddbinstance.html}
 */
export class RDSReservedDBInstance extends $Resource<
  "AWS::RDS::ReservedDBInstance",
  RDSReservedDBInstanceProperties,
  RDSReservedDBInstanceAttributes
> {
  public static readonly Type = "AWS::RDS::ReservedDBInstance";
  constructor(
    logicalId: string,
    properties: RDSReservedDBInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSReservedDBInstance.Type, properties, options);
  }
}
