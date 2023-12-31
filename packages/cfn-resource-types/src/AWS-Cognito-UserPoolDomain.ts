import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: CognitoUserPoolDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolDomain.Type, properties, options);
  }
}
