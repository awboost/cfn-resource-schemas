import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::FinSpace::Environment`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html}
 */
export type FinSpaceEnvironmentProperties = {
  /**
   * ARNs of FinSpace Data Bundles to install
   */
  DataBundles?: string[];
  /**
   * Description of the Environment
   * @pattern `^[a-zA-Z0-9. ]{1,1000}$`
   */
  Description?: string;
  /**
   * Federation mode used with the Environment
   */
  FederationMode?: "LOCAL" | "FEDERATED";
  /**
   * Additional parameters to identify Federation mode
   */
  FederationParameters?: FederationParameters;
  /**
   * KMS key used to encrypt customer data within FinSpace Environment infrastructure
   * @pattern `^[a-zA-Z-0-9-:\/]*{1,1000}$`
   */
  KmsKeyId?: string;
  /**
   * Name of the Environment
   * @pattern `^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]{1,255}$`
   */
  Name: string;
  /**
   * Parameters of the first Superuser for the FinSpace Environment
   */
  SuperuserParameters?: SuperuserParameters;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FinSpace::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#aws-resource-finspace-environment-return-values}
 */
export type FinSpaceEnvironmentAttributes = {
  /**
   * AWS account ID associated with the Environment
   * @pattern `^[a-zA-Z0-9]{1,26}$`
   */
  AwsAccountId: string;
  /**
   * ID for FinSpace created account used to store Environment artifacts
   * @pattern `^[a-zA-Z0-9]{1,26}$`
   */
  DedicatedServiceAccountId: string;
  /**
   * ARN of the Environment
   * @pattern `^arn:aws:finspace:[A-Za-z0-9_/.-]{0,63}:\d+:environment/[0-9A-Za-z_-]{1,128}$`
   */
  EnvironmentArn: string;
  /**
   * Unique identifier for representing FinSpace Environment
   * @pattern `^[a-zA-Z0-9]{1,26}$`
   */
  EnvironmentId: string;
  /**
   * URL used to login to the Environment
   * @pattern `^[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]{1,1000}`
   */
  EnvironmentUrl: string;
  /**
   * SageMaker Studio Domain URL associated with the Environment
   * @pattern `^[a-zA-Z-0-9-:\/.]*{1,1000}$`
   */
  SageMakerStudioDomainUrl: string;
  /**
   * State of the Environment
   */
  Status:
    | "CREATE_REQUESTED"
    | "CREATING"
    | "CREATED"
    | "DELETE_REQUESTED"
    | "DELETING"
    | "DELETED"
    | "FAILED_CREATION"
    | "FAILED_DELETION"
    | "RETRY_DELETION"
    | "SUSPENDED";
};
/**
 * Type definition for `AWS::FinSpace::Environment.FederationParameters`.
 * Additional parameters to identify Federation mode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html}
 */
export type FederationParameters = {
  /**
   * SAML metadata URL to link with the Environment
   * @pattern `^https?://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]{1,1000}`
   */
  ApplicationCallBackURL?: string;
  /**
   * Attribute map for SAML configuration
   */
  AttributeMap?: {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     * @minLength `1`
     * @maxLength `128`
     */
    Key?: string;
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     * @maxLength `256`
     */
    Value?: string;
  }[];
  /**
   * Federation provider name to link with the Environment
   * @minLength `1`
   * @maxLength `32`
   * @pattern `[^_\p{Z}][\p{L}\p{M}\p{S}\p{N}\p{P}][^_\p{Z}]+`
   */
  FederationProviderName?: string;
  /**
   * SAML metadata URL to link with the Environment
   */
  FederationURN?: string;
  /**
   * SAML metadata document to link the federation provider to the Environment
   * @minLength `1000`
   * @maxLength `10000000`
   * @pattern `.*`
   */
  SamlMetadataDocument?: string;
  /**
   * SAML metadata URL to link with the Environment
   * @pattern `^https?://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]{1,1000}`
   */
  SamlMetadataURL?: string;
};
/**
 * Type definition for `AWS::FinSpace::Environment.SuperuserParameters`.
 * Parameters of the first Superuser for the FinSpace Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html}
 */
export type SuperuserParameters = {
  /**
   * Email address
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z]+`
   */
  EmailAddress?: string;
  /**
   * First name
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[a-zA-Z0-9]{1,50}$`
   */
  FirstName?: string;
  /**
   * Last name
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[a-zA-Z0-9]{1,50}$`
   */
  LastName?: string;
};
/**
 * Type definition for `AWS::FinSpace::Environment.Tag`.
 * A list of all tags for a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::FinSpace::Environment`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html}
 */
export class FinSpaceEnvironment extends $Resource<
  "AWS::FinSpace::Environment",
  FinSpaceEnvironmentProperties,
  FinSpaceEnvironmentAttributes
> {
  public static readonly Type = "AWS::FinSpace::Environment";
  public static readonly AttributeNames = [
    "AwsAccountId" as const,
    "DedicatedServiceAccountId" as const,
    "EnvironmentArn" as const,
    "EnvironmentId" as const,
    "EnvironmentUrl" as const,
    "SageMakerStudioDomainUrl" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: FinSpaceEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      FinSpaceEnvironment.Type,
      properties,
      FinSpaceEnvironment.AttributeNames,
      options,
    );
  }
}
