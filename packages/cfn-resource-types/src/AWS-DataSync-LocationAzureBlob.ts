import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DataSync::LocationAzureBlob.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html}
 */
export type DataSyncLocationAzureBlobProperties = {
  /**
   * Specifies the Amazon Resource Name (ARN) of the DataSync agent that can connect with your Azure Blob Storage container. If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.
   * @minLength `1`
   * @maxLength `4`
   */
  AgentArns?: string[];
  /**
   * Specifies an access tier for the objects you're transferring into your Azure Blob Storage container.
   */
  AzureAccessTier?: "HOT" | "COOL" | "ARCHIVE";
  /**
   * The specific authentication type that you want DataSync to use to access your Azure Blob Container.
   */
  AzureBlobAuthenticationType: "SAS" | "NONE";
  /**
   * The URL of the Azure Blob container that was described.
   * @maxLength `325`
   * @pattern `^https://[A-Za-z0-9]((.|-+)?[A-Za-z0-9]){0,252}/[a-z0-9](-?[a-z0-9]){2,62}$`
   */
  AzureBlobContainerUrl?: string;
  /**
   * Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.
   */
  AzureBlobSasConfiguration?: AzureBlobSasConfiguration;
  /**
   * Specifies a blob type for the objects you're transferring into your Azure Blob Storage container.
   */
  AzureBlobType?: "BLOCK";
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
   */
  CmkSecretConfig?: CmkSecretConfig;
  /**
   * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
   */
  CustomSecretConfig?: CustomSecretConfig;
  /**
   * The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location.
   * @maxLength `1024`
   * @pattern `^[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}\p{C}]*$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::LocationAzureBlob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html#aws-resource-datasync-locationazureblob-return-values}
 */
export type DataSyncLocationAzureBlobAttributes = {
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
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
   * The Amazon Resource Name (ARN) of the Azure Blob Location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the Azure Blob Location that was described.
   * @maxLength `4356`
   * @pattern `^(azure-blob)://[a-zA-Z0-9./\-]+$`
   */
  LocationUri: string;
  /**
   * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
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
 * Type definition for `AWS::DataSync::LocationAzureBlob.AzureBlobSasConfiguration`.
 * Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-azureblobsasconfiguration.html}
 */
export type AzureBlobSasConfiguration = {
  /**
   * Specifies the shared access signature (SAS) token, which indicates the permissions DataSync needs to access your Azure Blob Storage container.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `(^.+$)`
   */
  AzureBlobSasToken: string;
};
/**
 * Type definition for `AWS::DataSync::LocationAzureBlob.CmkSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-cmksecretconfig.html}
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
 * Type definition for `AWS::DataSync::LocationAzureBlob.CustomSecretConfig`.
 * Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-customsecretconfig.html}
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
 * Type definition for `AWS::DataSync::LocationAzureBlob.ManagedSecretConfig`.
 * Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location. DataSync uses the default AWS-managed KMS key to encrypt this secret in AWS Secrets Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-managedsecretconfig.html}
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
 * Type definition for `AWS::DataSync::LocationAzureBlob.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationazureblob-tag.html}
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
 * Resource Type definition for AWS::DataSync::LocationAzureBlob.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationazureblob.html}
 */
export class DataSyncLocationAzureBlob extends $Resource<
  "AWS::DataSync::LocationAzureBlob",
  DataSyncLocationAzureBlobProperties,
  DataSyncLocationAzureBlobAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationAzureBlob";
  constructor(
    logicalId: string,
    properties: DataSyncLocationAzureBlobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationAzureBlob.Type, properties, options);
  }
}
