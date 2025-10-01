import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::DataAutomationProject Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html}
 */
export type BedrockDataAutomationProjectProperties = {
  /**
   * Custom output configuration
   */
  CustomOutputConfiguration?: CustomOutputConfiguration;
  /**
   * KMS encryption context
   */
  KmsEncryptionContext?: Record<string, string>;
  /**
   * KMS key identifier
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * Override configuration
   */
  OverrideConfiguration?: OverrideConfiguration;
  /**
   * Description of the DataAutomationProject
   */
  ProjectDescription?: string;
  /**
   * Name of the DataAutomationProject
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  ProjectName: string;
  /**
   * Standard output configuration
   */
  StandardOutputConfiguration?: StandardOutputConfiguration;
  /**
   * List of Tags
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Bedrock::DataAutomationProject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#aws-resource-bedrock-dataautomationproject-return-values}
 */
export type BedrockDataAutomationProjectAttributes = {
  /**
   * Time Stamp
   */
  CreationTime: string;
  /**
   * Time Stamp
   */
  LastModifiedTime: string;
  /**
   * ARN of a DataAutomationProject
   * @maxLength `128`
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock:[a-zA-Z0-9-]*:(aws|[0-9]{12}):data-automation-project/[a-zA-Z0-9-]{12,36}$`
   */
  ProjectArn: string;
  /**
   * Stage of the Project
   */
  ProjectStage: DataAutomationProjectStage;
  Status: DataAutomationProjectStatus;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioExtractionCategory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audioextractioncategory.html}
 */
export type AudioExtractionCategory = {
  State: State;
  TypeConfiguration?: AudioExtractionCategoryTypeConfiguration;
  Types?: AudioExtractionCategoryType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioExtractionCategoryType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audioextractioncategorytype.html}
 */
export type AudioExtractionCategoryType =
  | "AUDIO_CONTENT_MODERATION"
  | "TRANSCRIPT"
  | "TOPIC_CONTENT_MODERATION";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioExtractionCategoryTypeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audioextractioncategorytypeconfiguration.html}
 */
export type AudioExtractionCategoryTypeConfiguration = {
  Transcript?: TranscriptConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioOverrideConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audiooverrideconfiguration.html}
 */
export type AudioOverrideConfiguration = {
  ModalityProcessing?: ModalityProcessingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioStandardExtraction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audiostandardextraction.html}
 */
export type AudioStandardExtraction = {
  Category: AudioExtractionCategory;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioStandardGenerativeField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audiostandardgenerativefield.html}
 */
export type AudioStandardGenerativeField = {
  State: State;
  Types?: AudioStandardGenerativeFieldType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioStandardGenerativeFieldType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audiostandardgenerativefieldtype.html}
 */
export type AudioStandardGenerativeFieldType =
  | "AUDIO_SUMMARY"
  | "IAB"
  | "TOPIC_SUMMARY";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.AudioStandardOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-audiostandardoutputconfiguration.html}
 */
export type AudioStandardOutputConfiguration = {
  Extraction?: AudioStandardExtraction;
  GenerativeField?: AudioStandardGenerativeField;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.BlueprintItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-blueprintitem.html}
 */
export type BlueprintItem = {
  /**
   * ARN of a Blueprint
   * @maxLength `128`
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock:[a-zA-Z0-9-]*:(aws|[0-9]{12}):blueprint/(bedrock-data-automation-public-[a-zA-Z0-9-_]{1,30}|[a-zA-Z0-9-]{12,36})$`
   */
  BlueprintArn: string;
  /**
   * Stage of the Blueprint
   */
  BlueprintStage?: BlueprintStage;
  /**
   * Blueprint Version
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[0-9]*$`
   */
  BlueprintVersion?: string;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.BlueprintStage`.
 * Stage of the Blueprint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-blueprintstage.html}
 */
export type BlueprintStage = "DEVELOPMENT" | "LIVE";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ChannelLabelingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-channellabelingconfiguration.html}
 */
export type ChannelLabelingConfiguration = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.CustomOutputConfiguration`.
 * Custom output configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-customoutputconfiguration.html}
 */
