import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html}
 */
export type AppStreamFleetProperties = {
  ComputeCapacity?: ComputeCapacity;
  Description?: string;
  DisconnectTimeoutInSeconds?: number;
  DisplayName?: string;
  DomainJoinInfo?: DomainJoinInfo;
  EnableDefaultInternetAccess?: boolean;
  FleetType?: string;
  IamRoleArn?: string;
  IdleDisconnectTimeoutInSeconds?: number;
  ImageArn?: string;
  ImageName?: string;
  InstanceType: string;
  MaxConcurrentSessions?: number;
  MaxSessionsPerInstance?: number;
  MaxUserDurationInSeconds?: number;
  Name: string;
  Platform?: string;
  SessionScriptS3Location?: S3Location;
  StreamView?: string;
  Tags?: Tag[];
  UsbDeviceFilterStrings?: string[];
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::AppStream::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#aws-resource-appstream-fleet-return-values}
 */
export type AppStreamFleetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AppStream::Fleet.ComputeCapacity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-computecapacity.html}
 */
export type ComputeCapacity = {
  DesiredInstances?: number;
  DesiredSessions?: number;
};
/**
 * Type definition for `AWS::AppStream::Fleet.DomainJoinInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-domainjoininfo.html}
 */
export type DomainJoinInfo = {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedName?: string;
};
/**
 * Type definition for `AWS::AppStream::Fleet.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-s3location.html}
 */
export type S3Location = {
  S3Bucket: string;
  S3Key: string;
};
/**
 * Type definition for `AWS::AppStream::Fleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppStream::Fleet.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Resource Type definition for AWS::AppStream::Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html}
 */
export class AppStreamFleet extends $Resource<
  "AWS::AppStream::Fleet",
  AppStreamFleetProperties,
  AppStreamFleetAttributes
> {
  public static readonly Type = "AWS::AppStream::Fleet";
  constructor(
    logicalId: string,
    properties: AppStreamFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamFleet.Type, properties, options);
  }
}
