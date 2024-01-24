import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::ServiceLinkedRole
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html}
 */
export type IAMServiceLinkedRoleProperties = {
  /**
   * The service principal for the AWS service to which this role is attached.
   */
  AWSServiceName?: string;
  /**
   * A string that you provide, which is combined with the service-provided prefix to form the complete role name.
   */
  CustomSuffix?: string;
  /**
   * The description of the role.
   */
  Description?: string;
};
/**
 * Attribute type definition for `AWS::IAM::ServiceLinkedRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html#aws-resource-iam-servicelinkedrole-return-values}
 */
export type IAMServiceLinkedRoleAttributes = {
  /**
   * The name of the role.
   */
  RoleName: string;
};
/**
 * Resource Type definition for AWS::IAM::ServiceLinkedRole
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servicelinkedrole.html}
 */
export class IAMServiceLinkedRole extends $Resource<
  "AWS::IAM::ServiceLinkedRole",
  IAMServiceLinkedRoleProperties,
  IAMServiceLinkedRoleAttributes
> {
  public static readonly Type = "AWS::IAM::ServiceLinkedRole";
  constructor(
    logicalId: string,
    properties: IAMServiceLinkedRoleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMServiceLinkedRole.Type, properties, options);
  }
}
