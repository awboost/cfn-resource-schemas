import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Location::PlaceIndex Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html}
 */
export type LocationPlaceIndexProperties = {
  DataSource: string;
  DataSourceConfiguration?: DataSourceConfiguration;
  /**
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  IndexName: string;
  PricingPlan?: PricingPlan;
};
/**
 * Attribute type definition for `AWS::Location::PlaceIndex`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html#aws-resource-location-placeindex-return-values}
 */
export type LocationPlaceIndexAttributes = {
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
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  IndexArn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Location::PlaceIndex.DataSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-datasourceconfiguration.html}
 */
export type DataSourceConfiguration = {
  IntendedUse?: IntendedUse;
};
/**
 * Type definition for `AWS::Location::PlaceIndex.IntendedUse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-intendeduse.html}
 */
export type IntendedUse = "SingleUse" | "Storage";
/**
 * Type definition for `AWS::Location::PlaceIndex.PricingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-pricingplan.html}
 */
export type PricingPlan = "RequestBasedUsage";
/**
 * Definition of AWS::Location::PlaceIndex Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html}
 */
export class LocationPlaceIndex extends $Resource<
  "AWS::Location::PlaceIndex",
  LocationPlaceIndexProperties,
  LocationPlaceIndexAttributes
> {
  public static readonly Type = "AWS::Location::PlaceIndex";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreateTime" as const,
    "IndexArn" as const,
    "UpdateTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: LocationPlaceIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LocationPlaceIndex.Type,
      properties,
      LocationPlaceIndex.AttributeNames,
      options,
    );
  }
}
