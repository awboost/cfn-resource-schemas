import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SecurityHub::Standard`` resource specifies the enablement of a security standard. The standard is identified by the ``StandardsArn`` property. To view a list of ASH standards and their Amazon Resource Names (ARNs), use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
 You must create a separate ``AWS::SecurityHub::Standard`` resource for each standard that you want to enable.
 For more information about ASH standards, see [standards reference](https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html}
 */
export type SecurityHubStandardProperties = {
  /**
   * Specifies which controls are to be disabled in a standard.
   *Maximum*: ``100``
   * @minLength `0`
   * @maxLength `100`
   */
  DisabledStandardsControls?: StandardsControl[];
  /**
   * The ARN of the standard that you want to enable. To view a list of available ASH standards and their ARNs, use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
   * @pattern `arn:aws\S*:securityhub:\S`
   */
  StandardsArn: string;
};
/**
 * Attribute type definition for `AWS::SecurityHub::Standard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#aws-resource-securityhub-standard-return-values}
 */
export type SecurityHubStandardAttributes = {
  /**
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  StandardsSubscriptionArn: string;
};
/**
 * Type definition for `AWS::SecurityHub::Standard.StandardsControl`.
 * Provides details about an individual security control. For a list of ASH controls, see [controls reference](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-controls-reference.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-standard-standardscontrol.html}
 */
export type StandardsControl = {
  /**
   * A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required.
   */
  Reason?: string;
  /**
   * The Amazon Resource Name (ARN) of the control.
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  StandardsControlArn: string;
};
/**
 * The ``AWS::SecurityHub::Standard`` resource specifies the enablement of a security standard. The standard is identified by the ``StandardsArn`` property. To view a list of ASH standards and their Amazon Resource Names (ARNs), use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
 You must create a separate ``AWS::SecurityHub::Standard`` resource for each standard that you want to enable.
 For more information about ASH standards, see [standards reference](https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html}
 */
export class SecurityHubStandard extends $Resource<
  "AWS::SecurityHub::Standard",
  SecurityHubStandardProperties,
  SecurityHubStandardAttributes
> {
  public static readonly Type = "AWS::SecurityHub::Standard";
  constructor(
    logicalId: string,
    properties: SecurityHubStandardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubStandard.Type, properties, options);
  }
}
