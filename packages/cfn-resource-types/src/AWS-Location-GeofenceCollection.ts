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
