import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ConnectCampaigns::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html}
 */
export type ConnectCampaignsCampaignProperties = {
  /**
   * Amazon Connect Instance Arn
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  ConnectInstanceArn: string;
  /**
   * The possible types of dialer config parameters
   */
  DialerConfig: DialerConfig;
  /**
   * Amazon Connect Campaign Name
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * The configuration used for outbound calls.
   */
  OutboundCallConfig: OutboundCallConfig;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ConnectCampaigns::Campaign`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#aws-resource-connectcampaigns-campaign-return-values}
 */
export type ConnectCampaignsCampaignAttributes = {
  /**
   * Amazon Connect Campaign Arn
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:connect-campaigns:[-a-z0-9]*:[0-9]{12}:campaign/[-a-zA-Z0-9]*$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.AgentlessDialerConfig`.
 * Agentless Dialer config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-agentlessdialerconfig.html}
 */
export type AgentlessDialerConfig = {
  /**
   * Allocates dialing capacity for this campaign between multiple active campaigns.
   * @min `0.01`
   * @max `1`
   */
  DialingCapacity?: number;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.AnswerMachineDetectionConfig`.
 * The configuration used for answering machine detection during outbound calls
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html}
 */
export type AnswerMachineDetectionConfig = {
  /**
   * Enables detection of prompts (e.g., beep after after a voicemail greeting)
   */
  AwaitAnswerMachinePrompt?: boolean;
  /**
   * Flag to decided whether outbound calls should have answering machine detection enabled or not
   */
  EnableAnswerMachineDetection: boolean;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.DialerConfig`.
 * The possible types of dialer config parameters
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html}
 */
export type DialerConfig = {
  /**
   * Agentless Dialer config
   */
  AgentlessDialerConfig?: AgentlessDialerConfig;
  /**
   * Predictive Dialer config
   */
  PredictiveDialerConfig?: PredictiveDialerConfig;
  /**
   * Progressive Dialer config
   */
  ProgressiveDialerConfig?: ProgressiveDialerConfig;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.OutboundCallConfig`.
 * The configuration used for outbound calls.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html}
 */
export type OutboundCallConfig = {
  /**
   * The configuration used for answering machine detection during outbound calls
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;
  /**
   * The identifier of the contact flow for the outbound call.
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ConnectContactFlowArn: string;
  /**
   * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*queue/[-a-zA-Z0-9]*$`
   */
  ConnectQueueArn?: string;
  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   * @maxLength `100`
   */
  ConnectSourcePhoneNumber?: string;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.PredictiveDialerConfig`.
 * Predictive Dialer config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-predictivedialerconfig.html}
 */
export type PredictiveDialerConfig = {
  /**
   * The bandwidth allocation of a queue resource.
   * @min `0`
   * @max `1`
   */
  BandwidthAllocation: number;
  /**
   * Allocates dialing capacity for this campaign between multiple active campaigns.
   * @min `0.01`
   * @max `1`
   */
  DialingCapacity?: number;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.ProgressiveDialerConfig`.
 * Progressive Dialer config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-progressivedialerconfig.html}
 */
export type ProgressiveDialerConfig = {
  /**
   * The bandwidth allocation of a queue resource.
   * @min `0`
   * @max `1`
   */
  BandwidthAllocation: number;
  /**
   * Allocates dialing capacity for this campaign between multiple active campaigns.
   * @min `0.01`
   * @max `1`
   */
  DialingCapacity?: number;
};
/**
 * Type definition for `AWS::ConnectCampaigns::Campaign.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::ConnectCampaigns::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html}
 */
export class ConnectCampaignsCampaign extends $Resource<
  "AWS::ConnectCampaigns::Campaign",
  ConnectCampaignsCampaignProperties,
  ConnectCampaignsCampaignAttributes
> {
  public static readonly Type = "AWS::ConnectCampaigns::Campaign";
  constructor(
    logicalId: string,
    properties: ConnectCampaignsCampaignProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectCampaignsCampaign.Type, properties, options);
  }
}
