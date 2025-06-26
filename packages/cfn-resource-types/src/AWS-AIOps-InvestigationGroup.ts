import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::AIOps::InvestigationGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aiops-investigationgroup.html}
 */
export type AIOpsInvestigationGroupProperties = {
  /**
   * An array of key-value pairs of notification channels to apply to this resource.
   */
  ChatbotNotificationChannels?: ChatbotNotificationChannel[];
  /**
   * An array of cross account configurations.
   */
  CrossAccountConfigurations?: CrossAccountConfiguration[];
  EncryptionConfig?: EncryptionConfigMap;
  /**
   * Investigation Group policy
   */
  InvestigationGroupPolicy?: string;
  /**
   * Flag to enable cloud trail history
   */
  IsCloudTrailEventHistoryEnabled?: boolean;
  /**
   * User friendly name for resources.
   * @minLength `1`
   * @maxLength `512`
   */
  Name: string;
  /**
   * The number of days to retain the investigation group
   */
  RetentionInDays?: number;
  /**
   * The Investigation Role's ARN.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn?: string;
  TagKeyBoundaries?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AIOps::InvestigationGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aiops-investigationgroup.html#aws-resource-aiops-investigationgroup-return-values}
 */
export type AIOpsInvestigationGroupAttributes = {
  /**
   * The Investigation Group's ARN.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * The timestamp value.
   */
  CreatedAt: string;
  /**
   * User friendly name for resources.
   * @minLength `1`
   * @maxLength `512`
   */
  CreatedBy: string;
  /**
   * User friendly name for resources.
   * @minLength `1`
   * @maxLength `512`
   */
  LastModifiedAt: string;
  /**
   * User friendly name for resources.
   * @minLength `1`
   * @maxLength `512`
   */
  LastModifiedBy: string;
};
/**
 * Type definition for `AWS::AIOps::InvestigationGroup.ChatbotNotificationChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aiops-investigationgroup-chatbotnotificationchannel.html}
 */
export type ChatbotNotificationChannel = {
  ChatConfigurationArns?: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  SNSTopicArn?: string;
};
/**
 * Type definition for `AWS::AIOps::InvestigationGroup.CrossAccountConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aiops-investigationgroup-crossaccountconfiguration.html}
 */
export type CrossAccountConfiguration = {
  /**
   * The Investigation Role's ARN.
   * @minLength `20`
   * @maxLength `2048`
   */
  SourceRoleArn?: string;
};
/**
 * Type definition for `AWS::AIOps::InvestigationGroup.EncryptionConfigMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aiops-investigationgroup-encryptionconfigmap.html}
 */
export type EncryptionConfigMap = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  EncryptionConfigurationType?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::AIOps::InvestigationGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aiops-investigationgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::AIOps::InvestigationGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aiops-investigationgroup.html}
 */
export class AIOpsInvestigationGroup extends $Resource<
  "AWS::AIOps::InvestigationGroup",
  AIOpsInvestigationGroupProperties,
  AIOpsInvestigationGroupAttributes
> {
  public static readonly Type = "AWS::AIOps::InvestigationGroup";
  constructor(
    logicalId: string,
    properties: AIOpsInvestigationGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AIOpsInvestigationGroup.Type, properties, options);
  }
}
