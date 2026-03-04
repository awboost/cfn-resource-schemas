import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DataSync::LocationFSxWindows.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html}
 */
export type DataSyncLocationFSxWindowsProperties = {
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
   */
  CmkSecretConfig?: CmkSecretConfig;
  /**
   * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
   */
  CustomSecretConfig?: CustomSecretConfig;
  /**
   * The name of the Windows domain that the FSx for Windows server belongs to.
   * @maxLength `253`
   * @pattern `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
   */
  Domain?: string;
  /**
   * The Amazon Resource Name (ARN) for the FSx for Windows file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):fsx:[a-z\-0-9]*:[0-9]{12}:file-system/fs-.*$`
   */
  FsxFilesystemArn?: string;
  /**
   * The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
   * @maxLength `104`
   * @pattern `^.{0,104}$`
   */
  Password?: string;
  /**
   * The ARNs of the security groups that are to use to configure the FSx for Windows file system.
   */
  SecurityGroupArns: string[];
  /**
   * A subdirectory in the location's path.
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The user who has the permissions to access files and folders in the FSx for Windows file system.
   * @maxLength `104`
   * @pattern `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
   */
  User: string;
};
/**
 * Attribute type definition for `AWS::DataSync::LocationFSxWindows`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#aws-resource-datasync-locationfsxwindows-return-values}
 */
export type DataSyncLocationFSxWindowsAttributes = {
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
   */
  CmkSecretConfig: {
    /**
     * Specifies the ARN for an AWS Secrets Manager secret, managed by DataSync.
     * @maxLength `2048`
     * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
     */
    SecretArn: string;
  };
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx for Windows file system location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the FSx for Windows location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\-]+$`
   */
  LocationUri: string;
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
   */
  ManagedSecretConfig: {
    /**
     * Specifies the ARN for an AWS Secrets Manager secret.
     * @maxLength `2048`
     * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
     */
    SecretArn: string;
  };
};
/**
 * Type definition for `AWS::DataSync::LocationFSxWindows.CmkSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxwindows-cmksecretconfig.html}
 */
export type CmkSecretConfig = {
  /**
   * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):kms:[a-z-0-9]+:[0-9]{12}:key/.*|)$`
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxWindows.CustomSecretConfig`.
 * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxwindows-customsecretconfig.html}
 */
export type CustomSecretConfig = {
  /**
   * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*|)$`
   */
  SecretAccessRoleArn: string;
  /**
   * Specifies the ARN for a customer created AWS Secrets Manager secret.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxWindows.ManagedSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxwindows-managedsecretconfig.html}
 */
export type ManagedSecretConfig = {
  /**
   * Specifies the ARN for an AWS Secrets Manager secret.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxWindows.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxwindows-tag.html}
 */
export type Tag = {
  /**
   * The key for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:/-]+$`
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::DataSync::LocationFSxWindows.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html}
 */
export class DataSyncLocationFSxWindows extends $Resource<
  "AWS::DataSync::LocationFSxWindows",
  DataSyncLocationFSxWindowsProperties,
  DataSyncLocationFSxWindowsAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationFSxWindows";
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxWindowsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationFSxWindows.Type, properties, options);
  }
}
