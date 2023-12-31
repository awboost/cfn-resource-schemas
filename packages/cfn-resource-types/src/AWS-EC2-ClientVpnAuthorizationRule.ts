import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html}
 */
export type EC2ClientVpnAuthorizationRuleProperties = {
  AccessGroupId?: string;
  AuthorizeAllGroups?: boolean;
  ClientVpnEndpointId: string;
  Description?: string;
  TargetNetworkCidr: string;
};
/**
 * Attribute type definition for `AWS::EC2::ClientVpnAuthorizationRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#aws-resource-ec2-clientvpnauthorizationrule-return-values}
 */
export type EC2ClientVpnAuthorizationRuleAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html}
 */
export class EC2ClientVpnAuthorizationRule extends $Resource<
  "AWS::EC2::ClientVpnAuthorizationRule",
  EC2ClientVpnAuthorizationRuleProperties,
  EC2ClientVpnAuthorizationRuleAttributes
> {
  public static readonly Type = "AWS::EC2::ClientVpnAuthorizationRule";
  constructor(
    logicalId: string,
    properties: EC2ClientVpnAuthorizationRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2ClientVpnAuthorizationRule.Type, properties, options);
  }
}
