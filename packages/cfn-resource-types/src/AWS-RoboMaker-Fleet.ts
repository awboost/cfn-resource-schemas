import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::RoboMaker::Fleet resource creates an AWS RoboMaker fleet. Fleets contain robots and can receive deployments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html}
 */
export type RoboMakerFleetProperties = {
  /**
   * The name of the fleet.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9_\-]{1,255}$`
   */
  Name?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::RoboMaker::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html#aws-resource-robomaker-fleet-return-values}
 */
export type RoboMakerFleetAttributes = {
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::RoboMaker::Fleet.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-fleet-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * AWS::RoboMaker::Fleet resource creates an AWS RoboMaker fleet. Fleets contain robots and can receive deployments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html}
 */
export class RoboMakerFleet extends $Resource<
  "AWS::RoboMaker::Fleet",
  RoboMakerFleetProperties,
  RoboMakerFleetAttributes
> {
  public static readonly Type = "AWS::RoboMaker::Fleet";
  constructor(
    logicalId: string,
    properties: RoboMakerFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RoboMakerFleet.Type, properties, options);
  }
}
