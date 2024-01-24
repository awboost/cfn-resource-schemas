import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Route53Resolver::ResolverRuleAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html}
 */
export type Route53ResolverResolverRuleAssociationProperties = {
  /**
   * The name of an association between a Resolver rule and a VPC.
   */
  Name?: string;
  /**
   * The ID of the Resolver rule that you associated with the VPC that is specified by VPCId.
   */
  ResolverRuleId: string;
  /**
   * The ID of the VPC that you associated the Resolver rule with.
   */
  VPCId: string;
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverRuleAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#aws-resource-route53resolver-resolverruleassociation-return-values}
 */
export type Route53ResolverResolverRuleAssociationAttributes = {
  /**
   * Primary Identifier for Resolver Rule Association
   */
  ResolverRuleAssociationId: string;
};
/**
 * Resource Type definition for AWS::Route53Resolver::ResolverRuleAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html}
 */
export class Route53ResolverResolverRuleAssociation extends $Resource<
  "AWS::Route53Resolver::ResolverRuleAssociation",
  Route53ResolverResolverRuleAssociationProperties,
  Route53ResolverResolverRuleAssociationAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverRuleAssociation";
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverRuleAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverRuleAssociation.Type,
      properties,
      options,
    );
  }
}
