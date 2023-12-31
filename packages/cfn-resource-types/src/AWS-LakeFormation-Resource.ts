import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::LakeFormation::Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html}
 */
export type LakeFormationResourceProperties = {
  ResourceArn: string;
  RoleArn?: string;
  UseServiceLinkedRole: boolean;
  WithFederation?: boolean;
};
/**
 * Attribute type definition for `AWS::LakeFormation::Resource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#aws-resource-lakeformation-resource-return-values}
 */
export type LakeFormationResourceAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::LakeFormation::Resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html}
 */
export class LakeFormationResource extends $Resource<
  "AWS::LakeFormation::Resource",
  LakeFormationResourceProperties,
  LakeFormationResourceAttributes
> {
  public static readonly Type = "AWS::LakeFormation::Resource";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: LakeFormationResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LakeFormationResource.Type,
      properties,
      LakeFormationResource.AttributeNames,
      options,
    );
  }
}
