import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::HubV2 resource represents the implementation of the AWS Security Hub V2 service in your account. Only one hubv2 resource can created in each region in which you enable Security Hub V2.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hubv2.html}
 */
export type SecurityHubHubV2Properties = {
  /**
   * A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::HubV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hubv2.html#aws-resource-securityhub-hubv2-return-values}
 */
export type SecurityHubHubV2Attributes = {
  /**
   * The Amazon Resource Name of the Security Hub V2 resource.
   * @pattern `arn:aws(?:-[a-z]+)*:securityhub:[a-z0-9-]+:\d{12}:hubv2/[^/](.{0,1022}[^/:])?$`
   */
  HubV2Arn: string;
  /**
   * @pattern `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   */
  SubscribedAt: string;
};
/**
 * Type definition for `AWS::SecurityHub::HubV2.Tags`.
 * A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-hubv2-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * The AWS::SecurityHub::HubV2 resource represents the implementation of the AWS Security Hub V2 service in your account. Only one hubv2 resource can created in each region in which you enable Security Hub V2.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hubv2.html}
 */
export class SecurityHubHubV2 extends $Resource<
  "AWS::SecurityHub::HubV2",
  SecurityHubHubV2Properties,
  SecurityHubHubV2Attributes
> {
  public static readonly Type = "AWS::SecurityHub::HubV2";
  constructor(
    logicalId: string,
    properties: SecurityHubHubV2Properties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubHubV2.Type, properties, options);
  }
}
