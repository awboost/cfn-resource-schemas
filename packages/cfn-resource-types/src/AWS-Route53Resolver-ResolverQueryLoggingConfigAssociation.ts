import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html}
 */
export type Route53ResolverResolverQueryLoggingConfigAssociationProperties = {
  /**
   * ResolverQueryLogConfigId
   * @minLength `1`
   * @maxLength `64`
   */
  ResolverQueryLogConfigId?: string;
  /**
   * ResourceId
   * @minLength `1`
   * @maxLength `64`
   */
  ResourceId?: string;
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#aws-resource-route53resolver-resolverqueryloggingconfigassociation-return-values}
 */
export type Route53ResolverResolverQueryLoggingConfigAssociationAttributes = {
  /**
   * Rfc3339TimeString
   * @minLength `20`
   * @maxLength `40`
   */
  CreationTime: string;
  /**
   * ResolverQueryLogConfigAssociationError
   */
  Error: "NONE" | "DESTINATION_NOT_FOUND" | "ACCESS_DENIED";
  /**
   * ResolverQueryLogConfigAssociationErrorMessage
   */
  ErrorMessage: string;
  /**
   * Id
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
  /**
   * ResolverQueryLogConfigAssociationStatus
   */
  Status:
    | "CREATING"
    | "ACTIVE"
    | "ACTION_NEEDED"
    | "DELETING"
    | "FAILED"
    | "OVERRIDDEN";
};
/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html}
 */
export class Route53ResolverResolverQueryLoggingConfigAssociation extends $Resource<
  "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation",
  Route53ResolverResolverQueryLoggingConfigAssociationProperties,
  Route53ResolverResolverQueryLoggingConfigAssociationAttributes
> {
  public static readonly Type =
    "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation";
  public static readonly AttributeNames = [
    "CreationTime" as const,
    "Error" as const,
    "ErrorMessage" as const,
    "Id" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverQueryLoggingConfigAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverQueryLoggingConfigAssociation.Type,
      properties,
      Route53ResolverResolverQueryLoggingConfigAssociation.AttributeNames,
      options,
    );
  }
}
