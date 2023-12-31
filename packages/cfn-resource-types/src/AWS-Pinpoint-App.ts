import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: PinpointAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointApp.Type, properties, options);
  }
}
