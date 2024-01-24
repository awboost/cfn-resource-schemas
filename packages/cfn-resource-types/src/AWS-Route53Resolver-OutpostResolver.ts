import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53Resolver::OutpostResolver.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html}
 */
export type Route53ResolverOutpostResolverProperties = {
  /**
   * The number of OutpostResolvers.
   * @min `4`
   * @max `256`
   */
  InstanceCount?: number;
  /**
   * The OutpostResolver name.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * The Outpost ARN.
   * @minLength `1`
   * @maxLength `1024`
   */
  OutpostArn: string;
  /**
   * The OutpostResolver instance type.
   * @minLength `1`
   * @maxLength `255`
   */
  PreferredInstanceType: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Resolver::OutpostResolver`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html#aws-resource-route53resolver-outpostresolver-return-values}
 */
export type Route53ResolverOutpostResolverAttributes = {
  /**
   * The OutpostResolver ARN.
   * @minLength `1`
   * @maxLength `1024`
   */
  Arn: string;
  /**
   * The OutpostResolver creation time
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
   * Id
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
  /**
   * The OutpostResolver last modified time
   * @minLength `20`
   * @maxLength `40`
   */
  ModificationTime: string;
  /**
   * The OutpostResolver status, possible values are CREATING, OPERATIONAL, UPDATING, DELETING, ACTION_NEEDED, FAILED_CREATION and FAILED_DELETION.
   */
  Status:
    | "CREATING"
    | "OPERATIONAL"
    | "DELETING"
    | "UPDATING"
    | "ACTION_NEEDED"
    | "FAILED_CREATION"
    | "FAILED_DELETION";
  /**
   * The OutpostResolver status message.
   */
  StatusMessage: string;
};
/**
 * Type definition for `AWS::Route53Resolver::OutpostResolver.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-outpostresolver-tag.html}
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
 * Resource schema for AWS::Route53Resolver::OutpostResolver.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html}
 */
export class Route53ResolverOutpostResolver extends $Resource<
  "AWS::Route53Resolver::OutpostResolver",
  Route53ResolverOutpostResolverProperties,
  Route53ResolverOutpostResolverAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::OutpostResolver";
  constructor(
    logicalId: string,
    properties: Route53ResolverOutpostResolverProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53ResolverOutpostResolver.Type, properties, options);
  }
}
