import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::ConfigurationPolicy resource represents the Central Configuration Policy in your account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html}
 */
export type SecurityHubConfigurationPolicyProperties = {
  /**
   * An object that defines how Security Hub is configured.
   */
  ConfigurationPolicy: Policy;
  /**
   * The description of the configuration policy.
   * @minLength `0`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The name of the configuration policy.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::ConfigurationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#aws-resource-securityhub-configurationpolicy-return-values}
 */
export type SecurityHubConfigurationPolicyAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the configuration policy.
   * @pattern `^arn:aws\S*:securityhub:[a-z0-9-]+:[0-9]{12}:configuration-policy/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  Arn: string;
  /**
   * The date and time, in UTC and ISO 8601 format.
   */
  CreatedAt: string;
  /**
   * The universally unique identifier (UUID) of the configuration policy.
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  Id: string;
  /**
   * Indicates whether the service that the configuration policy applies to is enabled in the policy.
   */
  ServiceEnabled: boolean;
  /**
   * The date and time, in UTC and ISO 8601 format.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.ParameterConfiguration`.
 * An object that provides the current value of a security control parameter and identifies whether it has been customized.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parameterconfiguration.html}
 */
export type ParameterConfiguration = {
  /**
   * An object that includes the data type of a security control parameter and its current value.
   */
  Value?: ParameterValue;
  /**
   * Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
   */
  ValueType: "DEFAULT" | "CUSTOM";
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.ParameterValue`.
 * An object that includes the data type of a security control parameter and its current value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-parametervalue.html}
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
   * A control parameter that is an enum.
   * @maxLength `2048`
   */
  Enum?: string;
  /**
   * A control parameter that is a list of enums.
   * @maxLength `100`
   */
  EnumList?: string[];
  /**
   * A control parameter that is an integer.
   */
  Integer?: number;
  /**
   * A control parameter that is a list of integers.
   * @maxLength `100`
   */
  IntegerList?: number[];
  /**
   * A control parameter that is a string.
   * @maxLength `2048`
   */
  String?: string;
  /**
   * A control parameter that is a list of strings.
   * @maxLength `100`
   */
  StringList?: string[];
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.Policy`.
 * An object that defines how Security Hub is configured.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-policy.html}
 */
export type Policy = {
  /**
   * An object that defines how AWS Security Hub is configured.
   */
  SecurityHub?: SecurityHubPolicy;
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.SecurityControlCustomParameter`.
 * An object of security control and control parameter value that are included in a configuration policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolcustomparameter.html}
 */
export type SecurityControlCustomParameter = {
  /**
   * An object that specifies parameter values for a control in a configuration policy.
   */
  Parameters?: Record<string, ParameterConfiguration>;
  /**
   * The ID of the security control.
   * @maxLength `2048`
   */
  SecurityControlId?: string;
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.SecurityControlsConfiguration`.
 * An object that defines which security controls are enabled in an AWS Security Hub configuration policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securitycontrolsconfiguration.html}
 */
export type SecurityControlsConfiguration = {
  /**
   * A list of security controls that are disabled in the configuration policy
   * @maxLength `1000`
   */
  DisabledSecurityControlIdentifiers?: string[];
  /**
   * A list of security controls that are enabled in the configuration policy.
   * @maxLength `1000`
   */
  EnabledSecurityControlIdentifiers?: string[];
  /**
   * A list of security controls and control parameter values that are included in a configuration policy.
   * @maxLength `1000`
   */
  SecurityControlCustomParameters?: SecurityControlCustomParameter[];
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.SecurityHubPolicy`.
 * An object that defines how AWS Security Hub is configured.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-securityhubpolicy.html}
 */
export type SecurityHubPolicy = {
  /**
   * A list that defines which security standards are enabled in the configuration policy.
   * @maxLength `1000`
   */
  EnabledStandardIdentifiers?: string[];
  /**
   * An object that defines which security controls are enabled in an AWS Security Hub configuration policy.
   */
  SecurityControlsConfiguration?: SecurityControlsConfiguration;
  /**
   * Indicates whether Security Hub is enabled in the policy.
   */
  ServiceEnabled?: boolean;
};
/**
 * Type definition for `AWS::SecurityHub::ConfigurationPolicy.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-configurationpolicy-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * The AWS::SecurityHub::ConfigurationPolicy resource represents the Central Configuration Policy in your account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html}
 */
export class SecurityHubConfigurationPolicy extends $Resource<
  "AWS::SecurityHub::ConfigurationPolicy",
  SecurityHubConfigurationPolicyProperties,
  SecurityHubConfigurationPolicyAttributes
> {
  public static readonly Type = "AWS::SecurityHub::ConfigurationPolicy";
  constructor(
    logicalId: string,
    properties: SecurityHubConfigurationPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubConfigurationPolicy.Type, properties, options);
  }
}