export type CustomOutputConfiguration = {
  Blueprints?: BlueprintItem[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DataAutomationProjectStage`.
 * Stage of the Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-dataautomationprojectstage.html}
 */
export type DataAutomationProjectStage = "DEVELOPMENT" | "LIVE";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DataAutomationProjectStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-dataautomationprojectstatus.html}
 */
export type DataAutomationProjectStatus =
  | "COMPLETED"
  | "IN_PROGRESS"
  | "FAILED";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DesiredModality`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-desiredmodality.html}
 */
export type DesiredModality = "DOCUMENT" | "IMAGE" | "VIDEO" | "AUDIO";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentBoundingBox`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentboundingbox.html}
 */
export type DocumentBoundingBox = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentExtractionGranularity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentextractiongranularity.html}
 */
export type DocumentExtractionGranularity = {
  Types?: DocumentExtractionGranularityType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentExtractionGranularityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentextractiongranularitytype.html}
 */
export type DocumentExtractionGranularityType =
  | "DOCUMENT"
  | "PAGE"
  | "ELEMENT"
  | "WORD"
  | "LINE";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentOutputAdditionalFileFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentoutputadditionalfileformat.html}
 */
export type DocumentOutputAdditionalFileFormat = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentOutputFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentoutputformat.html}
 */
export type DocumentOutputFormat = {
  AdditionalFileFormat: DocumentOutputAdditionalFileFormat;
  TextFormat: DocumentOutputTextFormat;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentOutputTextFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentoutputtextformat.html}
 */
export type DocumentOutputTextFormat = {
  Types?: DocumentOutputTextFormatType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentOutputTextFormatType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentoutputtextformattype.html}
 */
export type DocumentOutputTextFormatType =
  | "PLAIN_TEXT"
  | "MARKDOWN"
  | "HTML"
  | "CSV";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentOverrideConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentoverrideconfiguration.html}
 */
export type DocumentOverrideConfiguration = {
  ModalityProcessing?: ModalityProcessingConfiguration;
  Splitter?: SplitterConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentStandardExtraction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentstandardextraction.html}
 */
export type DocumentStandardExtraction = {
  BoundingBox: DocumentBoundingBox;
  Granularity: DocumentExtractionGranularity;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentStandardGenerativeField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentstandardgenerativefield.html}
 */
export type DocumentStandardGenerativeField = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.DocumentStandardOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-documentstandardoutputconfiguration.html}
 */
export type DocumentStandardOutputConfiguration = {
  Extraction?: DocumentStandardExtraction;
  GenerativeField?: DocumentStandardGenerativeField;
  OutputFormat?: DocumentOutputFormat;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageBoundingBox`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imageboundingbox.html}
 */
export type ImageBoundingBox = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageExtractionCategory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imageextractioncategory.html}
 */
export type ImageExtractionCategory = {
  State: State;
  Types?: ImageExtractionCategoryType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageExtractionCategoryType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imageextractioncategorytype.html}
 */
export type ImageExtractionCategoryType =
  | "CONTENT_MODERATION"
  | "TEXT_DETECTION"
  | "LOGOS";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageOverrideConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imageoverrideconfiguration.html}
 */
export type ImageOverrideConfiguration = {
  ModalityProcessing?: ModalityProcessingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageStandardExtraction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imagestandardextraction.html}
 */
export type ImageStandardExtraction = {
  BoundingBox: ImageBoundingBox;
  Category: ImageExtractionCategory;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageStandardGenerativeField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imagestandardgenerativefield.html}
 */
export type ImageStandardGenerativeField = {
  State: State;
  Types?: ImageStandardGenerativeFieldType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageStandardGenerativeFieldType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imagestandardgenerativefieldtype.html}
 */
export type ImageStandardGenerativeFieldType = "IMAGE_SUMMARY" | "IAB";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ImageStandardOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-imagestandardoutputconfiguration.html}
 */
