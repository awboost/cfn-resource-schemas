import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Cognito::UserPoolDomain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html}
 */
export type CognitoUserPoolDomainProperties = {
  CustomDomainConfig?: CustomDomainConfigType;
  Domain: string;
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::UserPoolDomain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#aws-resource-cognito-userpooldomain-return-values}
 */
export type CognitoUserPoolDomainAttributes = {
  CloudFrontDistribution: string;
  Id: string;
};
/**
 * Type definition for `AWS::Cognito::UserPoolDomain.CustomDomainConfigType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html}
 */
export type CustomDomainConfigType = {
  CertificateArn?: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolDomain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html}
 */
export class CognitoUserPoolDomain extends $Resource<
  "AWS::Cognito::UserPoolDomain",
  CognitoUserPoolDomainProperties,
  CognitoUserPoolDomainAttributes
> {
  public static readonly Type = "AWS::Cognito::UserPoolDomain";
  public static readonly AttributeNames = [
    "CloudFrontDistribution" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolDomain.Type,
      properties,
      CognitoUserPoolDomain.AttributeNames,
      options,
    );
  }
}
