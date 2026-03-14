import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ElementalInference::Feed`.
 * Represents a feed that receives media for inference processing
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elementalinference-feed.html}
 */
export type ElementalInferenceFeedProperties = {
  /**
   * @pattern `^[a-zA-Z0-9]([a-zA-Z0-9-_]{0,126}[a-zA-Z0-9])?$`
   */
  Name: string;
  Outputs: GetOutput[];
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::ElementalInference::Feed`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elementalinference-feed.html#aws-resource-elementalinference-feed-return-values}
 */
export type ElementalInferenceFeedAttributes = {
  Arn: string;
  DataEndpoints: string[];
  /**
   * @pattern `^[a-z0-9]{19}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::ElementalInference::Feed.ClippingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-feed-clippingconfig.html}
 */
export type ClippingConfig = {
  /**
   * @maxLength `1024`
   * @pattern `^[\w \-\.',@:;]*$`
   */
  CallbackMetadata?: string;
};
/**
 * Type definition for `AWS::ElementalInference::Feed.CroppingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-feed-croppingconfig.html}
 */
export type CroppingConfig = Record<string, any>;
/**
 * Type definition for `AWS::ElementalInference::Feed.GetOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-feed-getoutput.html}
 */
export type GetOutput = {
  /**
   * @maxLength `1024`
   * @pattern `^[\w \-\.',@:;]*$`
   */
  Description?: string;
  /**
   * @pattern `^[a-zA-Z0-9]([a-zA-Z0-9-_]{0,126}[a-zA-Z0-9])?$`
   */
  Name: string;
  OutputConfig: OutputConfig;
  Status: OutputStatus;
};
/**
 * Type definition for `AWS::ElementalInference::Feed.OutputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-feed-outputconfig.html}
 */
export type OutputConfig =
  | {
      Cropping: CroppingConfig;
    }
  | {
      Clipping: ClippingConfig;
    };
/**
 * Type definition for `AWS::ElementalInference::Feed.OutputStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-feed-outputstatus.html}
 */
export type OutputStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::ElementalInference::Feed.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-feed-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource type definition for `AWS::ElementalInference::Feed`.
 * Represents a feed that receives media for inference processing
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elementalinference-feed.html}
 */
export class ElementalInferenceFeed extends $Resource<
  "AWS::ElementalInference::Feed",
  ElementalInferenceFeedProperties,
  ElementalInferenceFeedAttributes
> {
  public static readonly Type = "AWS::ElementalInference::Feed";
  constructor(
    logicalId: string,
    properties: ElementalInferenceFeedProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElementalInferenceFeed.Type, properties, options);
  }
}
