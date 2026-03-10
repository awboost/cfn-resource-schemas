import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::AccessToken
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-accesstoken.html}
 */
export type Route53GlobalResolverAccessTokenProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientToken?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  DnsViewId: string;
  ExpiresAt?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   */
  Name?: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53GlobalResolver::AccessToken`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-accesstoken.html#aws-resource-route53globalresolver-accesstoken-return-values}
 */
export type Route53GlobalResolverAccessTokenAttributes = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  AccessTokenId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  GlobalResolverId: string;
  Status: TokenStatus;
  UpdatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::AccessToken.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-accesstoken-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::AccessToken.TokenStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-accesstoken-tokenstatus.html}
 */
export type TokenStatus = "CREATING" | "OPERATIONAL" | "DELETING";
/**
 * Resource schema for AWS::Route53GlobalResolver::AccessToken
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-accesstoken.html}
 */
export class Route53GlobalResolverAccessToken extends $Resource<
  "AWS::Route53GlobalResolver::AccessToken",
  Route53GlobalResolverAccessTokenProperties,
  Route53GlobalResolverAccessTokenAttributes
> {
  public static readonly Type = "AWS::Route53GlobalResolver::AccessToken";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverAccessTokenProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53GlobalResolverAccessToken.Type,
      properties,
      options,
    );
  }
}
