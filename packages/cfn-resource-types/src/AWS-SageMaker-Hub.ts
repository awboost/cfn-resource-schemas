import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::SageMaker::Hub
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-hub.html}
 */
export type SageMakerHubProperties = {
  /**
   * A description of the hub.
   * @minLength `0`
   * @maxLength `1023`
   * @pattern `.*`
   */
  HubDescription: string;
  /**
   * The display name of the hub.
   * @minLength `0`
   * @maxLength `255`
   * @pattern `.*`
   */
  HubDisplayName?: string;
  /**
   * The name of the hub.
   * @minLength `0`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  HubName: string;
  /**
   * The searchable keywords for the hub.
   * @minLength `0`
   * @maxLength `50`
   */
  HubSearchKeywords?: string[];
  /**
   * The Amazon S3 storage configuration for the hub.
   */
  S3StorageConfig?: {
    /**
     * The Amazon S3 bucket prefix for hosting hub content.
     * @minLength `0`
     * @maxLength `1024`
     * @pattern `^(https|s3)://([^/]+)/?(.*)$`
     */
    S3OutputPath?: string;
  };
  /**
   * Tags to associate with the hub.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::Hub`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-hub.html#aws-resource-sagemaker-hub-return-values}
 */
export type SageMakerHubAttributes = {
  /**
   * The date and time that the hub was created.
   */
  CreationTime: string;
  /**
   * The Amazon Resource Name (ARN) of the hub.
   * @maxLength `255`
   * @pattern `.*`
   */
  HubArn: string;
  /**
   * The status of the hub.
   */
  HubStatus:
    | "InService"
    | "Creating"
    | "Updating"
    | "Deleting"
    | "CreateFailed"
    | "UpdateFailed"
    | "DeleteFailed";
  /**
   * The date and time that the hub was last modified.
   */
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::SageMaker::Hub.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-hub-tag.html}
 */
export type Tag = {
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
 * Resource type definition for AWS::SageMaker::Hub
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-hub.html}
 */
export class SageMakerHub extends $Resource<
  "AWS::SageMaker::Hub",
  SageMakerHubProperties,
  SageMakerHubAttributes
> {
  public static readonly Type = "AWS::SageMaker::Hub";
  constructor(
    logicalId: string,
    properties: SageMakerHubProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerHub.Type, properties, options);
  }
}
