import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CloudFormationCustomResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationCustomResource.Type,
      properties,
      CloudFormationCustomResource.AttributeNames,
      options,
    );
  }
}
