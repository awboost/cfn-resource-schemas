import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::QueueLimitAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html}
 */
export type DeadlineQueueLimitAssociationProperties = {
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
  /**
   * @pattern `^limit-[0-9a-f]{32}$`
   */
  LimitId: string;
  /**
   * @pattern `^queue-[0-9a-f]{32}$`
   */
  QueueId: string;
};
/**
 * Definition of AWS::Deadline::QueueLimitAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html}
 */
export class DeadlineQueueLimitAssociation extends $Resource<
  "AWS::Deadline::QueueLimitAssociation",
  DeadlineQueueLimitAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Deadline::QueueLimitAssociation";
  constructor(
    logicalId: string,
    properties: DeadlineQueueLimitAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineQueueLimitAssociation.Type, properties, options);
  }
}
