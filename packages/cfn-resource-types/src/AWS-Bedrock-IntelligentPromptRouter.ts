import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::IntelligentPromptRouter Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html}
 */
export type BedrockIntelligentPromptRouterProperties = {
  /**
   * Description of the Prompt Router.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^([0-9a-zA-Z:.][ _-]?)+$`
   */
  Description?: string;
  /**
   * Model configuration
   */
  FallbackModel: PromptRouterTargetModel;
  /**
   * List of model configuration
   */
  Models: PromptRouterTargetModel[];
  /**
   * Name of the Prompt Router.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^([0-9a-zA-Z][ _-]?)+$`
   */
  PromptRouterName: string;
  /**
   * Represents the criteria used for routing requests.
   */
  RoutingCriteria: RoutingCriteria;
  /**
   * List of Tags
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Bedrock::IntelligentPromptRouter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#aws-resource-bedrock-intelligentpromptrouter-return-values}
 */
export type BedrockIntelligentPromptRouterAttributes = {
  /**
   * Time Stamp
   */
  CreatedAt: string;
  /**
   * Arn of the Prompt Router.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:(default-)?prompt-router/[a-zA-Z0-9-:.]+$`
   */
  PromptRouterArn: string;
  /**
   * Status of a PromptRouter
   */
  Status: PromptRouterStatus;
  /**
   * Type of a Prompt Router
   */
  Type: PromptRouterType;
  /**
   * Time Stamp
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::IntelligentPromptRouter.PromptRouterStatus`.
 * Status of a PromptRouter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-intelligentpromptrouter-promptrouterstatus.html}
 */
export type PromptRouterStatus = "AVAILABLE";
/**
 * Type definition for `AWS::Bedrock::IntelligentPromptRouter.PromptRouterTargetModel`.
 * Model configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-intelligentpromptrouter-promptroutertargetmodel.html}
 */
export type PromptRouterTargetModel = {
  /**
   * Arn of underlying model which are added in the Prompt Router.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `(^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/[a-z0-9-]{1,63}[.]{1}([a-z0-9-]{1,63}[.]){0,2}[a-z0-9-]{1,63}([:][a-z0-9-]{1,63}){0,2})|(^arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{0,20}):(|[0-9]{12}):(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+)$`
   */
  ModelArn: string;
};
/**
 * Type definition for `AWS::Bedrock::IntelligentPromptRouter.PromptRouterType`.
 * Type of a Prompt Router
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-intelligentpromptrouter-promptroutertype.html}
 */
export type PromptRouterType = "custom" | "default";
/**
 * Type definition for `AWS::Bedrock::IntelligentPromptRouter.RoutingCriteria`.
 * Represents the criteria used for routing requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-intelligentpromptrouter-routingcriteria.html}
 */
export type RoutingCriteria = {
  /**
   * @min `0`
   * @max `100`
   */
  ResponseQualityDifference: number;
};
/**
 * Type definition for `AWS::Bedrock::IntelligentPromptRouter.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-intelligentpromptrouter-tag.html}
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
 * Definition of AWS::Bedrock::IntelligentPromptRouter Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html}
 */
export class BedrockIntelligentPromptRouter extends $Resource<
  "AWS::Bedrock::IntelligentPromptRouter",
  BedrockIntelligentPromptRouterProperties,
  BedrockIntelligentPromptRouterAttributes
> {
  public static readonly Type = "AWS::Bedrock::IntelligentPromptRouter";
  constructor(
    logicalId: string,
    properties: BedrockIntelligentPromptRouterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockIntelligentPromptRouter.Type, properties, options);
  }
}
