import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: LakeFormationResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LakeFormationResource.Type, properties, options);
  }
}
