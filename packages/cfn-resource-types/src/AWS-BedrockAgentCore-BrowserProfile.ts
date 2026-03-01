import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource definition for AWS::BedrockAgentCore::BrowserProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browserprofile.html}
 */
export type BedrockAgentCoreBrowserProfileProperties = {
  /**
   * The description of the browser profile.
   */
  Description?: string;
  /**
   * The name of the browser profile.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * A map of tag keys and values.
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::BrowserProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browserprofile.html#aws-resource-bedrockagentcore-browserprofile-return-values}
 */
export type BedrockAgentCoreBrowserProfileAttributes = {
  /**
   * Timestamp when the browser profile was created.
   */
  CreatedAt: string;
  /**
   * Timestamp when the browser profile was last saved.
   */
  LastSavedAt: string;
  /**
   * ID of the last saved browser.
   * @pattern `^(aws\.browser\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  LastSavedBrowserId: string;
  /**
   * ID of the last saved browser session.
   * @pattern `^[0-9a-zA-Z]{1,40}$`
   */
  LastSavedBrowserSessionId: string;
  /**
   * Timestamp when the browser profile was last updated.
   */
  LastUpdatedAt: string;
  /**
   * The ARN of a BrowserProfile resource.
   * @pattern `^arn:(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:browser-profile/[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10}$`
   */
  ProfileArn: string;
  /**
   * The id of the browser profile.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10}$`
   */
  ProfileId: string;
  /**
   * Status of browser profile
   */
  Status: BrowserProfileStatus;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserProfile.BrowserProfileStatus`.
 * Status of browser profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browserprofile-browserprofilestatus.html}
 */
export type BrowserProfileStatus = "READY" | "DELETING" | "DELETED" | "SAVING";
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserProfile.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browserprofile-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Resource definition for AWS::BedrockAgentCore::BrowserProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browserprofile.html}
 */
export class BedrockAgentCoreBrowserProfile extends $Resource<
  "AWS::BedrockAgentCore::BrowserProfile",
  BedrockAgentCoreBrowserProfileProperties,
  BedrockAgentCoreBrowserProfileAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::BrowserProfile";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreBrowserProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreBrowserProfile.Type, properties, options);
  }
}
