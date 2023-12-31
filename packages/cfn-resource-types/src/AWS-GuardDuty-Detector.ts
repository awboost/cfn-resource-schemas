import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::Detector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html}
 */
export type GuardDutyDetectorProperties = {
  DataSources?: CFNDataSourceConfigurations;
  Enable: boolean;
  Features?: CFNFeatureConfiguration[];
  FindingPublishingFrequency?: string;
  Tags?: TagItem[];
};
/**
 * Attribute type definition for `AWS::GuardDuty::Detector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#aws-resource-guardduty-detector-return-values}
 */
export type GuardDutyDetectorAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNDataSourceConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html}
 */
export type CFNDataSourceConfigurations = {
  Kubernetes?: CFNKubernetesConfiguration;
  MalwareProtection?: CFNMalwareProtectionConfiguration;
  S3Logs?: CFNS3LogsConfiguration;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNFeatureAdditionalConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureadditionalconfiguration.html}
 */
export type CFNFeatureAdditionalConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Status?: string;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNFeatureConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnfeatureconfiguration.html}
 */
export type CFNFeatureConfiguration = {
  AdditionalConfiguration?: CFNFeatureAdditionalConfiguration[];
  /**
   * @maxLength `128`
   */
  Name: string;
  Status: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNKubernetesAuditLogsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.html}
 */
export type CFNKubernetesAuditLogsConfiguration = {
  Enable: boolean;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNKubernetesConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesconfiguration.html}
 */
export type CFNKubernetesConfiguration = {
  AuditLogs: CFNKubernetesAuditLogsConfiguration;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNMalwareProtectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.html}
 */
export type CFNMalwareProtectionConfiguration = {
  ScanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfiguration;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNS3LogsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html}
 */
export type CFNS3LogsConfiguration = {
  Enable: boolean;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.CFNScanEc2InstanceWithFindingsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.html}
 */
export type CFNScanEc2InstanceWithFindingsConfiguration = {
  EbsVolumes?: boolean;
};
/**
 * Type definition for `AWS::GuardDuty::Detector.TagItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-tagitem.html}
 */
export type TagItem = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::GuardDuty::Detector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html}
 */
export class GuardDutyDetector extends $Resource<
  "AWS::GuardDuty::Detector",
  GuardDutyDetectorProperties,
  GuardDutyDetectorAttributes
> {
  public static readonly Type = "AWS::GuardDuty::Detector";
  constructor(
    logicalId: string,
    properties: GuardDutyDetectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyDetector.Type, properties, options);
  }
}
