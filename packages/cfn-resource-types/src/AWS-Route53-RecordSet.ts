import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Route53::RecordSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html}
 */
export type Route53RecordSetProperties = {
  AliasTarget?: AliasTarget;
  CidrRoutingConfig?: CidrRoutingConfig;
  Comment?: string;
  Failover?: string;
  GeoLocation?: GeoLocation;
  HealthCheckId?: string;
  HostedZoneId?: string;
  HostedZoneName?: string;
  MultiValueAnswer?: boolean;
  Name: string;
  Region?: string;
  ResourceRecords?: string[];
  SetIdentifier?: string;
  TTL?: string;
  Type: string;
  Weight?: number;
};
/**
 * Attribute type definition for `AWS::Route53::RecordSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#aws-resource-route53-recordset-return-values}
 */
export type Route53RecordSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Route53::RecordSet.AliasTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-aliastarget.html}
 */
export type AliasTarget = {
  DNSName: string;
  EvaluateTargetHealth?: boolean;
  HostedZoneId: string;
};
/**
 * Type definition for `AWS::Route53::RecordSet.CidrRoutingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-cidrroutingconfig.html}
 */
export type CidrRoutingConfig = {
  CollectionId: string;
  LocationName: string;
};
/**
 * Type definition for `AWS::Route53::RecordSet.GeoLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html}
 */
export type GeoLocation = {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
};
/**
 * Resource Type definition for AWS::Route53::RecordSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html}
 */
export class Route53RecordSet extends $Resource<
  "AWS::Route53::RecordSet",
  Route53RecordSetProperties,
  Route53RecordSetAttributes
> {
  public static readonly Type = "AWS::Route53::RecordSet";
  constructor(
    logicalId: string,
    properties: Route53RecordSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53RecordSet.Type, properties, options);
  }
}
