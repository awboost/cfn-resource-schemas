import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpsWorks::ElasticLoadBalancerAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html}
 */
export type OpsWorksElasticLoadBalancerAttachmentProperties = {
  ElasticLoadBalancerName: string;
  LayerId: string;
};
/**
 * Attribute type definition for `AWS::OpsWorks::ElasticLoadBalancerAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html#aws-resource-opsworks-elasticloadbalancerattachment-return-values}
 */
export type OpsWorksElasticLoadBalancerAttachmentAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::OpsWorks::ElasticLoadBalancerAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html}
 */
export class OpsWorksElasticLoadBalancerAttachment extends $Resource<
  "AWS::OpsWorks::ElasticLoadBalancerAttachment",
  OpsWorksElasticLoadBalancerAttachmentProperties,
  OpsWorksElasticLoadBalancerAttachmentAttributes
> {
  public static readonly Type = "AWS::OpsWorks::ElasticLoadBalancerAttachment";
  constructor(
    logicalId: string,
    properties: OpsWorksElasticLoadBalancerAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpsWorksElasticLoadBalancerAttachment.Type,
      properties,
      options,
    );
  }
}
