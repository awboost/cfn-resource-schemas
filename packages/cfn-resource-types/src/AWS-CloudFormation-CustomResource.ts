import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFormation::CustomResource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html}
 */
export type CloudFormationCustomResourceProperties = {
  ServiceToken: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::CustomResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#aws-resource-cloudformation-customresource-return-values}
 */
export type CloudFormationCustomResourceAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::CloudFormation::CustomResource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html}
 */
export class CloudFormationCustomResource extends $Resource<
  "AWS::CloudFormation::CustomResource",
  CloudFormationCustomResourceProperties,
  CloudFormationCustomResourceAttributes
> {
  public static readonly Type = "AWS::CloudFormation::CustomResource";
  constructor(
    logicalId: string,
    properties: CloudFormationCustomResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationCustomResource.Type, properties, options);
  }
}
