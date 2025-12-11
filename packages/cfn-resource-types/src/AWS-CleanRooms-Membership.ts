import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::Membership`.
 * Represents an AWS account that is a part of a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html}
 */
export type CleanRoomsMembershipProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  CollaborationIdentifier: string;
  DefaultJobResultConfiguration?: MembershipProtectedJobResultConfiguration;
  DefaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  JobLogStatus?: MembershipJobLogStatus;
  PaymentConfiguration?: MembershipPaymentConfiguration;
  QueryLogStatus: MembershipQueryLogStatus;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms membership.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::Membership`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#aws-resource-cleanrooms-membership-return-values}
 */
export type CleanRoomsMembershipAttributes = {
  /**
   * @maxLength `100`
   */
  Arn: string;
  /**
   * @maxLength `100`
   */
  CollaborationArn: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d+$`
   */
  CollaborationCreatorAccountId: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  MembershipIdentifier: string;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipJobComputePaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipjobcomputepaymentconfig.html}
 */
export type MembershipJobComputePaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipJobLogStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipjoblogstatus.html}
 */
export type MembershipJobLogStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipMLPaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipmlpaymentconfig.html}
 */
export type MembershipMLPaymentConfig = {
  ModelInference?: MembershipModelInferencePaymentConfig;
  ModelTraining?: MembershipModelTrainingPaymentConfig;
  SyntheticDataGeneration?: MembershipSyntheticDataGenerationPaymentConfig;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipModelInferencePaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipmodelinferencepaymentconfig.html}
 */
export type MembershipModelInferencePaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipModelTrainingPaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipmodeltrainingpaymentconfig.html}
 */
export type MembershipModelTrainingPaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipPaymentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershippaymentconfiguration.html}
 */
export type MembershipPaymentConfiguration = {
  JobCompute?: MembershipJobComputePaymentConfig;
  MachineLearning?: MembershipMLPaymentConfig;
  QueryCompute: MembershipQueryComputePaymentConfig;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipProtectedJobOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedjoboutputconfiguration.html}
 */
export type MembershipProtectedJobOutputConfiguration = {
  S3: ProtectedJobS3OutputConfigurationInput;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipProtectedJobResultConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedjobresultconfiguration.html}
 */
export type MembershipProtectedJobResultConfiguration = {
  OutputConfiguration: MembershipProtectedJobOutputConfiguration;
  /**
   * @minLength `32`
   * @maxLength `512`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipProtectedQueryOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryoutputconfiguration.html}
 */
export type MembershipProtectedQueryOutputConfiguration = {
  S3: ProtectedQueryS3OutputConfiguration;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipProtectedQueryResultConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html}
 */
export type MembershipProtectedQueryResultConfiguration = {
  OutputConfiguration: MembershipProtectedQueryOutputConfiguration;
  /**
   * @minLength `32`
   * @maxLength `512`
   */
  RoleArn?: string;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipQueryComputePaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipquerycomputepaymentconfig.html}
 */
export type MembershipQueryComputePaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipQueryLogStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipquerylogstatus.html}
 */
export type MembershipQueryLogStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipSyntheticDataGenerationPaymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipsyntheticdatagenerationpaymentconfig.html}
 */
export type MembershipSyntheticDataGenerationPaymentConfig = {
  IsResponsible: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.ProtectedJobS3OutputConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedjobs3outputconfigurationinput.html}
 */
export type ProtectedJobS3OutputConfigurationInput = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  Bucket: string;
  KeyPrefix?: string;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.ProtectedQueryS3OutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html}
 */
export type ProtectedQueryS3OutputConfiguration = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  Bucket: string;
  KeyPrefix?: string;
  ResultFormat: ResultFormat;
  SingleFileOutput?: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.ResultFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-resultformat.html}
 */
export type ResultFormat = "CSV" | "PARQUET";
/**
 * Type definition for `AWS::CleanRooms::Membership.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::Membership`.
 * Represents an AWS account that is a part of a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html}
 */
export class CleanRoomsMembership extends $Resource<
  "AWS::CleanRooms::Membership",
  CleanRoomsMembershipProperties,
  CleanRoomsMembershipAttributes
> {
  public static readonly Type = "AWS::CleanRooms::Membership";
  constructor(
    logicalId: string,
    properties: CleanRoomsMembershipProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CleanRoomsMembership.Type, properties, options);
  }
}
