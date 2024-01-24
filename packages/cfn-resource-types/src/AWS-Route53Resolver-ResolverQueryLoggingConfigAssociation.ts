import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverQueryLoggingConfigAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverQueryLoggingConfigAssociation.Type,
      properties,
      options,
    );
  }
}
