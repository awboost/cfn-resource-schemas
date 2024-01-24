import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SSMGuiConnect::Preferences Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html}
 */
export type SSMGuiConnectPreferencesProperties = {
  /**
   * A map for Idle Connection Preferences
   * @minLength `1`
   * @maxLength `1`
   */
  IdleConnection?: IdleConnectionPreferences[];
};
/**
 * Attribute type definition for `AWS::SSMGuiConnect::Preferences`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#aws-resource-ssmguiconnect-preferences-return-values}
 */
export type SSMGuiConnectPreferencesAttributes = {
  /**
   * The AWS Account Id that the preference is associated with, used as the unique identifier for this resource.
   * @pattern `\d{12}`
   */
  AccountId: string;
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.IdleConnectionAlert`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmguiconnect-preferences-idleconnectionalert.html}
 */
export type IdleConnectionAlert = {
  Type?: "MINUTES";
  /**
   * @min `0`
   * @max `60`
   */
  Value: number;
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.IdleConnectionPreferences`.
 * Idle Connection Preferences
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmguiconnect-preferences-idleconnectionpreferences.html}
 */
export type IdleConnectionPreferences = {
  Alert?: IdleConnectionAlert;
  Timeout?: IdleConnectionTimeout;
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.IdleConnectionTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmguiconnect-preferences-idleconnectiontimeout.html}
 */
export type IdleConnectionTimeout = {
  Type?: "MINUTES";
  /**
   * @min `1`
   * @max `60`
   */
  Value: number;
};
/**
 * Definition of AWS::SSMGuiConnect::Preferences Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html}
 */
export class SSMGuiConnectPreferences extends $Resource<
  "AWS::SSMGuiConnect::Preferences",
  SSMGuiConnectPreferencesProperties,
  SSMGuiConnectPreferencesAttributes
> {
  public static readonly Type = "AWS::SSMGuiConnect::Preferences";
  constructor(
    logicalId: string,
    properties: SSMGuiConnectPreferencesProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMGuiConnectPreferences.Type, properties, options);
  }
}
