import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::SignalMap Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html}
 */
export type MediaLiveSignalMapProperties = {
  CloudWatchAlarmTemplateGroupIdentifiers?: string[];
  /**
   * A resource's optional description.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @minLength `1`
   * @maxLength `2048`
   */
  DiscoveryEntryPointArn: string;
  EventBridgeRuleTemplateGroupIdentifiers?: string[];
  /**
   * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
   */
  ForceRediscovery?: boolean;
  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[^\s]+$`
   */
  Name: string;
  /**
   * Represents the tags associated with a resource.
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::MediaLive::SignalMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#aws-resource-medialive-signalmap-return-values}
 */
export type MediaLiveSignalMapAttributes = {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @pattern `^arn:.+:medialive:.+:signal-map:.+$`
   */
  Arn: string;
  CloudWatchAlarmTemplateGroupIds: string[];
  CreatedAt: string;
  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @minLength `1`
   * @maxLength `2048`
   */
  ErrorMessage: string;
  EventBridgeRuleTemplateGroupIds: string[];
  /**
   * A map representing an incomplete AWS media workflow as a graph.
   */
  FailedMediaResourceMap: Record<
    string,
    {
      Destinations: {
        /**
         * The ARN of a resource used in AWS media workflows.
         * @minLength `1`
         * @maxLength `2048`
         * @pattern `^arn.+$`
         */
        Arn: string;
        /**
         * The logical name of an AWS media resource.
         * @minLength `1`
         * @maxLength `256`
         */
        Name: string;
      }[];
      /**
       * The logical name of an AWS media resource.
       * @minLength `1`
       * @maxLength `256`
       */
      Name: string;
      Sources: {
        /**
         * The ARN of a resource used in AWS media workflows.
         * @minLength `1`
         * @maxLength `2048`
         * @pattern `^arn.+$`
         */
        Arn: string;
        /**
         * The logical name of an AWS media resource.
         * @minLength `1`
         * @maxLength `256`
         */
        Name: string;
      }[];
    }
  >;
  /**
   * A signal map's id.
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  Id: string;
  Identifier: string;
  LastDiscoveredAt: string;
  /**
   * Represents the latest successful monitor deployment of a signal map.
   */
  LastSuccessfulMonitorDeployment: {
    /**
     * URI associated with a signal map's monitor deployment.
     * @minLength `1`
     * @maxLength `2048`
     */
    DetailsUri: string;
    /**
     * A signal map's monitor deployment status.
     */
    Status: SignalMapMonitorDeploymentStatus;
  };
  /**
   * A map representing an AWS media workflow as a graph.
   */
  MediaResourceMap: Record<
    string,
    {
      Destinations: {
        /**
         * The ARN of a resource used in AWS media workflows.
         * @minLength `1`
         * @maxLength `2048`
         * @pattern `^arn.+$`
         */
        Arn: string;
        /**
         * The logical name of an AWS media resource.
         * @minLength `1`
         * @maxLength `256`
         */
        Name: string;
      }[];
      /**
       * The logical name of an AWS media resource.
       * @minLength `1`
       * @maxLength `256`
       */
      Name: string;
      Sources: {
        /**
         * The ARN of a resource used in AWS media workflows.
         * @minLength `1`
         * @maxLength `2048`
         * @pattern `^arn.+$`
         */
        Arn: string;
        /**
         * The logical name of an AWS media resource.
         * @minLength `1`
         * @maxLength `256`
         */
        Name: string;
      }[];
    }
  >;
  ModifiedAt: string;
  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   */
  MonitorChangesPendingDeployment: boolean;
  /**
   * Represents the latest monitor deployment of a signal map.
   */
  MonitorDeployment: {
    /**
     * URI associated with a signal map's monitor deployment.
     * @minLength `1`
     * @maxLength `2048`
     */
    DetailsUri: string;
    /**
     * Error message associated with a failed monitor deployment of a signal map.
     * @minLength `1`
     * @maxLength `2048`
     */
    ErrorMessage: string;
    /**
     * A signal map's monitor deployment status.
     */
    Status: SignalMapMonitorDeploymentStatus;
  };
  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   */
  Status: SignalMapStatus;
};
/**
 * Type definition for `AWS::MediaLive::SignalMap.FailedMediaResourceMap`.
 * A map representing an incomplete AWS media workflow as a graph.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-failedmediaresourcemap.html}
 */
export type FailedMediaResourceMap = Record<string, MediaResource>;
/**
 * Type definition for `AWS::MediaLive::SignalMap.MediaResource`.
 * An AWS resource used in media workflows.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresource.html}
 */
export type MediaResource = {
  Destinations?: MediaResourceNeighbor[];
  /**
   * The logical name of an AWS media resource.
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
  Sources?: MediaResourceNeighbor[];
};
/**
 * Type definition for `AWS::MediaLive::SignalMap.MediaResourceMap`.
 * A map representing an AWS media workflow as a graph.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresourcemap.html}
 */
export type MediaResourceMap = Record<string, MediaResource>;
/**
 * Type definition for `AWS::MediaLive::SignalMap.MediaResourceNeighbor`.
 * A direct source or destination neighbor to an AWS media resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresourceneighbor.html}
 */
export type MediaResourceNeighbor = {
  /**
   * The ARN of a resource used in AWS media workflows.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn.+$`
   */
  Arn: string;
  /**
   * The logical name of an AWS media resource.
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::MediaLive::SignalMap.MonitorDeployment`.
 * Represents the latest monitor deployment of a signal map.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-monitordeployment.html}
 */
export type MonitorDeployment = {
  /**
   * URI associated with a signal map's monitor deployment.
   * @minLength `1`
   * @maxLength `2048`
   */
  DetailsUri?: string;
  /**
   * Error message associated with a failed monitor deployment of a signal map.
   * @minLength `1`
   * @maxLength `2048`
   */
  ErrorMessage?: string;
  /**
   * A signal map's monitor deployment status.
   */
  Status: SignalMapMonitorDeploymentStatus;
};
/**
 * Type definition for `AWS::MediaLive::SignalMap.SignalMapMonitorDeploymentStatus`.
 * A signal map's monitor deployment status.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-signalmapmonitordeploymentstatus.html}
 */
export type SignalMapMonitorDeploymentStatus =
  | "NOT_DEPLOYED"
  | "DRY_RUN_DEPLOYMENT_COMPLETE"
  | "DRY_RUN_DEPLOYMENT_FAILED"
  | "DRY_RUN_DEPLOYMENT_IN_PROGRESS"
  | "DEPLOYMENT_COMPLETE"
  | "DEPLOYMENT_FAILED"
  | "DEPLOYMENT_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED"
  | "DELETE_IN_PROGRESS";
/**
 * Type definition for `AWS::MediaLive::SignalMap.SignalMapStatus`.
 * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-signalmapstatus.html}
 */
export type SignalMapStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_REVERTED"
  | "UPDATE_FAILED"
  | "READY"
  | "NOT_READY";
/**
 * Type definition for `AWS::MediaLive::SignalMap.SuccessfulMonitorDeployment`.
 * Represents the latest successful monitor deployment of a signal map.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-successfulmonitordeployment.html}
 */
export type SuccessfulMonitorDeployment = {
  /**
   * URI associated with a signal map's monitor deployment.
   * @minLength `1`
   * @maxLength `2048`
   */
  DetailsUri: string;
  /**
   * A signal map's monitor deployment status.
   */
  Status: SignalMapMonitorDeploymentStatus;
};
/**
 * Type definition for `AWS::MediaLive::SignalMap.TagMap`.
 * Represents the tags associated with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::MediaLive::SignalMap Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html}
 */
export class MediaLiveSignalMap extends $Resource<
  "AWS::MediaLive::SignalMap",
  MediaLiveSignalMapProperties,
  MediaLiveSignalMapAttributes
> {
  public static readonly Type = "AWS::MediaLive::SignalMap";
  constructor(
    logicalId: string,
    properties: MediaLiveSignalMapProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveSignalMap.Type, properties, options);
  }
}
