import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DataSync::LocationSMB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export type DataSyncLocationSMBProperties = {
  /**
   * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
   * @minLength `1`
   * @maxLength `4`
   */
  AgentArns: string[];
  /**
   * The authentication mode used to determine identity of user.
   */
  AuthenticationType?: "NTLM" | "KERBEROS";
  /**
   * Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
   */
  CmkSecretConfig?: CmkSecretConfig;
  /**
   * Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
   */
  CustomSecretConfig?: CustomSecretConfig;
  /**
   * Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.
   * @maxLength `2`
   */
  DnsIpAddresses?: string[];
  /**
   * The name of the Windows domain that the SMB server belongs to.
   * @maxLength `253`
   * @pattern `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
   */
  Domain?: string;
  /**
   * The Base64 string representation of the Keytab file. Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file.
   * @maxLength `87384`
   */
  KerberosKeytab?: string;
  /**
   * The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file.
   * @maxLength `174764`
   */
  KerberosKrb5Conf?: string;
  /**
   * Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.+$`
   */
  KerberosPrincipal?: string;
  /**
   * The mount options used by DataSync to access the SMB server.
   */
  MountOptions?: MountOptions;
  /**
   * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^.{0,104}$`
   */
  Password?: string;
  /**
   * The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.
   * @maxLength `255`
   * @pattern `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   */
  ServerHostname?: string;
  /**
   * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination
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
   * The user who can mount the share, has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
   */
  User?: string;
};
/**
 * Attribute type definition for `AWS::DataSync::LocationSMB`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#aws-resource-datasync-locationsmb-return-values}
 */
export type DataSyncLocationSMBAttributes = {
  /**
   * Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
   */
  CmkSecretConfig: {
    /**
     * Specifies the ARN for an AWS Secrets Manager secret, managed by DataSync.
     * @maxLength `2048`
     * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
     */
    SecretArn: string;
  };
  /**
   * The Amazon Resource Name (ARN) of the SMB location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the SMB location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\-]+$`
   */
  LocationUri: string;
  /**
   * Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
   */
  ManagedSecretConfig: {
    /**
     * Specifies the ARN for an AWS Secrets Manager secret.
     * @maxLength `2048`
     * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
     */
    SecretArn: string;
  };
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.CmkSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-cmksecretconfig.html}
 */
export type CmkSecretConfig = {
  /**
   * Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. DataSync provides this key to AWS Secrets Manager.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):kms:[a-z-0-9]+:[0-9]{12}:key/.*|)$`
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.CustomSecretConfig`.
 * Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-customsecretconfig.html}
 */
export type CustomSecretConfig = {
  /**
   * Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*|)$`
   */
  SecretAccessRoleArn: string;
  /**
   * Specifies the ARN for a customer created AWS Secrets Manager secret.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.ManagedSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-managedsecretconfig.html}
 */
export type ManagedSecretConfig = {
  /**
   * Specifies the ARN for an AWS Secrets Manager secret.
   * @maxLength `2048`
   * @pattern `^(arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):secretsmanager:[a-z-0-9]+:[0-9]{12}:secret:.*|)$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.MountOptions`.
 * The mount options used by DataSync to access the SMB server.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html}
 */
export type MountOptions = {
  /**
   * The specific SMB version that you want DataSync to use to mount your SMB share.
   */
  Version?: "AUTOMATIC" | "SMB1" | "SMB2_0" | "SMB2" | "SMB3";
};
/**
 * Type definition for `AWS::DataSync::LocationSMB.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-tag.html}
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
 * Resource Type definition for AWS::DataSync::LocationSMB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export class DataSyncLocationSMB extends $Resource<
  "AWS::DataSync::LocationSMB",
  DataSyncLocationSMBProperties,
  DataSyncLocationSMBAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationSMB";
  constructor(
    logicalId: string,
    properties: DataSyncLocationSMBProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationSMB.Type, properties, options);
  }
}
