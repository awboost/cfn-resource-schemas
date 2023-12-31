import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::AccountAuditConfiguration`.
 * Configures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html}
 */
export type IoTAccountAuditConfigurationProperties = {
  /**
   * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
   * @minLength `12`
   * @maxLength `12`
   */
  AccountId: string;
  /**
   * Specifies which audit checks are enabled and disabled for this account.
   */
  AuditCheckConfigurations: AuditCheckConfigurations;
  /**
   * Information about the targets to which audit notifications are sent.
   */
  AuditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
  /**
   * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::AccountAuditConfiguration.AuditCheckConfiguration`.
 * The configuration for a specific audit check.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html}
 */
export type AuditCheckConfiguration = {
  /**
   * True if the check is enabled.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::IoT::AccountAuditConfiguration.AuditCheckConfigurations`.
 * Specifies which audit checks are enabled and disabled for this account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html}
 */
export type AuditCheckConfigurations = {
  /**
   * The configuration for a specific audit check.
   */
  AuthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  CaCertificateExpiringCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  CaCertificateKeyQualityCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  ConflictingClientIdsCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  DeviceCertificateExpiringCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  DeviceCertificateKeyQualityCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  DeviceCertificateSharedCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  IntermediateCaRevokedForActiveDeviceCertificatesCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  IoTPolicyPotentialMisConfigurationCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  IotPolicyOverlyPermissiveCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  IotRoleAliasAllowsAccessToUnusedServicesCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  IotRoleAliasOverlyPermissiveCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  LoggingDisabledCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  RevokedCaCertificateStillActiveCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  RevokedDeviceCertificateStillActiveCheck?: AuditCheckConfiguration;
  /**
   * The configuration for a specific audit check.
   */
  UnauthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration;
};
/**
 * Type definition for `AWS::IoT::AccountAuditConfiguration.AuditNotificationTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html}
 */
export type AuditNotificationTarget = {
  /**
   * True if notifications to the target are enabled.
   */
  Enabled?: boolean;
  /**
   * The ARN of the role that grants permission to send notifications to the target.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn?: string;
  /**
   * The ARN of the target (SNS topic) to which audit notifications are sent.
   * @maxLength `2048`
   */
  TargetArn?: string;
};
/**
 * Type definition for `AWS::IoT::AccountAuditConfiguration.AuditNotificationTargetConfigurations`.
 * Information about the targets to which audit notifications are sent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.html}
 */
export type AuditNotificationTargetConfigurations = {
  Sns?: AuditNotificationTarget;
};
/**
 * Resource type definition for `AWS::IoT::AccountAuditConfiguration`.
 * Configures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html}
 */
export class IoTAccountAuditConfiguration extends $Resource<
  "AWS::IoT::AccountAuditConfiguration",
  IoTAccountAuditConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoT::AccountAuditConfiguration";
  constructor(
    logicalId: string,
    properties: IoTAccountAuditConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTAccountAuditConfiguration.Type, properties, options);
  }
}
