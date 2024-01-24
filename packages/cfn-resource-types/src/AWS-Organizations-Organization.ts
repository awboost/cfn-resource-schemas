import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Organizations::Organization
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html}
 */
export type OrganizationsOrganizationProperties = {
  /**
   * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
   */
  FeatureSet?: "ALL" | "CONSOLIDATED_BILLING";
};
/**
 * Attribute type definition for `AWS::Organizations::Organization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html#aws-resource-organizations-organization-return-values}
 */
export type OrganizationsOrganizationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of an organization.
   * @pattern `^arn:aws.*:organizations::\d{12}:organization\/o-[a-z0-9]{10,32}`
   */
  Arn: string;
  /**
   * The unique identifier (ID) of an organization.
   * @pattern `^o-[a-z0-9]{10,32}$`
   */
  Id: string;
  /**
   * The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization.
   * @pattern `^arn:aws.*:organizations::\d{12}:account\/o-[a-z0-9]{10,32}\/\d{12}`
   */
  ManagementAccountArn: string;
  /**
   * The email address that is associated with the AWS account that is designated as the management account for the organization.
   * @minLength `6`
   * @maxLength `64`
   * @pattern `[^\s@]+@[^\s@]+\.[^\s@]+`
   */
  ManagementAccountEmail: string;
  /**
   * The unique identifier (ID) of the management account of an organization.
   * @pattern `^\d{12}$`
   */
  ManagementAccountId: string;
  /**
   * The unique identifier (ID) for the root.
   * @maxLength `64`
   * @pattern `^r-[0-9a-z]{4,32}$`
   */
  RootId: string;
};
/**
 * Resource schema for AWS::Organizations::Organization
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html}
 */
export class OrganizationsOrganization extends $Resource<
  "AWS::Organizations::Organization",
  OrganizationsOrganizationProperties,
  OrganizationsOrganizationAttributes
> {
  public static readonly Type = "AWS::Organizations::Organization";
  constructor(
    logicalId: string,
    properties: OrganizationsOrganizationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OrganizationsOrganization.Type, properties, options);
  }
}
