import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSMGuiConnect::Preferences
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html}
 */
export type SSMGuiConnectPreferencesProperties = {
  IdleConnection?: IdleConnectionPreferences[];
};
/**
 * Attribute type definition for `AWS::SSMGuiConnect::Preferences`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#aws-resource-ssmguiconnect-preferences-return-values}
 */
export type SSMGuiConnectPreferencesAttributes = {
  AccountId: string;
  Id: string;
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.IdleConnectionAlert`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmguiconnect-preferences-idleconnectionalert.html}
 */
export type IdleConnectionAlert = {
  Type?: string;
  Value: number;
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.IdleConnectionPreferences`.
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
  Type?: string;
  Value: number;
};
/**
 * Resource Type definition for AWS::SSMGuiConnect::Preferences
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
