import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::App
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html}
 */
export type PinpointAppProperties = {
  Name: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Pinpoint::App`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html#aws-resource-pinpoint-app-return-values}
 */
export type PinpointAppAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::App
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html}
 */
export class PinpointApp extends $Resource<
  "AWS::Pinpoint::App",
  PinpointAppProperties,
  PinpointAppAttributes
> {
  public static readonly Type = "AWS::Pinpoint::App";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointAppProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointApp.Type,
      properties,
      PinpointApp.AttributeNames,
      options,
    );
  }
}
