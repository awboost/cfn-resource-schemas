import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::ApplicationInferenceProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html}
 */
export type BedrockApplicationInferenceProfileProperties = {
  /**
   * Description of the inference profile
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^([0-9a-zA-Z:.][ _-]?)+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^([0-9a-zA-Z][ _-]?)+$`
   */
  InferenceProfileName: string;
  ModelSource?: InferenceProfileModelSource;
  /**
   * List of Tags
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Bedrock::ApplicationInferenceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#aws-resource-bedrock-applicationinferenceprofile-return-values}
 */
export type BedrockApplicationInferenceProfileAttributes = {
  /**
   * Time Stamp
   */
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{0,20}):(|[0-9]{12}):(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+$`
   */
  InferenceProfileArn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-:.]+$`
   */
  InferenceProfileId: string;
  /**
   * Inference profile identifier. Supports both system-defined inference profile ids, and inference profile ARNs.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{0,20}):(|[0-9]{12}):(inference-profile|application-inference-profile)/)?[a-zA-Z0-9-:.]+$`
   */
  InferenceProfileIdentifier: string;
  /**
   * List of model configuration
   * @minLength `1`
   * @maxLength `5`
   */
  Models: {
    /**
     * ARN for Foundation Models in Bedrock. These models can be used as base models for model customization jobs
     * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/[a-z0-9-]{1,63}[.]{1}([a-z0-9-]{1,63}[.]){0,2}[a-z0-9-]{1,63}([:][a-z0-9-]{1,63}){0,2}$`
     */
    ModelArn: string;
  }[];
  /**
   * Status of the Inference Profile
   */
  Status: InferenceProfileStatus;
  /**
   * Type of the Inference Profile
   */
  Type: InferenceProfileType;
  /**
   * Time Stamp
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::ApplicationInferenceProfile.InferenceProfileModel`.
 * Model configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodel.html}
 */
export type InferenceProfileModel = {
  /**
   * ARN for Foundation Models in Bedrock. These models can be used as base models for model customization jobs
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/[a-z0-9-]{1,63}[.]{1}([a-z0-9-]{1,63}[.]){0,2}[a-z0-9-]{1,63}([:][a-z0-9-]{1,63}){0,2}$`
   */
  ModelArn?: string;
};
/**
 * Type definition for `AWS::Bedrock::ApplicationInferenceProfile.InferenceProfileModelSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodelsource.html}
 */
export type InferenceProfileModelSource = {
  /**
     * Source arns for a custom inference profile to copy its regional load balancing config from. This
    can either be a foundation model or predefined inference profile ARN.
     * @minLength `1`
     * @maxLength `2048`
     * @pattern `^arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{0,20}):(|[0-9]{12}):(inference-profile|foundation-model)/[a-zA-Z0-9-:.]+$`
     */
  CopyFrom: string;
};
/**
 * Type definition for `AWS::Bedrock::ApplicationInferenceProfile.InferenceProfileStatus`.
 * Status of the Inference Profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilestatus.html}
 */
export type InferenceProfileStatus = "ACTIVE";
/**
 * Type definition for `AWS::Bedrock::ApplicationInferenceProfile.InferenceProfileType`.
 * Type of the Inference Profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofiletype.html}
 */
export type InferenceProfileType = "APPLICATION" | "SYSTEM_DEFINED";
/**
 * Type definition for `AWS::Bedrock::ApplicationInferenceProfile.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-tag.html}
 */
export type Tag = {
  /**
   * Tag Key
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * Tag Value
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Definition of AWS::Bedrock::ApplicationInferenceProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html}
 */
export class BedrockApplicationInferenceProfile extends $Resource<
  "AWS::Bedrock::ApplicationInferenceProfile",
  BedrockApplicationInferenceProfileProperties,
  BedrockApplicationInferenceProfileAttributes
> {
  public static readonly Type = "AWS::Bedrock::ApplicationInferenceProfile";
  constructor(
    logicalId: string,
    properties: BedrockApplicationInferenceProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockApplicationInferenceProfile.Type,
      properties,
      options,
    );
  }
}
