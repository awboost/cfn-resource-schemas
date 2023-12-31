import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTTwinMaker::Scene
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html}
 */
export type IoTTwinMakerSceneProperties = {
  /**
   * A list of capabilities that the scene uses to render.
   * @minLength `0`
   * @maxLength `50`
   */
  Capabilities?: string[];
  /**
   * The relative path that specifies the location of the content definition file.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `[sS]3://[A-Za-z0-9._/-]+`
   */
  ContentLocation: string;
  /**
   * The description of the scene.
   * @minLength `0`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The ID of the scene.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
   */
  SceneId: string;
  /**
   * A key-value pair of scene metadata for the scene.
   */
  SceneMetadata?: Record<string, string>;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  /**
   * The ID of the scene.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
   */
  WorkspaceId: string;
};
/**
 * Attribute type definition for `AWS::IoTTwinMaker::Scene`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html#aws-resource-iottwinmaker-scene-return-values}
 */
export type IoTTwinMakerSceneAttributes = {
  /**
   * The ARN of the scene.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+`
   */
  Arn: string;
  /**
   * The date and time when the scene was created.
   */
  CreationDateTime: string;
  /**
   * A key-value pair of generated scene metadata for the scene.
   */
  GeneratedSceneMetadata: Record<string, string>;
  /**
   * The date and time of the current update.
   */
  UpdateDateTime: string;
};
/**
 * Resource schema for AWS::IoTTwinMaker::Scene
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-scene.html}
 */
export class IoTTwinMakerScene extends $Resource<
  "AWS::IoTTwinMaker::Scene",
  IoTTwinMakerSceneProperties,
  IoTTwinMakerSceneAttributes
> {
  public static readonly Type = "AWS::IoTTwinMaker::Scene";
  constructor(
    logicalId: string,
    properties: IoTTwinMakerSceneProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTTwinMakerScene.Type, properties, options);
  }
}
