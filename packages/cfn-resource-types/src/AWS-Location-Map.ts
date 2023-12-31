import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Location::Map Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html}
 */
export type LocationMapProperties = {
  Configuration: MapConfiguration;
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  MapName: string;
  PricingPlan?: PricingPlan;
};
/**
 * Attribute type definition for `AWS::Location::Map`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#aws-resource-location-map-return-values}
 */
export type LocationMapAttributes = {
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  Arn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  CreateTime: string;
  DataSource: string;
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  MapArn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Location::Map.MapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html}
 */
export type MapConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  Style: string;
};
/**
 * Type definition for `AWS::Location::Map.PricingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-pricingplan.html}
 */
export type PricingPlan = "RequestBasedUsage";
/**
 * Definition of AWS::Location::Map Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html}
 */
export class LocationMap extends $Resource<
  "AWS::Location::Map",
  LocationMapProperties,
  LocationMapAttributes
> {
  public static readonly Type = "AWS::Location::Map";
  constructor(
    logicalId: string,
    properties: LocationMapProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LocationMap.Type, properties, options);
  }
}
