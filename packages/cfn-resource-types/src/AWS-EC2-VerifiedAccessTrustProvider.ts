import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::VerifiedAccessTrustProvider type describes a verified access trust provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html}
 */
export type EC2VerifiedAccessTrustProviderProperties = {
  /**
   * A description for the Amazon Web Services Verified Access trust provider.
   */
  Description?: string;
  /**
   * The options for device identity based trust providers.
   */
  DeviceOptions?: DeviceOptions;
  /**
   * The type of device-based trust provider. Possible values: jamf|crowdstrike
   */
  DeviceTrustProviderType?: string;
  /**
   * The OpenID Connect details for an oidc -type, user-identity based trust provider.
   */
  OidcOptions?: OidcOptions;
  /**
   * The identifier to be used when working with policy rules.
   */
  PolicyReferenceName: string;
  /**
   * The configuration options for customer provided KMS encryption.
   */
  SseSpecification?: {
    /**
     * Whether to encrypt the policy with the provided key or disable encryption
     */
    CustomerManagedKeyEnabled?: boolean;
    /**
     * KMS Key Arn used to encrypt the group policy
     */
    KmsKeyArn?: string;
  };
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * Type of trust provider. Possible values: user|device
   */
  TrustProviderType: string;
  /**
   * The type of device-based trust provider. Possible values: oidc|iam-identity-center
   */
  UserTrustProviderType?: string;
};
/**
 * Attribute type definition for `AWS::EC2::VerifiedAccessTrustProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#aws-resource-ec2-verifiedaccesstrustprovider-return-values}
 */
export type EC2VerifiedAccessTrustProviderAttributes = {
  /**
   * The creation time.
   */
  CreationTime: string;
  /**
   * The last updated time.
   */
  LastUpdatedTime: string;
  /**
   * The ID of the Amazon Web Services Verified Access trust provider.
   */
  VerifiedAccessTrustProviderId: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessTrustProvider.DeviceOptions`.
 * The options for device identity based trust providers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccesstrustprovider-deviceoptions.html}
 */
export type DeviceOptions = {
  /**
   * The ID of the tenant application with the device-identity provider.
   */
  TenantId?: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessTrustProvider.OidcOptions`.
 * The OpenID Connect details for an oidc -type, user-identity based trust provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccesstrustprovider-oidcoptions.html}
 */
export type OidcOptions = {
  /**
   * The OIDC authorization endpoint.
   */
  AuthorizationEndpoint?: string;
  /**
   * The client identifier.
   */
  ClientId?: string;
  /**
   * The client secret.
   */
  ClientSecret?: string;
  /**
   * The OIDC issuer.
   */
  Issuer?: string;
  /**
   * OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. Each scope returns a specific set of user attributes.
   */
  Scope?: string;
  /**
   * The OIDC token endpoint.
   */
  TokenEndpoint?: string;
  /**
   * The OIDC user info endpoint.
   */
  UserInfoEndpoint?: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessTrustProvider.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccesstrustprovider-tag.html}
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::EC2::VerifiedAccessTrustProvider type describes a verified access trust provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html}
 */
export class EC2VerifiedAccessTrustProvider extends $Resource<
  "AWS::EC2::VerifiedAccessTrustProvider",
  EC2VerifiedAccessTrustProviderProperties,
  EC2VerifiedAccessTrustProviderAttributes
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessTrustProvider";
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessTrustProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VerifiedAccessTrustProvider.Type, properties, options);
  }
}
