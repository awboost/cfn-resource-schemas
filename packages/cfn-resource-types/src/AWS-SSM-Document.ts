import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SSM::Document resource is an SSM document in AWS Systems Manager that defines the actions that Systems Manager performs, which can be used to set up and run commands on your instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html}
 */
export type SSMDocumentProperties = {
  /**
   * A list of key and value pairs that describe attachments to a version of a document.
   * @minLength `0`
   * @maxLength `20`
   */
  Attachments?: AttachmentsSource[];
  /**
   * The content for the Systems Manager document in JSON, YAML or String format.
   */
  Content: Record<string, any> | string;
  /**
   * Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.
   */
  DocumentFormat?: "YAML" | "JSON" | "TEXT";
  /**
   * The type of document to create.
   */
  DocumentType?:
    | "ApplicationConfiguration"
    | "ApplicationConfigurationSchema"
    | "Automation"
    | "Automation.ChangeTemplate"
    | "ChangeCalendar"
    | "CloudFormation"
    | "Command"
    | "DeploymentStrategy"
    | "Package"
    | "Policy"
    | "ProblemAnalysis"
    | "ProblemAnalysisTemplate"
    | "Session"
    | "OpsPack";
  /**
   * A name for the Systems Manager document.
   * @pattern `^[a-zA-Z0-9_\-.]{3,128}$`
   */
  Name?: string;
  /**
   * A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
   * @minLength `1`
   */
  Requires?: DocumentRequires[];
  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
   * @maxLength `1000`
   */
  Tags?: Tag[];
  /**
   * Specify a target type to define the kinds of resources the document can run on.
   * @pattern `^\/[\w\.\-\:\/]*$`
   */
  TargetType?: string;
  /**
   * Update method - when set to 'Replace', the update will replace the existing document; when set to 'NewVersion', the update will create a new version.
   */
  UpdateMethod?: "Replace" | "NewVersion";
  /**
   * An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed.
   * @pattern `^[a-zA-Z0-9_\-.]{1,128}$`
   */
  VersionName?: string;
};
/**
 * Type definition for `AWS::SSM::Document.AttachmentsSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html}
 */
export type AttachmentsSource = {
  /**
   * The key of a key-value pair that identifies the location of an attachment to a document.
   */
  Key?: "SourceUrl" | "S3FileUrl" | "AttachmentReference";
  /**
   * The name of the document attachment file.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Name?: string;
  /**
   * The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify.
   * @minLength `1`
   * @maxLength `1`
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::SSM::Document.DocumentRequires`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html}
 */
export type DocumentRequires = {
  /**
   * The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9_\-.:/]{3,200}$`
   */
  Name?: string;
  /**
   * The document version required by the current document.
   * @maxLength `8`
   * @pattern `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
   */
  Version?: string;
};
/**
 * Type definition for `AWS::SSM::Document.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-tag.html}
 */
export type Tag = {
  /**
   * The name of the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key?: string;
  /**
   * The value of the tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value?: string;
};
/**
 * The AWS::SSM::Document resource is an SSM document in AWS Systems Manager that defines the actions that Systems Manager performs, which can be used to set up and run commands on your instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html}
 */
export class SSMDocument extends $Resource<
  "AWS::SSM::Document",
  SSMDocumentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::Document";
  constructor(
    logicalId: string,
    properties: SSMDocumentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMDocument.Type, properties, options);
  }
}
