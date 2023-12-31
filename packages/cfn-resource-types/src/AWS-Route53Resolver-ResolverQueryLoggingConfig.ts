import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "Arn" as const,
    "AssociationCount" as const,
    "CreationTime" as const,
    "CreatorRequestId" as const,
    "Id" as const,
    "OwnerId" as const,
    "ShareStatus" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverQueryLoggingConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverQueryLoggingConfig.Type,
      properties,
      Route53ResolverResolverQueryLoggingConfig.AttributeNames,
      options,
    );
  }
}
