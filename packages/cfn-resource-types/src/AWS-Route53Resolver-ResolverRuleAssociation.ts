import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53Resolver::ResolverRuleAssociation`.
 * In the response to an [AssociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html), [DisassociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html), or [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html) request, provides information about an association between a resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html}
 */
export type Route53ResolverResolverRuleAssociationProperties = {
  /**
   * The name of an association between a Resolver rule and a VPC.
   */
  Name?: string;
  /**
   * The ID of the Resolver rule that you associated with the VPC that is specified by ``VPCId``.
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
  ResolverRuleAssociationId: string;
};
/**
 * Resource type definition for `AWS::Route53Resolver::ResolverRuleAssociation`.
 * In the response to an [AssociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html), [DisassociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html), or [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html) request, provides information about an association between a resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
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
