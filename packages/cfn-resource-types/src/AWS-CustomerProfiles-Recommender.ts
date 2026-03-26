import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CustomerProfiles::Recommender
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-recommender.html}
 */
export type CustomerProfilesRecommenderProperties = {
  /**
   * The description of the recommender.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the domain for which the recommender will be created
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * Configuration for the recommender
   */
  RecommenderConfig?: RecommenderConfig;
  /**
   * The name of the recommender
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  RecommenderName: string;
  /**
   * The name of the recommender recipe.
   * @minLength `1`
   * @maxLength `255`
   */
  RecommenderRecipeName: string;
  /**
   * The tags used to organize, track, or control access for this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::Recommender`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-recommender.html#aws-resource-customerprofiles-recommender-return-values}
 */
export type CustomerProfilesRecommenderAttributes = {
  /**
   * The timestamp of when the recommender was created.
   */
  CreatedAt: string;
  /**
   * The reason for recommender failure.
   */
  FailureReason: string;
  /**
   * The timestamp of when the recommender was last updated.
   */
  LastUpdatedAt: string;
  /**
   * Information about the latest recommender update
   */
  LatestRecommenderUpdate: {
    /**
     * The timestamp of when the update was created
     */
    CreationDateTime: string;
    /**
     * The reason for update failure
     */
    FailureReason: string;
    /**
     * The timestamp of when the update was last modified
     */
    LastUpdatedDateTime: string;
    /**
     * Configuration for the recommender
     */
    RecommenderConfig: {
      /**
       * Configuration for events used in the recommender
       */
      EventsConfig: {
        /**
         * List of event parameters with their value thresholds
         * @minLength `1`
         * @maxLength `10`
         */
        EventParametersList: {
          /**
           * The type of event
           * @minLength `1`
           * @maxLength `255`
           */
          EventType: string;
          /**
           * The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.
           */
          EventValueThreshold: number;
        }[];
      };
    };
    /**
     * The status of the recommender
     */
    Status: RecommenderStatus;
  };
  /**
   * The Amazon Resource Name (ARN) of the recommender.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:([a-z\d-]+):profile:.*:.*:.+$`
   */
  RecommenderArn: string;
  /**
   * The status of the recommender
   */
  Status: RecommenderStatus;
  /**
   * @maxLength `5`
   */
  TrainingMetrics: {
    /**
     * Training metrics by type
     */
    Metrics: {
      coverage: number;
      freshness: number;
      hit: number;
      popularity: number;
      recall: number;
      similarity: number;
    };
    /**
     * Timestamp of the training metrics
     */
    Time: string;
  }[];
};
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.EventParameters`.
 * Event parameters with type and value threshold
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-eventparameters.html}
 */
export type EventParameters = {
  /**
   * The type of event
   * @minLength `1`
   * @maxLength `255`
   */
  EventType: string;
  /**
   * The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.
   */
  EventValueThreshold?: number;
};
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.EventsConfig`.
 * Configuration for events used in the recommender
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-eventsconfig.html}
 */
export type EventsConfig = {
  /**
   * List of event parameters with their value thresholds
   * @minLength `1`
   * @maxLength `10`
   */
  EventParametersList: EventParameters[];
};
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.RecommenderConfig`.
 * Configuration for the recommender
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-recommenderconfig.html}
 */
export type RecommenderConfig = {
  /**
   * Configuration for events used in the recommender
   */
  EventsConfig?: EventsConfig;
};
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.RecommenderStatus`.
 * The status of the recommender
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-recommenderstatus.html}
 */
export type RecommenderStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "STOPPING"
  | "STARTING"
  | "ACTIVE"
  | "INACTIVE"
  | "FAILED"
  | "DELETING";
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.RecommenderUpdate`.
 * Information about the latest recommender update
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-recommenderupdate.html}
 */
export type RecommenderUpdate = {
  /**
   * The timestamp of when the update was created
   */
  CreationDateTime?: string;
  /**
   * The reason for update failure
   */
  FailureReason?: string;
  /**
   * The timestamp of when the update was last modified
   */
  LastUpdatedDateTime?: string;
  /**
   * Configuration for the recommender
   */
  RecommenderConfig?: RecommenderConfig;
  /**
   * The status of the recommender
   */
  Status?: RecommenderStatus;
};
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Recommender.TrainingMetrics`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-recommender-trainingmetrics.html}
 */
export type TrainingMetrics = {
  /**
   * Training metrics by type
   */
  Metrics?: {
    coverage?: number;
    freshness?: number;
    hit?: number;
    popularity?: number;
    recall?: number;
    similarity?: number;
  };
  /**
   * Timestamp of the training metrics
   */
  Time?: string;
};
/**
 * Resource Type definition for AWS::CustomerProfiles::Recommender
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-recommender.html}
 */
export class CustomerProfilesRecommender extends $Resource<
  "AWS::CustomerProfiles::Recommender",
  CustomerProfilesRecommenderProperties,
  CustomerProfilesRecommenderAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::Recommender";
  constructor(
    logicalId: string,
    properties: CustomerProfilesRecommenderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CustomerProfilesRecommender.Type, properties, options);
  }
}
