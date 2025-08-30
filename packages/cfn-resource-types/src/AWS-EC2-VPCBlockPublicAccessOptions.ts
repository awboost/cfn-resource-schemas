import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCBlockPublicAccessOptions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessoptions.html}
 */
export type EC2VPCBlockPublicAccessOptionsProperties = {
  /**
   * The desired Block Public Access mode for Internet Gateways in your account. We do not allow to create in a off mode as this is the default value
   */
  InternetGatewayBlockMode: "block-bidirectional" | "block-ingress";
};
/**
 * Attribute type definition for `AWS::EC2::VPCBlockPublicAccessOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessoptions.html#aws-resource-ec2-vpcblockpublicaccessoptions-return-values}
 */
export type EC2VPCBlockPublicAccessOptionsAttributes = {
  /**
   * The identifier for the specified AWS account.
   */
  AccountId: string;
  /**
   * Determines if exclusions are allowed. If you have enabled VPC BPA at the Organization level, exclusions may be not-allowed. Otherwise, they are allowed.
   */
  ExclusionsAllowed: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCBlockPublicAccessOptions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessoptions.html}
 */
export class EC2VPCBlockPublicAccessOptions extends $Resource<
  "AWS::EC2::VPCBlockPublicAccessOptions",
  EC2VPCBlockPublicAccessOptionsProperties,
  EC2VPCBlockPublicAccessOptionsAttributes
> {
  public static readonly Type = "AWS::EC2::VPCBlockPublicAccessOptions";
  constructor(
    logicalId: string,
    properties: EC2VPCBlockPublicAccessOptionsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCBlockPublicAccessOptions.Type, properties, options);
  }
}
