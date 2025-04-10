import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html}
 */
export type Route53ResolverResolverQueryLoggingConfigProperties = {
  /**
   * destination arn
   * @minLength `1`
   * @maxLength `600`
   */
  DestinationArn?: string;
  /**
   * ResolverQueryLogConfigName
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverQueryLoggingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#aws-resource-route53resolver-resolverqueryloggingconfig-return-values}
 */
export type Route53ResolverResolverQueryLoggingConfigAttributes = {
  /**
   * Arn
   * @minLength `1`
   * @maxLength `600`
   */
  Arn: string;
  /**
   * Count
   */
  AssociationCount: number;
  /**
   * Rfc3339TimeString
   * @minLength `20`
   * @maxLength `40`
   */
  CreationTime: string;
  /**
   * The id of the creator request.
   * @minLength `1`
   * @maxLength `255`
   */
  CreatorRequestId: string;
  /**
   * ResourceId
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
  /**
   * AccountId
   * @minLength `12`
   * @maxLength `32`
   */
  OwnerId: string;
  /**
   * ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.
   */
  ShareStatus: "NOT_SHARED" | "SHARED_WITH_ME" | "SHARED_BY_ME";
  /**
   * ResolverQueryLogConfigStatus, possible values are CREATING, CREATED, DELETED AND FAILED.
   */
  Status: "CREATING" | "CREATED" | "DELETING" | "FAILED";
};
/**
 * Type definition for `AWS::Route53Resolver::ResolverQueryLoggingConfig.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverqueryloggingconfig-tag.html}
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
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html}
 */
export class Route53ResolverResolverQueryLoggingConfig extends $Resource<
  "AWS::Route53Resolver::ResolverQueryLoggingConfig",
  Route53ResolverResolverQueryLoggingConfigProperties,
  Route53ResolverResolverQueryLoggingConfigAttributes
> {
  public static readonly Type =
    "AWS::Route53Resolver::ResolverQueryLoggingConfig";
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverQueryLoggingConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverQueryLoggingConfig.Type,
      properties,
      options,
    );
  }
}
