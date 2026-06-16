import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResilienceHubV2::UserJourney`.
 * Creates a user journey within a Resilience Hub system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-userjourney.html}
 */
export type ResilienceHubV2UserJourneyProperties = {
  /**
   * The description of the user journey.
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The name of the user journey.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9 _\-]{1,59}$`
   */
  Name: string;
  /**
   * The ARN of the resilience policy to associate with this user journey.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  PolicyArn?: string;
  /**
   * The system ARN or system ID that owns this user journey.
   * @minLength `1`
   * @maxLength `2048`
   */
  SystemIdentifier: string;
};
/**
 * Attribute type definition for `AWS::ResilienceHubV2::UserJourney`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-userjourney.html#aws-resource-resiliencehubv2-userjourney-return-values}
 */
export type ResilienceHubV2UserJourneyAttributes = {
  /**
   * The timestamp when the user journey was created.
   */
  CreatedAt: string;
  /**
   * The timestamp when the user journey was last updated.
   */
  UpdatedAt: string;
  /**
   * The server-generated user journey ID.
   * @pattern `^\S{1,255}$`
   */
  UserJourneyId: string;
};
/**
 * Resource type definition for `AWS::ResilienceHubV2::UserJourney`.
 * Creates a user journey within a Resilience Hub system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-userjourney.html}
 */
export class ResilienceHubV2UserJourney extends $Resource<
  "AWS::ResilienceHubV2::UserJourney",
  ResilienceHubV2UserJourneyProperties,
  ResilienceHubV2UserJourneyAttributes
> {
  public static readonly Type = "AWS::ResilienceHubV2::UserJourney";
  constructor(
    logicalId: string,
    properties: ResilienceHubV2UserJourneyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubV2UserJourney.Type, properties, options);
  }
}
