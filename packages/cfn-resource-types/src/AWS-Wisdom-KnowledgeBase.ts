import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Wisdom::KnowledgeBase Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html}
 */
export type WisdomKnowledgeBaseProperties = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Description?: string;
  KnowledgeBaseType: KnowledgeBaseType;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  RenderingConfiguration?: RenderingConfiguration;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  SourceConfiguration?: SourceConfiguration;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Wisdom::KnowledgeBase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#aws-resource-wisdom-knowledgebase-return-values}
 */
export type WisdomKnowledgeBaseAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  KnowledgeBaseArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  KnowledgeBaseId: string;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.AppIntegrationsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html}
 */
export type AppIntegrationsConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:[a-z-]+?:[a-z-]+?:[a-z0-9-]*?:([0-9]{12})?:[a-zA-Z0-9-:/]+$`
   */
  AppIntegrationArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  ObjectFields?: string[];
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.KnowledgeBaseType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-knowledgebasetype.html}
 */
export type KnowledgeBaseType = "EXTERNAL" | "CUSTOM";
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.RenderingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-renderingconfiguration.html}
 */
export type RenderingConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  TemplateUri?: string;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.ServerSideEncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.html}
 */
export type ServerSideEncryptionConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.SourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-sourceconfiguration.html}
 */
export type SourceConfiguration = {
  AppIntegrations?: AppIntegrationsConfiguration;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Wisdom::KnowledgeBase Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html}
 */
export class WisdomKnowledgeBase extends $Resource<
  "AWS::Wisdom::KnowledgeBase",
  WisdomKnowledgeBaseProperties,
  WisdomKnowledgeBaseAttributes
> {
  public static readonly Type = "AWS::Wisdom::KnowledgeBase";
  public static readonly AttributeNames = [
    "KnowledgeBaseArn" as const,
    "KnowledgeBaseId" as const,
  ];
  constructor(
    logicalId: string,
    properties: WisdomKnowledgeBaseProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WisdomKnowledgeBase.Type,
      properties,
      WisdomKnowledgeBase.AttributeNames,
      options,
    );
  }
}
