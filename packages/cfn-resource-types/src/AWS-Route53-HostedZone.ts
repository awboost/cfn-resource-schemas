import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53::HostedZone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html}
 */
export type Route53HostedZoneProperties = {
  /**
     * A complex type that contains an optional comment.
    
    If you don't want to specify a comment, omit the HostedZoneConfig and Comment elements.
     */
  HostedZoneConfig?: HostedZoneConfig;
  /**
     * Adds, edits, or deletes tags for a health check or a hosted zone.
    
    For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
     */
  HostedZoneTags?: HostedZoneTag[];
  /**
     * The name of the domain. Specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical.
    
    If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of NameServers that are returned by the Fn::GetAtt intrinsic function.
     * @maxLength `1024`
     */
  Name?: string;
  /**
   * A complex type that contains information about a configuration for DNS query logging.
   */
  QueryLoggingConfig?: QueryLoggingConfig;
  /**
   * A complex type that contains information about the VPCs that are associated with the specified hosted zone.
   */
  VPCs?: VPC[];
};
/**
 * Attribute type definition for `AWS::Route53::HostedZone`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#aws-resource-route53-hostedzone-return-values}
 */
export type Route53HostedZoneAttributes = {
  Id: string;
  NameServers: string[];
};
/**
 * Type definition for `AWS::Route53::HostedZone.HostedZoneConfig`.
 * A complex type that contains an optional comment.

If you don't want to specify a comment, omit the HostedZoneConfig and Comment elements.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html}
 */
export type HostedZoneConfig = {
  /**
   * Any comments that you want to include about the hosted zone.
   * @maxLength `256`
   */
  Comment?: string;
};
/**
 * Type definition for `AWS::Route53::HostedZone.HostedZoneTag`.
 * A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html}
 */
export type HostedZoneTag = {
  /**
   * The key name of the tag.
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Route53::HostedZone.QueryLoggingConfig`.
 * A complex type that contains information about a configuration for DNS query logging.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html}
 */
export type QueryLoggingConfig = {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
   */
  CloudWatchLogsLogGroupArn: string;
};
/**
 * Type definition for `AWS::Route53::HostedZone.VPC`.
 * A complex type that contains information about an Amazon VPC. Route 53 Resolver uses the records in the private hosted zone to route traffic in that VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html}
 */
export type VPC = {
  /**
   * The ID of an Amazon VPC.
   */
  VPCId: string;
  /**
   * The region that an Amazon VPC was created in. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a list of up to date regions.
   */
  VPCRegion: string;
};
/**
 * Resource schema for AWS::Route53::HostedZone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html}
 */
export class Route53HostedZone extends $Resource<
  "AWS::Route53::HostedZone",
  Route53HostedZoneProperties,
  Route53HostedZoneAttributes
> {
  public static readonly Type = "AWS::Route53::HostedZone";
  constructor(
    logicalId: string,
    properties: Route53HostedZoneProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53HostedZone.Type, properties, options);
  }
}
