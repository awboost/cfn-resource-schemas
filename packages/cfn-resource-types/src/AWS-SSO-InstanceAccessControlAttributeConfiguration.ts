import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSO::InstanceAccessControlAttributeConfiguration`.
 * Resource Type definition for SSO InstanceAccessControlAttributeConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html}
 */
export type SSOInstanceAccessControlAttributeConfigurationProperties = {
  /**
   * @maxLength `50`
   */
  AccessControlAttributes?: AccessControlAttribute[];
  /**
   * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
   */
  InstanceAccessControlAttributeConfiguration?: {
    /**
     * @maxLength `50`
     */
    AccessControlAttributes: AccessControlAttribute[];
  };
  /**
   * The ARN of the AWS SSO instance under which the operation will be executed.
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}`
   */
  InstanceArn: string;
};
/**
 * Type definition for `AWS::SSO::InstanceAccessControlAttributeConfiguration.AccessControlAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html}
 */
export type AccessControlAttribute = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\p{L}\p{Z}\p{N}_.:\/=+\-@]+`
   */
  Key: string;
  Value: AccessControlAttributeValue;
};
/**
 * Type definition for `AWS::SSO::InstanceAccessControlAttributeConfiguration.AccessControlAttributeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.html}
 */
export type AccessControlAttributeValue = {
  /**
   * @maxLength `1`
   */
  Source: string[];
};
/**
 * Resource type definition for `AWS::SSO::InstanceAccessControlAttributeConfiguration`.
 * Resource Type definition for SSO InstanceAccessControlAttributeConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html}
 */
export class SSOInstanceAccessControlAttributeConfiguration extends $Resource<
  "AWS::SSO::InstanceAccessControlAttributeConfiguration",
  SSOInstanceAccessControlAttributeConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::SSO::InstanceAccessControlAttributeConfiguration";
  constructor(
    logicalId: string,
    properties: SSOInstanceAccessControlAttributeConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSOInstanceAccessControlAttributeConfiguration.Type,
      properties,
      options,
    );
  }
}
