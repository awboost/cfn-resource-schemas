import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::IoTSiteWise::AccessPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html}
 */
export type IoTSiteWiseAccessPolicyProperties = {
  /**
   * The identity for this access policy. Choose either a user or a group but not both.
   */
  AccessPolicyIdentity: AccessPolicyIdentity;
  /**
   * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
   */
  AccessPolicyPermission: string;
  /**
   * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
   */
  AccessPolicyResource: AccessPolicyResource;
};
/**
 * Attribute type definition for `AWS::IoTSiteWise::AccessPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html#aws-resource-iotsitewise-accesspolicy-return-values}
 */
export type IoTSiteWiseAccessPolicyAttributes = {
  /**
   * The ARN of the access policy.
   */
  AccessPolicyArn: string;
  /**
   * The ID of the access policy.
   */
  AccessPolicyId: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.AccessPolicyIdentity`.
 * The identity for this access policy. Choose either an SSO user or group or an IAM user or role.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html}
 */
export type AccessPolicyIdentity = {
  /**
   * Contains information for an IAM role identity in an access policy.
   */
  IamRole?: IamRole;
  /**
   * Contains information for an IAM user identity in an access policy.
   */
  IamUser?: IamUser;
  /**
   * Contains information for a user identity in an access policy.
   */
  User?: User;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.AccessPolicyResource`.
 * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyresource.html}
 */
export type AccessPolicyResource = {
  /**
   * A portal resource.
   */
  Portal?: Portal;
  /**
   * A project resource.
   */
  Project?: Project;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.IamRole`.
 * Contains information for an IAM role identity in an access policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamrole.html}
 */
export type IamRole = {
  /**
   * The ARN of the IAM role.
   */
  arn?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.IamUser`.
 * Contains information for an IAM user identity in an access policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamuser.html}
 */
export type IamUser = {
  /**
   * The ARN of the IAM user.
   */
  arn?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.Portal`.
 * A portal resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-portal.html}
 */
export type Portal = {
  /**
   * The ID of the portal.
   */
  id?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.Project`.
 * A project resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-project.html}
 */
export type Project = {
  /**
   * The ID of the project.
   */
  id?: string;
};
/**
 * Type definition for `AWS::IoTSiteWise::AccessPolicy.User`.
 * Contains information for a user identity in an access policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-user.html}
 */
export type User = {
  /**
   * The AWS SSO ID of the user.
   */
  id?: string;
};
/**
 * Resource schema for AWS::IoTSiteWise::AccessPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html}
 */
export class IoTSiteWiseAccessPolicy extends $Resource<
  "AWS::IoTSiteWise::AccessPolicy",
  IoTSiteWiseAccessPolicyProperties,
  IoTSiteWiseAccessPolicyAttributes
> {
  public static readonly Type = "AWS::IoTSiteWise::AccessPolicy";
  public static readonly AttributeNames = [
    "AccessPolicyArn" as const,
    "AccessPolicyId" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTSiteWiseAccessPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTSiteWiseAccessPolicy.Type,
      properties,
      IoTSiteWiseAccessPolicy.AttributeNames,
      options,
    );
  }
}
