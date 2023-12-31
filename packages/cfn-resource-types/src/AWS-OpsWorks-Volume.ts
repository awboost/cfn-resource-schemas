import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: OpsWorksVolumeProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpsWorksVolume.Type,
      properties,
      OpsWorksVolume.AttributeNames,
      options,
    );
  }
}
