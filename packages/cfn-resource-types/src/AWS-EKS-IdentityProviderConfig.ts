import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EKS::IdentityProviderConfig`.
 * An object representing an Amazon EKS IdentityProviderConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html}
 */
export type EKSIdentityProviderConfigProperties = {
  /**
   * The name of the identity provider configuration.
   */
  ClusterName: string;
  /**
   * The name of the OIDC provider configuration.
   */
  IdentityProviderConfigName?: string;
  /**
   * An object representing an OpenID Connect (OIDC) configuration.
   */
  Oidc?: OidcIdentityProviderConfig;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The type of the identity provider configuration.
   */
  Type: "oidc";
};
/**
 * Attribute type definition for `AWS::EKS::IdentityProviderConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html#aws-resource-eks-identityproviderconfig-return-values}
 */
export type EKSIdentityProviderConfigAttributes = {
  /**
   * The ARN of the configuration.
   */
  IdentityProviderConfigArn: string;
};
/**
 * Type definition for `AWS::EKS::IdentityProviderConfig.OidcIdentityProviderConfig`.
 * An object representing an OpenID Connect (OIDC) configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html}
 */
export type OidcIdentityProviderConfig = {
  /**
   * This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider.
   */
  ClientId: string;
  /**
   * The JWT claim that the provider uses to return your groups.
   */
  GroupsClaim?: string;
  /**
   * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).
   */
  GroupsPrefix?: string;
  /**
   * The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.
   */
  IssuerUrl: string;
  RequiredClaims?: RequiredClaim[];
  /**
   * The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
   */
  UsernameClaim?: string;
  /**
   * The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.
   */
  UsernamePrefix?: string;
};
/**
 * Type definition for `AWS::EKS::IdentityProviderConfig.RequiredClaim`.
 * The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-requiredclaim.html}
 */
export type RequiredClaim = {
  /**
   * The key of the requiredClaims.
   * @minLength `1`
   * @maxLength `63`
   */
  Key: string;
  /**
   * The value for the requiredClaims.
   * @minLength `1`
   * @maxLength `253`
   */
  Value: string;
};
/**
 * Type definition for `AWS::EKS::IdentityProviderConfig.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-tag.html}
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
 * Resource type definition for `AWS::EKS::IdentityProviderConfig`.
 * An object representing an Amazon EKS IdentityProviderConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html}
 */
export class EKSIdentityProviderConfig extends $Resource<
  "AWS::EKS::IdentityProviderConfig",
  EKSIdentityProviderConfigProperties,
  EKSIdentityProviderConfigAttributes
> {
  public static readonly Type = "AWS::EKS::IdentityProviderConfig";
  constructor(
    logicalId: string,
    properties: EKSIdentityProviderConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSIdentityProviderConfig.Type, properties, options);
  }
}
