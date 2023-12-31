import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
  PolicyStoreId?: string;
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
 * Type definition for `AWS::VerifiedPermissions::IdentitySource.CognitoUserPoolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html}
 */
export type CognitoUserPoolConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  ClientIds?: string[];
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
export type IdentitySourceConfiguration = {
  CognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
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
