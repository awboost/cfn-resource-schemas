import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Location::RouteCalculator Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html}
 */
export type LocationRouteCalculatorProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  CalculatorName: string;
  DataSource: string;
  /**
   * @maxLength `1000`
   */
  Description?: string;
  PricingPlan?: PricingPlan;
};
/**
 * Attribute type definition for `AWS::Location::RouteCalculator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html#aws-resource-location-routecalculator-return-values}
 */
export type LocationRouteCalculatorAttributes = {
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  Arn: string;
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  CalculatorArn: string;
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
 * Type definition for `AWS::Location::RouteCalculator.PricingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-routecalculator-pricingplan.html}
 */
export type PricingPlan = "RequestBasedUsage";
/**
 * Definition of AWS::Location::RouteCalculator Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html}
 */
export class LocationRouteCalculator extends $Resource<
  "AWS::Location::RouteCalculator",
  LocationRouteCalculatorProperties,
  LocationRouteCalculatorAttributes
> {
  public static readonly Type = "AWS::Location::RouteCalculator";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CalculatorArn" as const,
    "CreateTime" as const,
    "UpdateTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: LocationRouteCalculatorProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LocationRouteCalculator.Type,
      properties,
      LocationRouteCalculator.AttributeNames,
      options,
    );
  }
}
