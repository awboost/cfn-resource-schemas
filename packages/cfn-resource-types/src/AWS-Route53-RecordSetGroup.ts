import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Route53::RecordSetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html}
 */
export type Route53RecordSetGroupProperties = {
  Comment?: string;
  HostedZoneId?: string;
  HostedZoneName?: string;
  RecordSets?: RecordSet[];
};
/**
 * Attribute type definition for `AWS::Route53::RecordSetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html#aws-resource-route53-recordsetgroup-return-values}
 */
export type Route53RecordSetGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Route53::RecordSetGroup.AliasTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-aliastarget.html}
 */
export type AliasTarget = {
  DNSName: string;
  EvaluateTargetHealth?: boolean;
  HostedZoneId: string;
};
/**
 * Type definition for `AWS::Route53::RecordSetGroup.CidrRoutingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-cidrroutingconfig.html}
 */
export type CidrRoutingConfig = {
  CollectionId: string;
  LocationName: string;
};
/**
 * Type definition for `AWS::Route53::RecordSetGroup.GeoLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geolocation.html}
 */
export type GeoLocation = {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
};
/**
 * Type definition for `AWS::Route53::RecordSetGroup.RecordSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html}
 */
export type RecordSet = {
  AliasTarget?: AliasTarget;
  CidrRoutingConfig?: CidrRoutingConfig;
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
 * Resource Type definition for AWS::Route53::RecordSetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html}
 */
export class Route53RecordSetGroup extends $Resource<
  "AWS::Route53::RecordSetGroup",
  Route53RecordSetGroupProperties,
  Route53RecordSetGroupAttributes
> {
  public static readonly Type = "AWS::Route53::RecordSetGroup";
  constructor(
    logicalId: string,
    properties: Route53RecordSetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53RecordSetGroup.Type, properties, options);
  }
}
