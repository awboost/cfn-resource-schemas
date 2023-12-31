import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::Route53::CidrCollection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html}
 */
export type Route53CidrCollectionProperties = {
  /**
   * A complex type that contains information about the list of CIDR locations.
   */
  Locations?: Location[];
  /**
   * A unique name for the CIDR collection.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9A-Za-z_\-]+$`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::Route53::CidrCollection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html#aws-resource-route53-cidrcollection-return-values}
 */
export type Route53CidrCollectionAttributes = {
  /**
   * The Amazon resource name (ARN) to uniquely identify the AWS resource.
   */
  Arn: string;
  /**
   * UUID of the CIDR collection.
   */
  Id: string;
};
/**
 * Type definition for `AWS::Route53::CidrCollection.Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrcollection-location.html}
 */
export type Location = {
  /**
   * A list of CIDR blocks.
   */
  CidrList: string[];
  /**
   * The name of the location that is associated with the CIDR collection.
   * @minLength `1`
   * @maxLength `16`
   */
  LocationName: string;
};
/**
 * Resource schema for AWS::Route53::CidrCollection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html}
 */
export class Route53CidrCollection extends $Resource<
  "AWS::Route53::CidrCollection",
  Route53CidrCollectionProperties,
  Route53CidrCollectionAttributes
> {
  public static readonly Type = "AWS::Route53::CidrCollection";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: Route53CidrCollectionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53CidrCollection.Type,
      properties,
      Route53CidrCollection.AttributeNames,
      options,
    );
  }
}
