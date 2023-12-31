import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["RoleName" as const];
  constructor(
    logicalId: string,
    properties: IAMServiceLinkedRoleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMServiceLinkedRole.Type,
      properties,
      IAMServiceLinkedRole.AttributeNames,
      options,
    );
  }
}
