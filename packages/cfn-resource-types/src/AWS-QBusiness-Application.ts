import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::Application Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html}
 */
export type QBusinessApplicationProperties = {
  AttachmentsConfiguration?: AttachmentsConfiguration;
  /**
   * @minLength `0`
   * @maxLength `1000`
   * @pattern `^[\s\S]*$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  DisplayName: string;
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  IdentityCenterInstanceArn?: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QBusiness::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#aws-resource-qbusiness-application-return-values}
 */
export type QBusinessApplicationAttributes = {
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  ApplicationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  CreatedAt: string;
  /**
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}$`
   */
  IdentityCenterApplicationArn: string;
  Status: ApplicationStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::QBusiness::Application.ApplicationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-applicationstatus.html}
 */
export type ApplicationStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING";
/**
 * Type definition for `AWS::QBusiness::Application.AttachmentsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-attachmentsconfiguration.html}
 */
export type AttachmentsConfiguration = {
  AttachmentsControlMode: AttachmentsControlMode;
};
/**
 * Type definition for `AWS::QBusiness::Application.AttachmentsControlMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-attachmentscontrolmode.html}
 */
export type AttachmentsControlMode = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QBusiness::Application.EncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::QBusiness::Application.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-application-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::QBusiness::Application Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html}
 */
export class QBusinessApplication extends $Resource<
  "AWS::QBusiness::Application",
  QBusinessApplicationProperties,
  QBusinessApplicationAttributes
> {
  public static readonly Type = "AWS::QBusiness::Application";
  constructor(
    logicalId: string,
    properties: QBusinessApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessApplication.Type, properties, options);
  }
}
