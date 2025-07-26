import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-domain.html}
 */
export type LightsailDomainProperties = {
  /**
   * An array of key-value pairs containing information about the domain entries.
   */
  DomainEntries?: DomainEntry[];
  /**
   * The name of the domain to manage in Lightsail.
   */
  DomainName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-domain.html#aws-resource-lightsail-domain-return-values}
 */
export type LightsailDomainAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the domain (read-only).
   * @pattern `^arn:.+:lightsail:[a-z0-9-]+:[0-9]{12}:Domain/[a-zA-Z0-9][a-zA-Z0-9-_.]{0,253}[a-zA-Z0-9]$`
   */
  Arn: string;
  /**
   * The timestamp when the domain was created (read-only).
   */
  CreatedAt: string;
  /**
   * An array of key-value pairs containing information about the domain entries.
   */
  DomainEntries: {
    /**
     * The ID of the domain recordset entry.
     */
    Id: string;
  }[];
  /**
   * The AWS Region and Availability Zone where the domain was created (read-only).
   */
  Location: {
    /**
     * The Availability Zone.
     */
    AvailabilityZone: string;
    /**
     * The AWS Region name.
     */
    RegionName: string;
  };
  /**
   * The Lightsail resource type (read-only).
   */
  ResourceType: "Domain";
  /**
   * The support code. Include this code in your email to support when you have questions (read-only).
   */
  SupportCode: string;
};
/**
 * Type definition for `AWS::Lightsail::Domain.DomainEntry`.
 * Describes the domain recordset entry (e.g., A record, CNAME record, TXT record, etc.)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-domain-domainentry.html}
 */
export type DomainEntry = {
  /**
   * When true, specifies whether the domain entry is an alias used by the Lightsail load balancer, Lightsail container service, Lightsail content delivery network (CDN) distribution, or another AWS resource. You can include an alias (A type) record in your request, which points to the DNS name of a load balancer, container service, CDN distribution, or other AWS resource and routes traffic to that resource.
   */
  IsAlias?: boolean;
  /**
   * The name of the domain entry.
   */
  Name: string;
  /**
   * The target AWS name server (e.g., ns-111.awsdns-11.com).
   */
  Target: string;
  /**
   * The type of domain entry (e.g., A, CNAME, MX, NS, SOA, SRV, TXT).
   */
  Type: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "SOA" | "SRV" | "TXT";
};
/**
 * Type definition for `AWS::Lightsail::Domain.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-domain-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-domain.html}
 */
export class LightsailDomain extends $Resource<
  "AWS::Lightsail::Domain",
  LightsailDomainProperties,
  LightsailDomainAttributes
> {
  public static readonly Type = "AWS::Lightsail::Domain";
  constructor(
    logicalId: string,
    properties: LightsailDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailDomain.Type, properties, options);
  }
}
