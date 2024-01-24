import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::Domain`.
 * A domain is an organizing entity for connecting together assets, users, and their projects
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html}
 */
export type DataZoneDomainProperties = {
  /**
   * The description of the Amazon DataZone domain.
   */
  Description?: string;
  /**
   * The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  DomainExecutionRole: string;
  /**
   * The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyIdentifier?: string;
  /**
   * The name of the Amazon DataZone domain.
   */
  Name: string;
  /**
   * The single-sign on configuration of the Amazon DataZone domain.
   */
  SingleSignOn?: SingleSignOn;
  /**
   * The tags specified for the Amazon DataZone domain.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataZone::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#aws-resource-datazone-domain-return-values}
 */
export type DataZoneDomainAttributes = {
  /**
   * The ARN of the Amazon DataZone domain.
   * @pattern `^arn:aws(|-cn|-us-gov):datazone:\w+(?:-\w+)+:\d{12}:domain/dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  Arn: string;
  /**
   * The timestamp of when the Amazon DataZone domain was last updated.
   */
  CreatedAt: string;
  /**
   * The id of the Amazon DataZone domain.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
  /**
   * The timestamp of when the Amazon DataZone domain was last updated.
   */
  LastUpdatedAt: string;
  /**
   * The identifier of the AWS account that manages the domain.
   */
  ManagedAccountId: string;
  /**
   * The URL of the data portal for this Amazon DataZone domain.
   */
  PortalUrl: string;
  /**
   * The status of the Amazon DataZone domain.
   */
  Status: DomainStatus;
};
/**
 * Type definition for `AWS::DataZone::Domain.AuthType`.
 * The type of single sign-on in Amazon DataZone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-authtype.html}
 */
export type AuthType = "IAM_IDC" | "DISABLED";
/**
 * Type definition for `AWS::DataZone::Domain.DomainStatus`.
 * The status of the Amazon DataZone domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-domainstatus.html}
 */
export type DomainStatus =
  | "CREATING"
  | "AVAILABLE"
  | "CREATION_FAILED"
  | "DELETING"
  | "DELETED"
  | "DELETION_FAILED";
/**
 * Type definition for `AWS::DataZone::Domain.SingleSignOn`.
 * The single-sign on configuration of the Amazon DataZone domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-singlesignon.html}
 */
export type SingleSignOn = {
  /**
   * The type of single sign-on in Amazon DataZone.
   */
  Type?: AuthType;
  /**
   * The single sign-on user assignment in Amazon DataZone.
   */
  UserAssignment?: UserAssignment;
};
/**
 * Type definition for `AWS::DataZone::Domain.Tag`.
 * A key-value pair to associate with the domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::DataZone::Domain.UserAssignment`.
 * The single sign-on user assignment in Amazon DataZone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-domain-userassignment.html}
 */
export type UserAssignment = "AUTOMATIC" | "MANUAL";
/**
 * Resource type definition for `AWS::DataZone::Domain`.
 * A domain is an organizing entity for connecting together assets, users, and their projects
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html}
 */
export class DataZoneDomain extends $Resource<
  "AWS::DataZone::Domain",
  DataZoneDomainProperties,
  DataZoneDomainAttributes
> {
  public static readonly Type = "AWS::DataZone::Domain";
  constructor(
    logicalId: string,
    properties: DataZoneDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneDomain.Type, properties, options);
  }
}
