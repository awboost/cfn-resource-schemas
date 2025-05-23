import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  VectorIngestionConfiguration?: VectorIngestionConfiguration;
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
 * Type definition for `AWS::Wisdom::KnowledgeBase.BedrockFoundationModelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-bedrockfoundationmodelconfiguration.html}
 */
export type BedrockFoundationModelConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model\/anthropic.claude-3-haiku-20240307-v1:0$`
   */
  ModelArn: string;
  ParsingPrompt?: {
    /**
     * @minLength `1`
     * @maxLength `10000`
     */
    ParsingPromptText: string;
  };
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.FixedSizeChunkingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-fixedsizechunkingconfiguration.html}
 */
export type FixedSizeChunkingConfiguration = {
  /**
   * @min `1`
   */
  MaxTokens: number;
  /**
   * @min `1`
   * @max `99`
   */
  OverlapPercentage: number;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.HierarchicalChunkingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-hierarchicalchunkingconfiguration.html}
 */
export type HierarchicalChunkingConfiguration = {
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  LevelConfigurations: HierarchicalChunkingLevelConfiguration[];
  /**
   * @min `1`
   */
  OverlapTokens: number;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.HierarchicalChunkingLevelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-hierarchicalchunkinglevelconfiguration.html}
 */
export type HierarchicalChunkingLevelConfiguration = {
  /**
   * @min `1`
   * @max `8192`
   */
  MaxTokens: number;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.KnowledgeBaseType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-knowledgebasetype.html}
 */
export type KnowledgeBaseType =
  | "EXTERNAL"
  | "CUSTOM"
  | "MESSAGE_TEMPLATES"
  | "MANAGED"
  | "QUICK_RESPONSES";
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.ManagedSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-managedsourceconfiguration.html}
 */
export type ManagedSourceConfiguration = {
  WebCrawlerConfiguration: WebCrawlerConfiguration;
};
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
 * Type definition for `AWS::Wisdom::KnowledgeBase.SeedUrl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-seedurl.html}
 */
export type SeedUrl = {
  /**
   * @pattern `^https?://[A-Za-z0-9][^\s]*$`
   */
  Url?: string;
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.SemanticChunkingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-semanticchunkingconfiguration.html}
 */
export type SemanticChunkingConfiguration = {
  /**
   * @min `50`
   * @max `99`
   */
  BreakpointPercentileThreshold: number;
  /**
   * @min `0`
   * @max `1`
   */
  BufferSize: number;
  /**
   * @min `1`
   */
  MaxTokens: number;
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
export type SourceConfiguration =
  | {
      AppIntegrations: AppIntegrationsConfiguration;
    }
  | {
      ManagedSourceConfiguration: ManagedSourceConfiguration;
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
 * Type definition for `AWS::Wisdom::KnowledgeBase.VectorIngestionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-vectoringestionconfiguration.html}
 */
export type VectorIngestionConfiguration = {
  ChunkingConfiguration?: {
    ChunkingStrategy: "FIXED_SIZE" | "NONE" | "HIERARCHICAL" | "SEMANTIC";
    FixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
    HierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
    SemanticChunkingConfiguration?: SemanticChunkingConfiguration;
  };
  ParsingConfiguration?: {
    BedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
    ParsingStrategy: "BEDROCK_FOUNDATION_MODEL";
  };
};
/**
 * Type definition for `AWS::Wisdom::KnowledgeBase.WebCrawlerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-webcrawlerconfiguration.html}
 */
export type WebCrawlerConfiguration = {
  CrawlerLimits?: {
    /**
     * @min `1`
     * @max `3000`
     */
    RateLimit?: number;
  };
  /**
   * @minLength `1`
   * @maxLength `25`
   */
  ExclusionFilters?: string[];
  /**
   * @minLength `1`
   * @maxLength `25`
   */
  InclusionFilters?: string[];
  Scope?: "HOST_ONLY" | "SUBDOMAINS";
  UrlConfiguration: {
    /**
     * @minLength `1`
     * @maxLength `100`
     */
    SeedUrls?: SeedUrl[];
  };
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
  constructor(
    logicalId: string,
    properties: WisdomKnowledgeBaseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomKnowledgeBase.Type, properties, options);
  }
}
