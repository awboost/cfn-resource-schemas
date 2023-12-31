import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::VPCEndpointServicePermissions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html}
 */
export type EC2VPCEndpointServicePermissionsProperties = {
  AllowedPrincipals?: string[];
  ServiceId: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCEndpointServicePermissions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html}
 */
export class EC2VPCEndpointServicePermissions extends $Resource<
  "AWS::EC2::VPCEndpointServicePermissions",
  EC2VPCEndpointServicePermissionsProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPCEndpointServicePermissions";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointServicePermissionsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPCEndpointServicePermissions.Type,
      properties,
      EC2VPCEndpointServicePermissions.AttributeNames,
      options,
    );
  }
}
