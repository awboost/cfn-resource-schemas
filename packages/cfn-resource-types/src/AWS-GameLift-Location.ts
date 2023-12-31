import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::GameLift::Location resource creates an Amazon GameLift (GameLift) custom location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html}
 */
export type GameLiftLocationProperties = {
  /**
   * @minLength `8`
   * @maxLength `64`
   * @pattern `^custom-[A-Za-z0-9\-]+`
   */
  LocationName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GameLift::Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html#aws-resource-gamelift-location-return-values}
 */
export type GameLiftLocationAttributes = {
  /**
   * @pattern `^arn:.*:location/custom-\S+`
   */
  LocationArn: string;
};
/**
 * Type definition for `AWS::GameLift::Location.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-location-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::GameLift::Location resource creates an Amazon GameLift (GameLift) custom location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-location.html}
 */
export class GameLiftLocation extends $Resource<
  "AWS::GameLift::Location",
  GameLiftLocationProperties,
  GameLiftLocationAttributes
> {
  public static readonly Type = "AWS::GameLift::Location";
  public static readonly AttributeNames = ["LocationArn" as const];
  constructor(
    logicalId: string,
    properties: GameLiftLocationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GameLiftLocation.Type,
      properties,
      GameLiftLocation.AttributeNames,
      options,
    );
  }
}
