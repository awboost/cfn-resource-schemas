import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::ReadinessCheck`.
 * Aws Route53 Recovery Readiness Check Schema and API specification.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html}
 */
export type Route53RecoveryReadinessReadinessCheckProperties = {
  /**
   * Name of the ReadinessCheck to create.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_]+`
   */
  ReadinessCheckName?: string;
  /**
   * The name of the resource set to check.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_]+`
   */
  ResourceSetName?: string;
  /**
   * A collection of tags associated with a resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryReadiness::ReadinessCheck`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html#aws-resource-route53recoveryreadiness-readinesscheck-return-values}
 */
export type Route53RecoveryReadinessReadinessCheckAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the readiness check.
   * @maxLength `256`
   */
  ReadinessCheckArn: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ReadinessCheck.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-readinesscheck-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::ReadinessCheck`.
 * Aws Route53 Recovery Readiness Check Schema and API specification.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html}
 */
export class Route53RecoveryReadinessReadinessCheck extends $Resource<
  "AWS::Route53RecoveryReadiness::ReadinessCheck",
  Route53RecoveryReadinessReadinessCheckProperties,
  Route53RecoveryReadinessReadinessCheckAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::ReadinessCheck";
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessReadinessCheckProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53RecoveryReadinessReadinessCheck.Type,
      properties,
      options,
    );
  }
}
