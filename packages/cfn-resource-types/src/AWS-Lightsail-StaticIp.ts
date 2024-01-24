import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::StaticIp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html}
 */
export type LightsailStaticIpProperties = {
  /**
   * The instance where the static IP is attached.
   */
  AttachedTo?: string;
  /**
   * The name of the static IP address.
   */
  StaticIpName: string;
};
/**
 * Attribute type definition for `AWS::Lightsail::StaticIp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html#aws-resource-lightsail-staticip-return-values}
 */
export type LightsailStaticIpAttributes = {
  /**
   * The static IP address.
   */
  IpAddress: string;
  /**
   * A Boolean value indicating whether the static IP is attached.
   */
  IsAttached: boolean;
  StaticIpArn: string;
};
/**
 * Resource Type definition for AWS::Lightsail::StaticIp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-staticip.html}
 */
export class LightsailStaticIp extends $Resource<
  "AWS::Lightsail::StaticIp",
  LightsailStaticIpProperties,
  LightsailStaticIpAttributes
> {
  public static readonly Type = "AWS::Lightsail::StaticIp";
  constructor(
    logicalId: string,
    properties: LightsailStaticIpProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailStaticIp.Type, properties, options);
  }
}
