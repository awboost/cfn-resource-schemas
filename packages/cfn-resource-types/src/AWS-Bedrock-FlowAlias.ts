import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::FlowAlias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html}
 */
export type BedrockFlowAliasProperties = {
  /**
   * Description of the Resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Arn representation of the Flow
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:flow/[0-9a-zA-Z]{10}$`
   */
  FlowArn: string;
  /**
   * Name for a resource.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * Routing configuration for a Flow alias.
   * @minLength `1`
   * @maxLength `1`
   */
  RoutingConfiguration: FlowAliasRoutingConfigurationListItem[];
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::Bedrock::FlowAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#aws-resource-bedrock-flowalias-return-values}
 */
export type BedrockFlowAliasAttributes = {
  /**
   * Arn of the Flow Alias
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:flow/[0-9a-zA-Z]{10}/alias/[0-9a-zA-Z]{10}$`
   */
  Arn: string;
  /**
   * Time Stamp.
   */
  CreatedAt: string;
  /**
   * Identifier for a flow resource.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  FlowId: string;
  /**
   * Id for a Flow Alias generated at the server side.
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^(\bTSTALIASID\b|[0-9a-zA-Z]+)$`
   */
  Id: string;
  /**
   * Time Stamp.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowAlias.FlowAliasRoutingConfigurationListItem`.
 * Details about the routing configuration for a Flow alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowalias-flowaliasroutingconfigurationlistitem.html}
 */
export type FlowAliasRoutingConfigurationListItem = {
  /**
   * Version.
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^(DRAFT|[0-9]{0,4}[1-9][0-9]{0,4})$`
   */
  FlowVersion?: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowAlias.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowalias-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Definition of AWS::Bedrock::FlowAlias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html}
 */
export class BedrockFlowAlias extends $Resource<
  "AWS::Bedrock::FlowAlias",
  BedrockFlowAliasProperties,
  BedrockFlowAliasAttributes
> {
  public static readonly Type = "AWS::Bedrock::FlowAlias";
  constructor(
    logicalId: string,
    properties: BedrockFlowAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockFlowAlias.Type, properties, options);
  }
}
