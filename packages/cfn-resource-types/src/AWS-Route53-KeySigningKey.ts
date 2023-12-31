import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Route53::KeySigningKey`.
 * Represents a key signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html}
 */
export type Route53KeySigningKeyProperties = {
  /**
   * The unique string (ID) used to identify a hosted zone.
   * @pattern `^[A-Z0-9]{1,32}$`
   */
  HostedZoneId: string;
  /**
   * The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
   * @minLength `1`
   * @maxLength `256`
   */
  KeyManagementServiceArn: string;
  /**
   * An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
   * @pattern `^[a-zA-Z0-9_]{3,128}$`
   */
  Name: string;
  /**
   * A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.
   */
  Status: "ACTIVE" | "INACTIVE";
};
/**
 * Resource type definition for `AWS::Route53::KeySigningKey`.
 * Represents a key signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html}
 */
export class Route53KeySigningKey extends $Resource<
  "AWS::Route53::KeySigningKey",
  Route53KeySigningKeyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Route53::KeySigningKey";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: Route53KeySigningKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53KeySigningKey.Type,
      properties,
      Route53KeySigningKey.AttributeNames,
      options,
    );
  }
}
