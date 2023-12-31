import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "IpAddress" as const,
    "IsAttached" as const,
    "StaticIpArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: LightsailStaticIpProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LightsailStaticIp.Type,
      properties,
      LightsailStaticIp.AttributeNames,
      options,
    );
  }
}
