import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html}
 */
export type GameLiftAliasProperties = {
  /**
   * A human-readable description of the alias.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A descriptive label that is associated with an alias. Alias names do not need to be unique.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `.*\S.*`
   */
  Name: string;
  /**
   * A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.
   */
  RoutingStrategy: RoutingStrategy;
};
/**
 * Attribute type definition for `AWS::GameLift::Alias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#aws-resource-gamelift-alias-return-values}
 */
export type GameLiftAliasAttributes = {
  /**
   * Unique alias ID
   */
  AliasId: string;
};
/**
 * Type definition for `AWS::GameLift::Alias.RoutingStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html}
 */
export type RoutingStrategy = {
  /**
   * A unique identifier for a fleet that the alias points to. If you specify SIMPLE for the Type property, you must specify this property.
   * @pattern `^fleet-\S+`
   */
  FleetId?: string;
  /**
   * The message text to be used with a terminal routing strategy. If you specify TERMINAL for the Type property, you must specify this property.
   */
  Message?: string;
  /**
   * Simple routing strategy. The alias resolves to one specific fleet. Use this type when routing to active fleets.
   */
  Type: "SIMPLE" | "TERMINAL";
};
/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html}
 */
export class GameLiftAlias extends $Resource<
  "AWS::GameLift::Alias",
  GameLiftAliasProperties,
  GameLiftAliasAttributes
> {
  public static readonly Type = "AWS::GameLift::Alias";
  constructor(
    logicalId: string,
    properties: GameLiftAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GameLiftAlias.Type, properties, options);
  }
}
