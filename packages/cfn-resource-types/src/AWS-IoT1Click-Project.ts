import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT1Click::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html}
 */
export type IoT1ClickProjectProperties = {
  Description?: string;
  PlacementTemplate: PlacementTemplate;
  ProjectName?: string;
};
/**
 * Attribute type definition for `AWS::IoT1Click::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html#aws-resource-iot1click-project-return-values}
 */
export type IoT1ClickProjectAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT1Click::Project.PlacementTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-placementtemplate.html}
 */
export type PlacementTemplate = {
  DefaultAttributes?: Record<string, any>;
  DeviceTemplates?: Record<string, any>;
};
/**
 * Resource Type definition for AWS::IoT1Click::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html}
 */
export class IoT1ClickProject extends $Resource<
  "AWS::IoT1Click::Project",
  IoT1ClickProjectProperties,
  IoT1ClickProjectAttributes
> {
  public static readonly Type = "AWS::IoT1Click::Project";
  constructor(
    logicalId: string,
    properties: IoT1ClickProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoT1ClickProject.Type, properties, options);
  }
}
