import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  Arn: string;
  /**
   * <p>The time that the VPC connection was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>The time that the VPC connection was last updated.</p>
   */
  LastUpdatedTime: string;
  /**
   * <p>A list of network interfaces.</p>
   * @minLength `0`
   * @maxLength `15`
   */
  NetworkInterfaces: {
    /**
     * <p>The availability zone that the network interface resides in.</p>
     */
    AvailabilityZone: string;
    /**
     * <p>An error message.</p>
     */
    ErrorMessage: string;
    /**
     * <p>The network interface ID.</p>
     * @minLength `0`
     * @maxLength `255`
     * @pattern `^eni-[0-9a-z]*$`
     */
    NetworkInterfaceId: string;
    Status: NetworkInterfaceStatus;
    /**
     * <p>The subnet ID associated with the network interface.</p>
     * @minLength `1`
     * @maxLength `255`
     * @pattern `^subnet-[0-9a-z]*$`
     */
    SubnetId: string;
  }[];
  Status: VPCConnectionResourceStatus;
  /**
   * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
   */
  VPCId: string;
};
/**
 * Type definition for `AWS::QuickSight::VPCConnection.NetworkInterface`.
 * <p>The structure that contains information about a network interface.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-networkinterface.html}
 */
export type NetworkInterface = {
  /**
   * <p>The availability zone that the network interface resides in.</p>
   */
  AvailabilityZone?: string;
  /**
   * <p>An error message.</p>
   */
  ErrorMessage?: string;
  /**
   * <p>The network interface ID.</p>
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^eni-[0-9a-z]*$`
   */
  NetworkInterfaceId?: string;
  Status?: NetworkInterfaceStatus;
  /**
   * <p>The subnet ID associated with the network interface.</p>
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^subnet-[0-9a-z]*$`
   */
  SubnetId?: string;
};
/**
 * Type definition for `AWS::QuickSight::VPCConnection.NetworkInterfaceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-networkinterfacestatus.html}
 */
export type NetworkInterfaceStatus =
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
 * Type definition for `AWS::QuickSight::VPCConnection.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-vpcconnection-tag.html}
 */
export type Tag = {
  /**
   * <p>Tag key.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>Tag value.</p>
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
  constructor(
    logicalId: string,
    properties: QuickSightVPCConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightVPCConnection.Type, properties, options);
  }
}
