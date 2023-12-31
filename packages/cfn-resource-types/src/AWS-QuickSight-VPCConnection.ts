import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of the AWS::QuickSight::VPCConnection Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html}
 */
export type QuickSightVPCConnectionProperties = {
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  DnsResolvers?: string[];
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name?: string;
  RoleArn?: string;
  /**
   * @minLength `1`
   * @maxLength `16`
   */
  SecurityGroupIds?: string[];
  /**
   * @minLength `2`
   * @maxLength `15`
   */
  SubnetIds?: string[];
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `[\w\-]+`
   */
  VPCConnectionId?: string;
};
/**
 * Attribute type definition for `AWS::QuickSight::VPCConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#aws-resource-quicksight-vpcconnection-return-values}
 */
export type QuickSightVPCConnectionAttributes = {
  Arn: string;
  CreatedTime: string;
  LastUpdatedTime: string;
  /**
   * @maxLength `15`
   */
  NetworkInterfaces: NetworkInterface[];
  Status: VPCConnectionResourceStatus;
  VPCId: string;
};
/**
 * Type definition for `AWS::QuickSight::VPCConnection.NetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-networkinterface.html}
 */
export type NetworkInterface = {
  AvailabilityZone?: string;
  ErrorMessage?: string;
  /**
   * @maxLength `255`
   * @pattern `^eni-[0-9a-z]*$`
   */
  NetworkInterfaceId?: string;
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATION_FAILED"
    | "UPDATING"
    | "UPDATE_FAILED"
    | "DELETING"
    | "DELETED"
    | "DELETION_FAILED"
    | "DELETION_SCHEDULED"
    | "ATTACHMENT_FAILED_ROLLBACK_FAILED";
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^subnet-[0-9a-z]*$`
   */
  SubnetId?: string;
};
/**
 * Type definition for `AWS::QuickSight::VPCConnection.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::QuickSight::VPCConnection.VPCConnectionAvailabilityStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-vpcconnectionavailabilitystatus.html}
 */
export type VPCConnectionAvailabilityStatus =
  | "AVAILABLE"
  | "UNAVAILABLE"
  | "PARTIALLY_AVAILABLE";
/**
 * Type definition for `AWS::QuickSight::VPCConnection.VPCConnectionResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-vpcconnectionresourcestatus.html}
 */
export type VPCConnectionResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETION_IN_PROGRESS"
  | "DELETION_FAILED"
  | "DELETED";
/**
 * Definition of the AWS::QuickSight::VPCConnection Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html}
 */
export class QuickSightVPCConnection extends $Resource<
  "AWS::QuickSight::VPCConnection",
  QuickSightVPCConnectionProperties,
  QuickSightVPCConnectionAttributes
> {
  public static readonly Type = "AWS::QuickSight::VPCConnection";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedTime" as const,
    "LastUpdatedTime" as const,
    "NetworkInterfaces" as const,
    "Status" as const,
    "VPCId" as const,
  ];
  constructor(
    logicalId: string,
    properties: QuickSightVPCConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      QuickSightVPCConnection.Type,
      properties,
      QuickSightVPCConnection.AttributeNames,
      options,
    );
  }
}
