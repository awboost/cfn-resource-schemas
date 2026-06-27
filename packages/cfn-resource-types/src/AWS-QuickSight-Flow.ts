import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QuickSight::Flow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-flow.html}
 */
export type QuickSightFlowProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^(?!\s+$)[^{}"\\<>]*$`
   */
  Description?: string;
  FlowDefinition: any;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!\s+$)[^{}"\\<>]*$`
   */
  Name: string;
  Permissions?: Permission[];
};
/**
 * Attribute type definition for `AWS::QuickSight::Flow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-flow.html#aws-resource-quicksight-flow-return-values}
 */
export type QuickSightFlowAttributes = {
  Arn: string;
  CreatedTime: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  FlowId: string;
  LastUpdatedTime: string;
  PublishState: FlowPublishState;
  StepAliases: {
    StepAlias: string;
    /**
     * @minLength `1`
     * @maxLength `64`
     */
    StepId: string;
  }[];
};
/**
 * Type definition for `AWS::QuickSight::Flow.FlowPublishState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-flow-flowpublishstate.html}
 */
export type FlowPublishState = "PUBLISHED" | "DRAFT" | "PENDING_APPROVAL";
/**
 * Type definition for `AWS::QuickSight::Flow.Permission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-flow-permission.html}
 */
export type Permission = {
  Actions: string[];
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Principal: string;
};
/**
 * Type definition for `AWS::QuickSight::Flow.StepAliasMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-flow-stepaliasmapping.html}
 */
export type StepAliasMapping = {
  StepAlias: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  StepId: string;
};
/**
 * Definition of AWS::QuickSight::Flow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-flow.html}
 */
export class QuickSightFlow extends $Resource<
  "AWS::QuickSight::Flow",
  QuickSightFlowProperties,
  QuickSightFlowAttributes
> {
  public static readonly Type = "AWS::QuickSight::Flow";
  constructor(
    logicalId: string,
    properties: QuickSightFlowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightFlow.Type, properties, options);
  }
}
