import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::NetworkInterfacePermission
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html}
 */
export type EC2NetworkInterfacePermissionProperties = {
  AwsAccountId: string;
  NetworkInterfaceId: string;
  Permission: string;
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInterfacePermission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#aws-resource-ec2-networkinterfacepermission-return-values}
 */
export type EC2NetworkInterfacePermissionAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::NetworkInterfacePermission
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html}
 */
export class EC2NetworkInterfacePermission extends $Resource<
  "AWS::EC2::NetworkInterfacePermission",
  EC2NetworkInterfacePermissionProperties,
  EC2NetworkInterfacePermissionAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInterfacePermission";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2NetworkInterfacePermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkInterfacePermission.Type,
      properties,
      EC2NetworkInterfacePermission.AttributeNames,
      options,
    );
  }
}
