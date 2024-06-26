import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::VerifiedPermissions::IdentitySource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html}
 */
export type VerifiedPermissionsIdentitySourceProperties = {
  Configuration: IdentitySourceConfiguration;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  PolicyStoreId: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^.*$`
   */
  PrincipalEntityType?: string;
};
/**
 * Attribute type definition for `AWS::VerifiedPermissions::IdentitySource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html#aws-resource-verifiedpermissions-identitysource-return-values}
 */
export type VerifiedPermissionsIdentitySourceAttributes = {
  Details: {
    /**
     * @minLength `0`
     * @maxLength `1000`
     */
    ClientIds: string[];
    /**
     * @minLength `1`
     * @maxLength `2048`
     * @pattern `^https://.*$`
     */
    DiscoveryUrl: string;
    OpenIdIssuer: OpenIdIssuer;
    /**
     * @minLength `1`
     * @maxLength `255`
     * @pattern `^arn:[a-zA-Z0-9-]+:cognito-idp:(([a-zA-Z0-9-]+:\d{12}:userpool/[\w-]+_[0-9a-zA-Z]+))$`
     */
    UserPoolArn: string;
  };
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  IdentitySourceId: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.CognitoGroupConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitogroupconfiguration.html}
 */
export type CognitoGroupConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^([_a-zA-Z][_a-zA-Z0-9]*::)*[_a-zA-Z][_a-zA-Z0-9]*$`
   */
  GroupEntityType: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.CognitoUserPoolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html}
 */
export type CognitoUserPoolConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  ClientIds?: string[];
  GroupConfiguration?: CognitoGroupConfiguration;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:[a-zA-Z0-9-]+:cognito-idp:(([a-zA-Z0-9-]+:\d{12}:userpool/[\w-]+_[0-9a-zA-Z]+))$`
   */
  UserPoolArn: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.IdentitySourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourceconfiguration.html}
 */
export type IdentitySourceConfiguration =
  | {
      CognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
    }
  | {
      OpenIdConnectConfiguration: OpenIdConnectConfiguration;
    };
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.IdentitySourceDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html}
 */
export type IdentitySourceDetails = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  ClientIds?: string[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https://.*$`
   */
  DiscoveryUrl?: string;
  OpenIdIssuer?: OpenIdIssuer;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:[a-zA-Z0-9-]+:cognito-idp:(([a-zA-Z0-9-]+:\d{12}:userpool/[\w-]+_[0-9a-zA-Z]+))$`
   */
  UserPoolArn?: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.OpenIdConnectAccessTokenConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectaccesstokenconfiguration.html}
 */
export type OpenIdConnectAccessTokenConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Audiences?: string[];
  /**
   * @minLength `1`
   */
  PrincipalIdClaim?: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.OpenIdConnectConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectconfiguration.html}
 */
export type OpenIdConnectConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  EntityIdPrefix?: string;
  GroupConfiguration?: OpenIdConnectGroupConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https://.*$`
   */
  Issuer: string;
  TokenSelection: OpenIdConnectTokenSelection;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.OpenIdConnectGroupConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectgroupconfiguration.html}
 */
export type OpenIdConnectGroupConfiguration = {
  /**
   * @minLength `1`
   */
  GroupClaim: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^([_a-zA-Z][_a-zA-Z0-9]*::)*[_a-zA-Z][_a-zA-Z0-9]*$`
   */
  GroupEntityType: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.OpenIdConnectIdentityTokenConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectidentitytokenconfiguration.html}
 */
export type OpenIdConnectIdentityTokenConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  ClientIds?: string[];
  /**
   * @minLength `1`
   */
  PrincipalIdClaim?: string;
};
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.OpenIdConnectTokenSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnecttokenselection.html}
 */
export type OpenIdConnectTokenSelection =
  | {
      AccessTokenOnly: OpenIdConnectAccessTokenConfiguration;
    }
  | {
      IdentityTokenOnly: OpenIdConnectIdentityTokenConfiguration;
    };
/**
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.OpenIdIssuer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidissuer.html}
 */
export type OpenIdIssuer = "COGNITO";
/**
 * Definition of AWS::VerifiedPermissions::IdentitySource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html}
 */
export class VerifiedPermissionsIdentitySource extends $Resource<
  "AWS::VerifiedPermissions::IdentitySource",
  VerifiedPermissionsIdentitySourceProperties,
  VerifiedPermissionsIdentitySourceAttributes
> {
  public static readonly Type = "AWS::VerifiedPermissions::IdentitySource";
  constructor(
    logicalId: string,
    properties: VerifiedPermissionsIdentitySourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VerifiedPermissionsIdentitySource.Type,
      properties,
      options,
    );
  }
}
