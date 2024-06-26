import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SecurityHub::SecurityControl`.
 * A security control in Security Hub describes a security best practice related to a specific resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html}
 */
export type SecurityHubSecurityControlProperties = {
  /**
   * The most recent reason for updating the customizable properties of a security control. This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
   * @pattern `^([^ -]|[-_ a-zA-Z0-9])+$`
   */
  LastUpdateReason?: string;
  /**
   * An object that identifies the name of a control parameter, its current value, and whether it has been customized.
   */
  Parameters: Parameters;
  /**
   * The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
   * @pattern `.*\S.*`
   */
  SecurityControlArn?: string;
  /**
   * The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.
   * @pattern `.*\S.*`
   */
  SecurityControlId?: string;
};
/**
 * Type definition for `AWS::SecurityHub::SecurityControl.ParameterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-securitycontrol-parameterconfiguration.html}
 */
export type ParameterConfiguration = {
  Value?: ParameterValue;
  ValueType: "DEFAULT" | "CUSTOM";
};
/**
 * Type definition for `AWS::SecurityHub::SecurityControl.Parameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-securitycontrol-parameters.html}
 */
export type Parameters = Record<string, ParameterConfiguration>;
/**
 * Type definition for `AWS::SecurityHub::SecurityControl.ParameterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-securitycontrol-parametervalue.html}
 */
export type ParameterValue = {
  /**
   * A control parameter that is a boolean.
   */
  Boolean?: boolean;
  /**
   * A control parameter that is a double.
   */
  Double?: number;
  /**
   * A control parameter that is a enum.
   * @pattern `.*\S.*`
   */
  Enum?: string;
  /**
   * A control parameter that is a list of enums.
   */
  EnumList?: string[];
  /**
   * A control parameter that is a integer.
   */
  Integer?: number;
  /**
   * A control parameter that is a list of integers.
   */
  IntegerList?: number[];
  /**
   * A control parameter that is a string.
   * @pattern `.*\S.*`
   */
  String?: string;
  /**
   * A control parameter that is a list of strings.
   */
  StringList?: string[];
};
/**
 * Resource type definition for `AWS::SecurityHub::SecurityControl`.
 * A security control in Security Hub describes a security best practice related to a specific resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html}
 */
export class SecurityHubSecurityControl extends $Resource<
  "AWS::SecurityHub::SecurityControl",
  SecurityHubSecurityControlProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SecurityHub::SecurityControl";
  constructor(
    logicalId: string,
    properties: SecurityHubSecurityControlProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubSecurityControl.Type, properties, options);
  }
}
