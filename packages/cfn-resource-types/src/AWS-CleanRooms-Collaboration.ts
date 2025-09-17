import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::Collaboration`.
 * Represents a collaboration between AWS accounts that allows for secure data collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html}
 */
export type CleanRoomsCollaborationProperties = {
  AnalyticsEngine?: AnalyticsEngine;
  AutoApprovedChangeTypes?: AutoApprovedChangeType[];
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  CreatorDisplayName: string;
  CreatorMLMemberAbilities?: MLMemberAbilities;
  CreatorMemberAbilities?: MemberAbility[];
  CreatorPaymentConfiguration?: PaymentConfiguration;
  DataEncryptionMetadata?: DataEncryptionMetadata;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description: string;
  JobLogStatus?: CollaborationJobLogStatus;
  /**
   * @minLength `0`
   * @maxLength `9`
   */
  Members?: MemberSpecification[];
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  Name: string;
  QueryLogStatus: CollaborationQueryLogStatus;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::Collaboration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html}
 */
export type CleanRoomsCollaborationAttributes = {
  /**
   * @maxLength `100`
   */
  Arn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  CollaborationIdentifier: string;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.AnalyticsEngine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-analyticsengine.html}
 */
export type AnalyticsEngine = "CLEAN_ROOMS_SQL" | "SPARK";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.AutoApprovedChangeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-autoapprovedchangetype.html}
 */
export type AutoApprovedChangeType = "ADD_MEMBER";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.CollaborationJobLogStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-collaborationjoblogstatus.html}
 */
export type CollaborationJobLogStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.CollaborationQueryLogStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-collaborationquerylogstatus.html}
 */
export type CollaborationQueryLogStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.CustomMLMemberAbility`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-custommlmemberability.html}
 */
export type CustomMLMemberAbility =
  | "CAN_RECEIVE_MODEL_OUTPUT"
  | "CAN_RECEIVE_INFERENCE_OUTPUT";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.DataEncryptionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html}
 */
export type DataEncryptionMetadata = {
  AllowCleartext: boolean;
  AllowDuplicates: boolean;
  AllowJoinsOnColumnsWithDifferentNames: boolean;
  PreserveNulls: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.JobComputePaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-jobcomputepaymentconfig.html}
 */
export type JobComputePaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MemberAbility`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberability.html}
 */
export type MemberAbility = "CAN_QUERY" | "CAN_RUN_JOB" | "CAN_RECEIVE_RESULTS";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MemberSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html}
 */
export type MemberSpecification = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d+$`
   */
  AccountId: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  DisplayName: string;
  MLMemberAbilities?: MLMemberAbilities;
  MemberAbilities?: MemberAbility[];
  PaymentConfiguration?: PaymentConfiguration;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MLMemberAbilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-mlmemberabilities.html}
 */
export type MLMemberAbilities = {
  CustomMLMemberAbilities: CustomMLMemberAbility[];
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MLPaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-mlpaymentconfig.html}
 */
export type MLPaymentConfig = {
  ModelInference?: ModelInferencePaymentConfig;
  ModelTraining?: ModelTrainingPaymentConfig;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.ModelInferencePaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-modelinferencepaymentconfig.html}
 */
export type ModelInferencePaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.ModelTrainingPaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-modeltrainingpaymentconfig.html}
 */
export type ModelTrainingPaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.PaymentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-paymentconfiguration.html}
 */
export type PaymentConfiguration = {
  JobCompute?: JobComputePaymentConfig;
  MachineLearning?: MLPaymentConfig;
  QueryCompute: QueryComputePaymentConfig;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.QueryComputePaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-querycomputepaymentconfig.html}
 */
export type QueryComputePaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CleanRooms::Collaboration`.
 * Represents a collaboration between AWS accounts that allows for secure data collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html}
 */
export class CleanRoomsCollaboration extends $Resource<
  "AWS::CleanRooms::Collaboration",
  CleanRoomsCollaborationProperties,
  CleanRoomsCollaborationAttributes
> {
  public static readonly Type = "AWS::CleanRooms::Collaboration";
  constructor(
    logicalId: string,
    properties: CleanRoomsCollaborationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CleanRoomsCollaboration.Type, properties, options);
  }
}
