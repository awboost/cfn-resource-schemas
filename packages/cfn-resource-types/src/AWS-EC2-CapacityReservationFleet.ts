import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::CapacityReservationFleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html}
 */
export type EC2CapacityReservationFleetProperties = {
  AllocationStrategy?: string;
  EndDate?: string;
  InstanceMatchCriteria?: "open";
  /**
   * @maxLength `50`
   */
  InstanceTypeSpecifications?: InstanceTypeSpecification[];
  NoRemoveEndDate?: boolean;
  RemoveEndDate?: boolean;
  TagSpecifications?: TagSpecification[];
  Tenancy?: "default";
  /**
   * @min `1`
   * @max `25000`
   */
  TotalTargetCapacity?: number;
};
/**
 * Attribute type definition for `AWS::EC2::CapacityReservationFleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html#aws-resource-ec2-capacityreservationfleet-return-values}
 */
export type EC2CapacityReservationFleetAttributes = {
  CapacityReservationFleetId: string;
};
/**
 * Type definition for `AWS::EC2::CapacityReservationFleet.InstanceTypeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservationfleet-instancetypespecification.html}
 */
export type InstanceTypeSpecification = {
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  EbsOptimized?: boolean;
  InstancePlatform?: string;
  InstanceType?: string;
  /**
   * @max `999`
   */
  Priority?: number;
  Weight?: number;
};
/**
 * Type definition for `AWS::EC2::CapacityReservationFleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservationfleet-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::CapacityReservationFleet.TagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservationfleet-tagspecification.html}
 */
export type TagSpecification = {
  ResourceType?: string;
  Tags?: Tag[];
};
/**
 * Resource Type definition for AWS::EC2::CapacityReservationFleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservationfleet.html}
 */
export class EC2CapacityReservationFleet extends $Resource<
  "AWS::EC2::CapacityReservationFleet",
  EC2CapacityReservationFleetProperties,
  EC2CapacityReservationFleetAttributes
> {
  public static readonly Type = "AWS::EC2::CapacityReservationFleet";
  public static readonly AttributeNames = [
    "CapacityReservationFleetId" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2CapacityReservationFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2CapacityReservationFleet.Type,
      properties,
      EC2CapacityReservationFleet.AttributeNames,
      options,
    );
  }
}
