import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::SourceApiAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html}
 */
export type AppSyncSourceApiAssociationProperties = {
  /**
   * Description of the SourceApiAssociation.
   */
  Description?: string;
  /**
   * Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
   */
  MergedApiIdentifier?: string;
  /**
   * Customized configuration for SourceApiAssociation.
   */
  SourceApiAssociationConfig?: SourceApiAssociationConfig;
  /**
   * Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
   */
  SourceApiIdentifier?: string;
};
/**
 * Attribute type definition for `AWS::AppSync::SourceApiAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html#aws-resource-appsync-sourceapiassociation-return-values}
 */
export type AppSyncSourceApiAssociationAttributes = {
  /**
   * ARN of the SourceApiAssociation.
   */
  AssociationArn: string;
  /**
   * Id of the SourceApiAssociation.
   */
  AssociationId: string;
  /**
   * Date of last schema successful merge.
   */
  LastSuccessfulMergeDate: string;
  /**
   * ARN of the Merged API in the association.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  MergedApiArn: string;
  /**
   * GraphQLApiId of the Merged API in the association.
   */
  MergedApiId: string;
  /**
   * ARN of the source API in the association.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  SourceApiArn: string;
  /**
   * Current status of SourceApiAssociation.
   */
  SourceApiAssociationStatus:
    | "MERGE_SCHEDULED"
    | "MERGE_FAILED"
    | "MERGE_SUCCESS"
    | "MERGE_IN_PROGRESS"
    | "AUTO_MERGE_SCHEDULE_FAILED"
    | "DELETION_SCHEDULED"
    | "DELETION_IN_PROGRESS"
    | "DELETION_FAILED";
  /**
   * Current SourceApiAssociation status details.
   */
  SourceApiAssociationStatusDetail: string;
  /**
   * GraphQLApiId of the source API in the association.
   */
  SourceApiId: string;
};
/**
 * Type definition for `AWS::AppSync::SourceApiAssociation.SourceApiAssociationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-sourceapiassociation-sourceapiassociationconfig.html}
 */
export type SourceApiAssociationConfig = {
  /**
   * Configuration of the merged behavior for the association. For example when it could be auto or has to be manual.
   */
  MergeType?: "AUTO_MERGE" | "MANUAL_MERGE";
};
/**
 * Resource Type definition for AWS::AppSync::SourceApiAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html}
 */
export class AppSyncSourceApiAssociation extends $Resource<
  "AWS::AppSync::SourceApiAssociation",
  AppSyncSourceApiAssociationProperties,
  AppSyncSourceApiAssociationAttributes
> {
  public static readonly Type = "AWS::AppSync::SourceApiAssociation";
  constructor(
    logicalId: string,
    properties: AppSyncSourceApiAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncSourceApiAssociation.Type, properties, options);
  }
}
