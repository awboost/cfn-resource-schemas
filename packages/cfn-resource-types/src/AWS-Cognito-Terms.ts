import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::Terms
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-terms.html}
 */
export type CognitoTermsProperties = {
  ClientId?: string;
  Enforcement: TermsEnforcementType;
  Links: LinksType;
  /**
   * @pattern `^(terms-of-use|privacy-policy)$`
   */
  TermsName: string;
  TermsSource: TermsSourceType;
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::Terms`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-terms.html#aws-resource-cognito-terms-return-values}
 */
export type CognitoTermsAttributes = {
  /**
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$`
   */
  TermsId: string;
};
/**
 * Type definition for `AWS::Cognito::Terms.LinksType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-terms-linkstype.html}
 */
export type LinksType = Record<string, string>;
/**
 * Type definition for `AWS::Cognito::Terms.TermsEnforcementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-terms-termsenforcementtype.html}
 */
export type TermsEnforcementType = "NONE";
/**
 * Type definition for `AWS::Cognito::Terms.TermsSourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-terms-termssourcetype.html}
 */
export type TermsSourceType = "LINK";
/**
 * Resource Type definition for AWS::Cognito::Terms
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-terms.html}
 */
export class CognitoTerms extends $Resource<
  "AWS::Cognito::Terms",
  CognitoTermsProperties,
  CognitoTermsAttributes
> {
  public static readonly Type = "AWS::Cognito::Terms";
  constructor(
    logicalId: string,
    properties: CognitoTermsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoTerms.Type, properties, options);
  }
}
