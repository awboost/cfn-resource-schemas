import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSO::Assignment`.
 * Resource Type definition for SSO assignmet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html}
 */
export type SSOAssignmentProperties = {
  /**
   * The sso instance that the permission set is owned.
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}`
   */
  InstanceArn: string;
  /**
   * The permission set that the assignemt will be assigned
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet/(sso)?ins-[a-zA-Z0-9-.]{16}/ps-[a-zA-Z0-9-./]{16}`
   */
  PermissionSetArn: string;
  /**
   * The assignee's identifier, user id/group id
   * @minLength `1`
   * @maxLength `47`
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  PrincipalId: string;
  /**
   * The assignee's type, user/group
   */
  PrincipalType: "USER" | "GROUP";
  /**
   * The account id to be provisioned.
   * @pattern `\d{12}`
   */
  TargetId: string;
  /**
   * The type of resource to be provsioned to, only aws account now
   */
  TargetType: "AWS_ACCOUNT";
};
/**
 * Resource type definition for `AWS::SSO::Assignment`.
 * Resource Type definition for SSO assignmet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html}
 */
export class SSOAssignment extends $Resource<
  "AWS::SSO::Assignment",
  SSOAssignmentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSO::Assignment";
  constructor(
    logicalId: string,
    properties: SSOAssignmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSOAssignment.Type, properties, options);
  }
}
