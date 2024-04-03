import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::QueueFleetAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuefleetassociation.html}
 */
export type DeadlineQueueFleetAssociationProperties = {
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
  /**
   * @pattern `^fleet-[0-9a-f]{32}$`
   */
  FleetId: string;
  /**
   * @pattern `^queue-[0-9a-f]{32}$`
   */
  QueueId: string;
};
/**
 * Definition of AWS::Deadline::QueueFleetAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuefleetassociation.html}
 */
export class DeadlineQueueFleetAssociation extends $Resource<
  "AWS::Deadline::QueueFleetAssociation",
  DeadlineQueueFleetAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Deadline::QueueFleetAssociation";
  constructor(
    logicalId: string,
    properties: DeadlineQueueFleetAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineQueueFleetAssociation.Type, properties, options);
  }
}
