import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Location::GeofenceCollection Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html}
 */
export type LocationGeofenceCollectionProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  CollectionName: string;
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  PricingPlan?: PricingPlan;
  PricingPlanDataSource?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Location::GeofenceCollection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html#aws-resource-location-geofencecollection-return-values}
 */
export type LocationGeofenceCollectionAttributes = {
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  Arn: string;
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  CollectionArn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  CreateTime: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Location::GeofenceCollection.PricingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-geofencecollection-pricingplan.html}
 */
export type PricingPlan = "RequestBasedUsage";
/**
 * Type definition for `AWS::Location::GeofenceCollection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-geofencecollection-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `\A(?!aws:)[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `\A[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Value: string;
};
/**
 * Definition of AWS::Location::GeofenceCollection Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-geofencecollection.html}
 */
export class LocationGeofenceCollection extends $Resource<
  "AWS::Location::GeofenceCollection",
  LocationGeofenceCollectionProperties,
  LocationGeofenceCollectionAttributes
> {
  public static readonly Type = "AWS::Location::GeofenceCollection";
  constructor(
    logicalId: string,
    properties: LocationGeofenceCollectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LocationGeofenceCollection.Type, properties, options);
  }
}
