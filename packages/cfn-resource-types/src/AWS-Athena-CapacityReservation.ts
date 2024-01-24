import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Athena::CapacityReservation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html}
 */
export type AthenaCapacityReservationProperties = {
  /**
   * Assignment configuration to assign workgroups to a reservation
   */
  CapacityAssignmentConfiguration?: CapacityAssignmentConfiguration;
  /**
   * The reservation name.
   * @pattern `[a-zA-Z0-9._-]{1,128}`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The number of DPUs to request to be allocated to the reservation.
   * @min `1`
   */
  TargetDpus: number;
};
/**
 * Attribute type definition for `AWS::Athena::CapacityReservation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html#aws-resource-athena-capacityreservation-return-values}
 */
export type AthenaCapacityReservationAttributes = {
  /**
   * The number of DPUs Athena has provisioned and allocated for the reservation
   * @min `0`
   */
  AllocatedDpus: number;
  /**
   * The Amazon Resource Name (ARN) of the specified capacity reservation
   */
  Arn: string;
  /**
   * The date and time the reservation was created.
   */
  CreationTime: string;
  /**
   * The timestamp when the last successful allocated was made
   */
  LastSuccessfulAllocationTime: string;
  /**
   * The status of the reservation.
   */
  Status: CapacityReservationStatus;
};
/**
 * Type definition for `AWS::Athena::CapacityReservation.CapacityAssignment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignment.html}
 */
export type CapacityAssignment = {
  WorkgroupNames: string[];
};
/**
 * Type definition for `AWS::Athena::CapacityReservation.CapacityAssignmentConfiguration`.
 * Assignment configuration to assign workgroups to a reservation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityassignmentconfiguration.html}
 */
export type CapacityAssignmentConfiguration = {
  /**
   * List of capacity assignments
   */
  CapacityAssignments: CapacityAssignment[];
};
/**
 * Type definition for `AWS::Athena::CapacityReservation.CapacityReservationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-capacityreservationstatus.html}
 */
export type CapacityReservationStatus =
  | "PENDING"
  | "ACTIVE"
  | "CANCELLING"
  | "CANCELLED"
  | "FAILED"
  | "UPDATE_PENDING";
/**
 * Type definition for `AWS::Athena::CapacityReservation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-capacityreservation-tag.html}
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
 * Resource schema for AWS::Athena::CapacityReservation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-capacityreservation.html}
 */
export class AthenaCapacityReservation extends $Resource<
  "AWS::Athena::CapacityReservation",
  AthenaCapacityReservationProperties,
  AthenaCapacityReservationAttributes
> {
  public static readonly Type = "AWS::Athena::CapacityReservation";
  constructor(
    logicalId: string,
    properties: AthenaCapacityReservationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AthenaCapacityReservation.Type, properties, options);
  }
}
