import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DataSync::LocationFSxONTAP.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html}
 */
export type DataSyncLocationFSxONTAPProperties = {
  /**
   * Configuration settings for NFS or SMB protocol.
   */
  Protocol?: Protocol;
  /**
   * The ARNs of the security groups that are to use to configure the FSx ONTAP file system.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupArns: string[];
  /**
   * The Amazon Resource Name (ARN) for the FSx ONTAP SVM.
   * @maxLength `162`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:storage-virtual-machine/fs-[0-9a-f]+/svm-[0-9a-f]{17,}$`
   */
  StorageVirtualMachineArn: string;
  /**
   * A subdirectory in the location's path.
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::LocationFSxONTAP`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#aws-resource-datasync-locationfsxontap-return-values}
 */
export type DataSyncLocationFSxONTAPAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the FSx ONAP file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$`
   */
  FsxFilesystemArn: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the FSx ONTAP file system that was described.
   * @maxLength `4360`
   * @pattern `^(efs|nfs|s3|smb|hdfs|fsx[a-z0-9-]+)://[a-zA-Z0-9.:/\-]+$`
   */
  LocationUri: string;
  /**
   * Configuration settings for NFS or SMB protocol.
   */
  Protocol: {
    /**
     * SMB protocol configuration for FSx ONTAP file system.
     */
    SMB: {
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
  };
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.CmkSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-cmksecretconfig.html}
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
 * Type definition for `AWS::DataSync::LocationFSxONTAP.CustomSecretConfig`.
 * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-customsecretconfig.html}
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
 * Type definition for `AWS::DataSync::LocationFSxONTAP.ManagedSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-managedsecretconfig.html}
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
 * Type definition for `AWS::DataSync::LocationFSxONTAP.NFS`.
 * NFS protocol configuration for FSx ONTAP file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfs.html}
 */
export type NFS = {
  /**
   * The NFS mount options that DataSync can use to mount your NFS share.
   */
  MountOptions: NfsMountOptions;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.NfsMountOptions`.
 * The NFS mount options that DataSync can use to mount your NFS share.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfsmountoptions.html}
 */
export type NfsMountOptions = {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share.
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.Protocol`.
 * Configuration settings for NFS or SMB protocol.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html}
 */
export type Protocol = {
  /**
   * NFS protocol configuration for FSx ONTAP file system.
   */
  NFS?: NFS;
  /**
   * SMB protocol configuration for FSx ONTAP file system.
   */
  SMB?: SMB;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.SMB`.
 * SMB protocol configuration for FSx ONTAP file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html}
 */
export type SMB = {
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
   */
  CmkSecretConfig?: CmkSecretConfig;
  /**
   * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
   */
  CustomSecretConfig?: CustomSecretConfig;
  /**
   * The name of the Windows domain that the SMB server belongs to.
   * @maxLength `253`
   * @pattern `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
   */
  Domain?: string;
  /**
   * The mount options used by DataSync to access the SMB server.
   */
  MountOptions: SmbMountOptions;
  /**
   * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^.{0,104}$`
   */
  Password?: string;
  /**
   * The user who can mount the share, has the permissions to access files and folders in the SMB share.
   * @maxLength `104`
   * @pattern `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
   */
  User: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.SmbMountOptions`.
 * The mount options used by DataSync to access the SMB server.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smbmountoptions.html}
 */
export type SmbMountOptions = {
  /**
   * The specific SMB version that you want DataSync to use to mount your SMB share.
   */
  Version?: "AUTOMATIC" | "SMB2" | "SMB3";
};
/**
 * Type definition for `AWS::DataSync::LocationFSxONTAP.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-tag.html}
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
 * Resource Type definition for AWS::DataSync::LocationFSxONTAP.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html}
 */
export class DataSyncLocationFSxONTAP extends $Resource<
  "AWS::DataSync::LocationFSxONTAP",
  DataSyncLocationFSxONTAPProperties,
  DataSyncLocationFSxONTAPAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationFSxONTAP";
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxONTAPProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationFSxONTAP.Type, properties, options);
  }
}
