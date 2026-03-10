import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::HostedZoneAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-hostedzoneassociation.html}
 */
export type Route53GlobalResolverHostedZoneAssociationProperties = {
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  HostedZoneId: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `arn:[-.a-z0-9]{1,63}:[-.a-z0-9]{1,63}:[-.a-z0-9]{0,63}:[-.a-z0-9]{0,63}:[^/].{0,1023}`
   */
  ResourceArn: string;
};
/**
 * Attribute type definition for `AWS::Route53GlobalResolver::HostedZoneAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-hostedzoneassociation.html#aws-resource-route53globalresolver-hostedzoneassociation-return-values}
 */
export type Route53GlobalResolverHostedZoneAssociationAttributes = {
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  HostedZoneAssociationId: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  HostedZoneName: string;
  Status: HostedZoneAssociationStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::HostedZoneAssociation.HostedZoneAssociationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-hostedzoneassociation-hostedzoneassociationstatus.html}
 */
export type HostedZoneAssociationStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "DELETING";
/**
 * Resource schema for AWS::Route53GlobalResolver::HostedZoneAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-hostedzoneassociation.html}
 */
export class Route53GlobalResolverHostedZoneAssociation extends $Resource<
  "AWS::Route53GlobalResolver::HostedZoneAssociation",
  Route53GlobalResolverHostedZoneAssociationProperties,
  Route53GlobalResolverHostedZoneAssociationAttributes
> {
  public static readonly Type =
    "AWS::Route53GlobalResolver::HostedZoneAssociation";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverHostedZoneAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53GlobalResolverHostedZoneAssociation.Type,
      properties,
      options,
    );
  }
}
