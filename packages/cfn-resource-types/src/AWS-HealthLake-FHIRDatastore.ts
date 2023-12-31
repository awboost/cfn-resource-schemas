import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::HealthLake::FHIRDatastore`.
 * HealthLake FHIR Datastore
 * @see {@link https://docs.aws.amazon.com/healthlake/latest/devguide/working-with-FHIR-healthlake.html}
 */
export type HealthLakeFHIRDatastoreProperties = {
  /**
   * The user-generated name for the Data Store.
   * @minLength `1`
   * @maxLength `256`
   */
  DatastoreName?: string;
  /**
   * The FHIR version. Only R4 version data is supported.
   */
  DatastoreTypeVersion: DatastoreTypeVersion;
  /**
   * The identity provider configuration for the datastore
   */
  IdentityProviderConfiguration?: IdentityProviderConfiguration;
  /**
   * The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.
   */
  PreloadDataConfig?: PreloadDataConfig;
  /**
   * The server-side encryption key configuration for a customer provided encryption key.
   */
  SseConfiguration?: SseConfiguration;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::HealthLake::FHIRDatastore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#aws-resource-healthlake-fhirdatastore-return-values}
 */
export type HealthLakeFHIRDatastoreAttributes = {
  /**
   * The time that a Data Store was created.
   */
  CreatedAt: CreatedAt;
  /**
   * The Amazon Resource Name used in the creation of the Data Store.
   * @pattern `^arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:healthlake:[a-zA-Z0-9-]+:[0-9]{12}:datastore/.+?`
   */
  DatastoreArn: string;
  /**
   * The AWS endpoint for the Data Store. Each Data Store will have it's own endpoint with Data Store ID in the endpoint URL.
   * @maxLength `10000`
   */
  DatastoreEndpoint: string;
  /**
   * The AWS-generated ID number for the Data Store.
   * @minLength `1`
   * @maxLength `32`
   */
  DatastoreId: string;
  /**
   * The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.
   */
  DatastoreStatus: DatastoreStatus;
};
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.CreatedAt`.
 * The time that a Data Store was created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-createdat.html}
 */
export type CreatedAt = {
  /**
   * Nanoseconds.
   */
  Nanos: number;
  /**
   * Seconds since epoch.
   */
  Seconds: string;
};
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.DatastoreStatus`.
 * The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-datastorestatus.html}
 */
export type DatastoreStatus = "CREATING" | "ACTIVE" | "DELETING" | "DELETED";
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.DatastoreTypeVersion`.
 * The FHIR version. Only R4 version data is supported.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-datastoretypeversion.html}
 */
export type DatastoreTypeVersion = "R4";
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.IdentityProviderConfiguration`.
 * The identity provider configuration for the datastore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html}
 */
export type IdentityProviderConfiguration = {
  /**
   * Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.
   */
  AuthorizationStrategy: "SMART_ON_FHIR_V1" | "AWS_AUTH";
  /**
   * Flag to indicate if fine-grained authorization will be enabled for the datastore
   */
  FineGrainedAuthorizationEnabled?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.
   * @minLength `49`
   * @maxLength `256`
   * @pattern `arn:aws[-a-z]*:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9\-_\.]+(:(\$LATEST|[a-zA-Z0-9\-_]+))?`
   */
  IdpLambdaArn?: string;
  /**
   * The JSON metadata elements for identity provider configuration.
   */
  Metadata?: string;
};
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.KmsEncryptionConfig`.
 * The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html}
 */
export type KmsEncryptionConfig = {
  /**
   * The type of customer-managed-key (CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
   */
  CmkType: "CUSTOMER_MANAGED_KMS_KEY" | "AWS_OWNED_KMS_KEY";
  /**
   * The KMS encryption key id/alias used to encrypt the Data Store contents at rest.
   * @minLength `1`
   * @maxLength `400`
   * @pattern `(arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-\d:)?(\d{12}:)?(((key/)?[a-zA-Z0-9-_]+)|(alias/[a-zA-Z0-9:/_-]+))`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.PreloadDataConfig`.
 * The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-preloaddataconfig.html}
 */
export type PreloadDataConfig = {
  /**
   * The type of preloaded data. Only Synthea preloaded data is supported.
   */
  PreloadDataType: "SYNTHEA";
};
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.SseConfiguration`.
 * The server-side encryption key configuration for a customer provided encryption key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-sseconfiguration.html}
 */
export type SseConfiguration = {
  /**
   * The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
   */
  KmsEncryptionConfig: KmsEncryptionConfig;
};
/**
 * Type definition for `AWS::HealthLake::FHIRDatastore.Tag`.
 * A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value of the tag.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::HealthLake::FHIRDatastore`.
 * HealthLake FHIR Datastore
 * @see {@link https://docs.aws.amazon.com/healthlake/latest/devguide/working-with-FHIR-healthlake.html}
 */
export class HealthLakeFHIRDatastore extends $Resource<
  "AWS::HealthLake::FHIRDatastore",
  HealthLakeFHIRDatastoreProperties,
  HealthLakeFHIRDatastoreAttributes
> {
  public static readonly Type = "AWS::HealthLake::FHIRDatastore";
  public static readonly AttributeNames = [
    "CreatedAt" as const,
    "DatastoreArn" as const,
    "DatastoreEndpoint" as const,
    "DatastoreId" as const,
    "DatastoreStatus" as const,
  ];
  constructor(
    logicalId: string,
    properties: HealthLakeFHIRDatastoreProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      HealthLakeFHIRDatastore.Type,
      properties,
      HealthLakeFHIRDatastore.AttributeNames,
      options,
    );
  }
}