export type ImageStandardOutputConfiguration = {
  Extraction?: ImageStandardExtraction;
  GenerativeField?: ImageStandardGenerativeField;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ModalityProcessingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-modalityprocessingconfiguration.html}
 */
export type ModalityProcessingConfiguration = {
  State?: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.ModalityRoutingConfiguration`.
 * Modality routing configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-modalityroutingconfiguration.html}
 */
export type ModalityRoutingConfiguration = {
  jpeg?: DesiredModality;
  mov?: DesiredModality;
  mp4?: DesiredModality;
  png?: DesiredModality;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.OverrideConfiguration`.
 * Override configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-overrideconfiguration.html}
 */
export type OverrideConfiguration = {
  Audio?: AudioOverrideConfiguration;
  Document?: DocumentOverrideConfiguration;
  Image?: ImageOverrideConfiguration;
  /**
   * Modality routing configuration
   */
  ModalityRouting?: ModalityRoutingConfiguration;
  Video?: VideoOverrideConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.SpeakerLabelingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-speakerlabelingconfiguration.html}
 */
export type SpeakerLabelingConfiguration = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.SplitterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-splitterconfiguration.html}
 */
export type SplitterConfiguration = {
  State?: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.StandardOutputConfiguration`.
 * Standard output configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-standardoutputconfiguration.html}
 */
export type StandardOutputConfiguration = {
  Audio?: AudioStandardOutputConfiguration;
  Document?: DocumentStandardOutputConfiguration;
  Image?: ImageStandardOutputConfiguration;
  Video?: VideoStandardOutputConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.State`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-state.html}
 */
export type State = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-tag.html}
 */
export type Tag = {
  /**
   * Key for the tag
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * Value for the tag
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.TranscriptConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-transcriptconfiguration.html}
 */
export type TranscriptConfiguration = {
  ChannelLabeling?: ChannelLabelingConfiguration;
  SpeakerLabeling?: SpeakerLabelingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoBoundingBox`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videoboundingbox.html}
 */
export type VideoBoundingBox = {
  State: State;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoExtractionCategory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videoextractioncategory.html}
 */
export type VideoExtractionCategory = {
  State: State;
  Types?: VideoExtractionCategoryType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoExtractionCategoryType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videoextractioncategorytype.html}
 */
export type VideoExtractionCategoryType =
  | "CONTENT_MODERATION"
  | "TEXT_DETECTION"
  | "TRANSCRIPT"
  | "LOGOS";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoOverrideConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videooverrideconfiguration.html}
 */
export type VideoOverrideConfiguration = {
  ModalityProcessing?: ModalityProcessingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoStandardExtraction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videostandardextraction.html}
 */
export type VideoStandardExtraction = {
  BoundingBox: VideoBoundingBox;
  Category: VideoExtractionCategory;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoStandardGenerativeField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videostandardgenerativefield.html}
 */
export type VideoStandardGenerativeField = {
  State: State;
  Types?: VideoStandardGenerativeFieldType[];
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoStandardGenerativeFieldType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videostandardgenerativefieldtype.html}
 */
export type VideoStandardGenerativeFieldType =
  | "VIDEO_SUMMARY"
  | "IAB"
  | "CHAPTER_SUMMARY";
/**
 * Type definition for `AWS::Bedrock::DataAutomationProject.VideoStandardOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationproject-videostandardoutputconfiguration.html}
 */
export type VideoStandardOutputConfiguration = {
  Extraction?: VideoStandardExtraction;
  GenerativeField?: VideoStandardGenerativeField;
};
/**
 * Definition of AWS::Bedrock::DataAutomationProject Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html}
 */
export class BedrockDataAutomationProject extends $Resource<
  "AWS::Bedrock::DataAutomationProject",
  BedrockDataAutomationProjectProperties,
  BedrockDataAutomationProjectAttributes
> {
  public static readonly Type = "AWS::Bedrock::DataAutomationProject";
  constructor(
    logicalId: string,
    properties: BedrockDataAutomationProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockDataAutomationProject.Type, properties, options);
  }
}
