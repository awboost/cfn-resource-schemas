import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Bedrock::DataAutomationLibrary
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationlibrary.html}
 */
export type BedrockDataAutomationLibraryProperties = {
  /**
   * KMS Encryption Configuration
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * Description of the DataAutomationLibrary
   * @minLength `0`
   * @maxLength `300`
   */
  LibraryDescription?: string;
  /**
   * Name of the DataAutomationLibrary
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  LibraryName: string;
  /**
   * List of tags
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Bedrock::DataAutomationLibrary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationlibrary.html#aws-resource-bedrock-dataautomationlibrary-return-values}
 */
export type BedrockDataAutomationLibraryAttributes = {
  /**
   * Time Stamp
   */
  CreationTime: string;
  /**
   * List of info for each entity type in the DataAutomationLibrary
   */
  EntityTypes: {
    /**
     * JSON string representing relevant metadata for the entity type
     */
    EntityMetadata: string;
    /**
     * Entity types supported in DataAutomationLibraries
     */
    EntityType: EntityType;
  }[];
  /**
   * ARN generated at the server side when a DataAutomationLibrary is created
   * @maxLength `128`
   * @pattern `^arn:aws(|-cn|-iso|-iso-[a-z]|-us-gov):bedrock:[a-zA-Z0-9-]*:[0-9]{12}:data-automation-library/[a-zA-Z0-9-]{12,36}$`
   */
  LibraryArn: string;
  /**
   * Status of DataAutomationLibrary
   */
  Status: DataAutomationLibraryStatus;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationLibrary.DataAutomationLibraryStatus`.
 * Status of DataAutomationLibrary
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationlibrary-dataautomationlibrarystatus.html}
 */
export type DataAutomationLibraryStatus = "ACTIVE" | "DELETING";
/**
 * Type definition for `AWS::Bedrock::DataAutomationLibrary.EncryptionConfiguration`.
 * KMS Encryption Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationlibrary-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * KMS Encryption Context
   */
  KmsEncryptionContext?: KmsEncryptionContext;
  /**
   * KMS Key Identifier
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]+$`
   */
  KmsKeyId: string;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationLibrary.EntityType`.
 * Entity types supported in DataAutomationLibraries
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationlibrary-entitytype.html}
 */
export type EntityType = "VOCABULARY";
/**
 * Type definition for `AWS::Bedrock::DataAutomationLibrary.EntityTypeInfo`.
 * Information about an entity type in the DataAutomationLibrary
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationlibrary-entitytypeinfo.html}
 */
export type EntityTypeInfo = {
  /**
   * JSON string representing relevant metadata for the entity type
   */
  EntityMetadata?: string;
  /**
   * Entity types supported in DataAutomationLibraries
   */
  EntityType: EntityType;
};
/**
 * Type definition for `AWS::Bedrock::DataAutomationLibrary.KmsEncryptionContext`.
 * KMS Encryption Context
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationlibrary-kmsencryptioncontext.html}
 */
export type KmsEncryptionContext = Record<string, string>;
/**
 * Type definition for `AWS::Bedrock::DataAutomationLibrary.Tag`.
 * Key value pair of a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-dataautomationlibrary-tag.html}
 */
export type Tag = {
  /**
   * Tag key
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * Tag value
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Bedrock::DataAutomationLibrary
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationlibrary.html}
 */
export class BedrockDataAutomationLibrary extends $Resource<
  "AWS::Bedrock::DataAutomationLibrary",
  BedrockDataAutomationLibraryProperties,
  BedrockDataAutomationLibraryAttributes
> {
  public static readonly Type = "AWS::Bedrock::DataAutomationLibrary";
  constructor(
    logicalId: string,
    properties: BedrockDataAutomationLibraryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockDataAutomationLibrary.Type, properties, options);
  }
}
