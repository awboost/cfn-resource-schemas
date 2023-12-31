import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: OpsWorksElasticLoadBalancerAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpsWorksElasticLoadBalancerAttachment.Type,
      properties,
      OpsWorksElasticLoadBalancerAttachment.AttributeNames,
      options,
    );
  }
}
