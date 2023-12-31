import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::CapacityReservation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html}
 */
export type EC2CapacityReservationProperties = {
  AvailabilityZone: string;
  EbsOptimized?: boolean;
  EndDate?: string;
  EndDateType?: string;
  EphemeralStorage?: boolean;
  InstanceCount: number;
  InstanceMatchCriteria?: string;
  InstancePlatform: string;
  InstanceType: string;
  OutPostArn?: string;
  PlacementGroupArn?: string;
  TagSpecifications?: TagSpecification[];
  Tenancy?: string;
};
/**
 * Attribute type definition for `AWS::EC2::CapacityReservation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html#aws-resource-ec2-capacityreservation-return-values}
 */
export type EC2CapacityReservationAttributes = {
  AvailableInstanceCount: number;
  Id: string;
  TotalInstanceCount: number;
};
/**
 * Type definition for `AWS::EC2::CapacityReservation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservation-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::CapacityReservation.TagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservation-tagspecification.html}
 */
export type TagSpecification = {
  ResourceType?: string;
  Tags?: Tag[];
};
/**
 * Resource Type definition for AWS::EC2::CapacityReservation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html}
 */
export class EC2CapacityReservation extends $Resource<
  "AWS::EC2::CapacityReservation",
  EC2CapacityReservationProperties,
  EC2CapacityReservationAttributes
> {
  public static readonly Type = "AWS::EC2::CapacityReservation";
  constructor(
    logicalId: string,
    properties: EC2CapacityReservationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2CapacityReservation.Type, properties, options);
  }
}
