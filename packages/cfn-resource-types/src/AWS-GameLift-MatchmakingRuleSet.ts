import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::MatchmakingRuleSet resource creates an Amazon GameLift (GameLift) matchmaking rule set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html}
 */
export type GameLiftMatchmakingRuleSetProperties = {
  /**
   * A unique identifier for the matchmaking rule set.
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9-\.]*`
   */
  Name: string;
  /**
   * A collection of matchmaking rules, formatted as a JSON string.
   * @minLength `1`
   * @maxLength `65535`
   */
  RuleSetBody: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GameLift::MatchmakingRuleSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html#aws-resource-gamelift-matchmakingruleset-return-values}
 */
export type GameLiftMatchmakingRuleSetAttributes = {
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it.
   * @pattern `^arn:.*:matchmakingruleset\/[a-zA-Z0-9-\.]*`
   */
  Arn: string;
  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds.
   */
  CreationTime: string;
};
/**
 * Type definition for `AWS::GameLift::MatchmakingRuleSet.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-matchmakingruleset-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::GameLift::MatchmakingRuleSet resource creates an Amazon GameLift (GameLift) matchmaking rule set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html}
 */
export class GameLiftMatchmakingRuleSet extends $Resource<
  "AWS::GameLift::MatchmakingRuleSet",
  GameLiftMatchmakingRuleSetProperties,
  GameLiftMatchmakingRuleSetAttributes
> {
  public static readonly Type = "AWS::GameLift::MatchmakingRuleSet";
  constructor(
    logicalId: string,
    properties: GameLiftMatchmakingRuleSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GameLiftMatchmakingRuleSet.Type, properties, options);
  }
}
