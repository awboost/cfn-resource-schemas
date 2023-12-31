import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoT1Click::Placement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html}
 */
export type IoT1ClickPlacementProperties = {
  AssociatedDevices?: Record<string, any>;
  Attributes?: Record<string, any>;
  PlacementName?: string;
  ProjectName: string;
};
/**
 * Attribute type definition for `AWS::IoT1Click::Placement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#aws-resource-iot1click-placement-return-values}
 */
export type IoT1ClickPlacementAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::IoT1Click::Placement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html}
 */
export class IoT1ClickPlacement extends $Resource<
  "AWS::IoT1Click::Placement",
  IoT1ClickPlacementProperties,
  IoT1ClickPlacementAttributes
> {
  public static readonly Type = "AWS::IoT1Click::Placement";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IoT1ClickPlacementProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoT1ClickPlacement.Type,
      properties,
      IoT1ClickPlacement.AttributeNames,
      options,
    );
  }
}
