import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::RecoveryGroup`.
 * AWS Route53 Recovery Readiness Recovery Group Schema and API specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html}
 */
export type Route53RecoveryReadinessRecoveryGroupProperties = {
  /**
   * A list of the cell Amazon Resource Names (ARNs) in the recovery group.
   * @maxLength `5`
   */
  Cells?: string[];
  /**
   * The name of the recovery group to create.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_]+`
   */
  RecoveryGroupName?: string;
  /**
   * A collection of tags associated with a resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryReadiness::RecoveryGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html#aws-resource-route53recoveryreadiness-recoverygroup-return-values}
 */
export type Route53RecoveryReadinessRecoveryGroupAttributes = {
  /**
   * A collection of tags associated with a resource.
   * @maxLength `256`
   */
  RecoveryGroupArn: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::RecoveryGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-recoverygroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::RecoveryGroup`.
 * AWS Route53 Recovery Readiness Recovery Group Schema and API specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html}
 */
export class Route53RecoveryReadinessRecoveryGroup extends $Resource<
  "AWS::Route53RecoveryReadiness::RecoveryGroup",
  Route53RecoveryReadinessRecoveryGroupProperties,
  Route53RecoveryReadinessRecoveryGroupAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::RecoveryGroup";
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessRecoveryGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53RecoveryReadinessRecoveryGroup.Type,
      properties,
      options,
    );
  }
}
