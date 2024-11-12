import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html}
 */
export type GameLiftContainerGroupDefinitionProperties = {
  /**
   * A descriptive label for the container group definition.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Name: string;
  /**
   * The operating system of the container group
   */
  OperatingSystem: "AMAZON_LINUX_2023";
  /**
   * A specific ContainerGroupDefinition version to be updated
   * @min `0`
   */
  SourceVersionNumber?: number;
  /**
   * A collection of support container definitions that define the containers in this group.
   * @minLength `1`
   * @maxLength `10`
   */
  SupportContainerDefinitions?: any[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GameLift::ContainerGroupDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#aws-resource-gamelift-containergroupdefinition-return-values}
 */
export type GameLiftContainerGroupDefinitionAttributes = {
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container group resource and uniquely identifies it across all AWS Regions.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^arn:.*:containergroupdefinition/containergroupdefinition-[a-zA-Z0-9-]+$|^arn:.*:containergroupdefinition/[a-zA-Z0-9-\:]+$`
   */
  ContainerGroupDefinitionArn: string;
  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
   */
  CreationTime: string;
  /**
   * A string indicating ContainerGroupDefinition status.
   */
  Status: "READY" | "COPYING" | "FAILED";
  /**
   * A string indicating the reason for ContainerGroupDefinition status.
   */
  StatusReason: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html}
 */
export class GameLiftContainerGroupDefinition extends $Resource<
  "AWS::GameLift::ContainerGroupDefinition",
  GameLiftContainerGroupDefinitionProperties,
  GameLiftContainerGroupDefinitionAttributes
> {
  public static readonly Type = "AWS::GameLift::ContainerGroupDefinition";
  constructor(
    logicalId: string,
    properties: GameLiftContainerGroupDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GameLiftContainerGroupDefinition.Type,
      properties,
      options,
    );
  }
}
