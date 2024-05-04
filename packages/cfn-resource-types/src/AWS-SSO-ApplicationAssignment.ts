import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSO::ApplicationAssignment`.
 * Resource Type definition for SSO application access grant to a user or group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html}
 */
export type SSOApplicationAssignmentProperties = {
  /**
   * The ARN of the application.
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}`
   */
  ApplicationArn: string;
  /**
   * An identifier for an object in IAM Identity Center, such as a user or group
   * @minLength `1`
   * @maxLength `47`
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  PrincipalId: string;
  /**
   * The entity type for which the assignment will be created.
   */
  PrincipalType: "USER" | "GROUP";
};
/**
 * Resource type definition for `AWS::SSO::ApplicationAssignment`.
 * Resource Type definition for SSO application access grant to a user or group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html}
 */
export class SSOApplicationAssignment extends $Resource<
  "AWS::SSO::ApplicationAssignment",
  SSOApplicationAssignmentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSO::ApplicationAssignment";
  constructor(
    logicalId: string,
    properties: SSOApplicationAssignmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSOApplicationAssignment.Type, properties, options);
  }
}
