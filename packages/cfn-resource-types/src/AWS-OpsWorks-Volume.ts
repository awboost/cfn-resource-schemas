import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpsWorks::Volume
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html}
 */
export type OpsWorksVolumeProperties = {
  Ec2VolumeId: string;
  MountPoint?: string;
  Name?: string;
  StackId: string;
};
/**
 * Attribute type definition for `AWS::OpsWorks::Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#aws-resource-opsworks-volume-return-values}
 */
export type OpsWorksVolumeAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::OpsWorks::Volume
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html}
 */
export class OpsWorksVolume extends $Resource<
  "AWS::OpsWorks::Volume",
  OpsWorksVolumeProperties,
  OpsWorksVolumeAttributes
> {
  public static readonly Type = "AWS::OpsWorks::Volume";
  constructor(
    logicalId: string,
    properties: OpsWorksVolumeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpsWorksVolume.Type, properties, options);
  }
}
