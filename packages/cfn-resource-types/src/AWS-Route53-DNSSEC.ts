import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53::DNSSEC`.
 * Resource used to control (enable/disable) DNSSEC in a specific hosted zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html}
 */
export type Route53DNSSECProperties = {
  /**
   * The unique string (ID) used to identify a hosted zone.
   * @pattern `^[A-Z0-9]{1,32}$`
   */
  HostedZoneId: string;
};
/**
 * Resource type definition for `AWS::Route53::DNSSEC`.
 * Resource used to control (enable/disable) DNSSEC in a specific hosted zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html}
 */
export class Route53DNSSEC extends $Resource<
  "AWS::Route53::DNSSEC",
  Route53DNSSECProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Route53::DNSSEC";
  constructor(
    logicalId: string,
    properties: Route53DNSSECProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53DNSSEC.Type, properties, options);
  }
}
