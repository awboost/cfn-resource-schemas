import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::Blueprint Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-blueprint.html}
 */
export type BedrockBlueprintProperties = {
  /**
   * Name of the Blueprint
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  BlueprintName: string;
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
   * Schema of the blueprint
   */
  Schema: Record<string, any>;
  /**
   * List of Tags
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Modality Type
   */
  Type: "DOCUMENT" | "IMAGE" | "AUDIO" | "VIDEO";
};
/**
 * Attribute type definition for `AWS::Bedrock::Blueprint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-blueprint.html#aws-resource-bedrock-blueprint-return-values}
 */
export type BedrockBlueprintAttributes = {
  /**
   * ARN of a Blueprint
   * @maxLength `128`
   * @pattern `^arn:aws(|-cn|-us-gov|-iso|-iso-[a-z]):bedrock:[a-zA-Z0-9-]*:(aws|[0-9]{12}):blueprint/(bedrock-data-automation-public-[a-zA-Z0-9-_]{1,30}|[a-zA-Z0-9-]{12,36})$`
   */
  BlueprintArn: string;
  /**
   * Stage of the Blueprint
   */
  BlueprintStage: "DEVELOPMENT" | "LIVE";
  /**
   * Creation timestamp
   */
  CreationTime: string;
  /**
   * Last modified timestamp
   */
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::Bedrock::Blueprint.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-blueprint-tag.html}
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
 * Definition of AWS::Bedrock::Blueprint Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-blueprint.html}
 */
export class BedrockBlueprint extends $Resource<
  "AWS::Bedrock::Blueprint",
  BedrockBlueprintProperties,
  BedrockBlueprintAttributes
> {
  public static readonly Type = "AWS::Bedrock::Blueprint";
  constructor(
    logicalId: string,
    properties: BedrockBlueprintProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockBlueprint.Type, properties, options);
  }
}
