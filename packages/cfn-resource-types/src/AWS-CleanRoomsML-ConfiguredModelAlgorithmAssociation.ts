import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-configuredmodelalgorithmassociation.html}
 */
export type CleanRoomsMLConfiguredModelAlgorithmAssociationProperties = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:cleanrooms-ml:[-a-z0-9]+:[0-9]{12}:configured-model-algorithm/[-a-zA-Z0-9_/.]+$`
   */
  ConfiguredModelAlgorithmArn: string;
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  MembershipIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  Name: string;
  PrivacyConfiguration?: PrivacyConfiguration;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-configuredmodelalgorithmassociation.html#aws-resource-cleanroomsml-configuredmodelalgorithmassociation-return-values}
 */
export type CleanRoomsMLConfiguredModelAlgorithmAssociationAttributes = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  CollaborationIdentifier: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:cleanrooms-ml:[-a-z0-9]+:[0-9]{12}:membership/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/configured-model-algorithm-association/[-a-zA-Z0-9_/.]+$`
   */
  ConfiguredModelAlgorithmAssociationArn: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.CustomEntityConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-customentityconfig.html}
 */
export type CustomEntityConfig = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  CustomDataIdentifiers: string[];
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.EntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-entitytype.html}
 */
export type EntityType =
  | "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION"
  | "NUMBERS"
  | "CUSTOM";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.LogRedactionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-logredactionconfiguration.html}
 */
export type LogRedactionConfiguration = {
  CustomEntityConfig?: CustomEntityConfig;
  /**
   * @minLength `1`
   */
  EntitiesToRedact: EntityType[];
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.LogsConfigurationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-logsconfigurationpolicy.html}
 */
export type LogsConfigurationPolicy = {
  AllowedAccountIds: string[];
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  FilterPattern?: string;
  LogRedactionConfiguration?: LogRedactionConfiguration;
  LogType?: LogType;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.LogType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-logtype.html}
 */
export type LogType = "ALL" | "ERROR_SUMMARY";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.MetricsConfigurationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-metricsconfigurationpolicy.html}
 */
export type MetricsConfigurationPolicy = {
  NoiseLevel: NoiseLevelType;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.NoiseLevelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-noiseleveltype.html}
 */
export type NoiseLevelType = "HIGH" | "MEDIUM" | "LOW" | "NONE";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.PrivacyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-privacyconfiguration.html}
 */
export type PrivacyConfiguration = {
  Policies: PrivacyConfigurationPolicies;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.PrivacyConfigurationPolicies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-privacyconfigurationpolicies.html}
 */
export type PrivacyConfigurationPolicies = {
  TrainedModelExports?: TrainedModelExportsConfigurationPolicy;
  TrainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicy;
  TrainedModels?: TrainedModelsConfigurationPolicy;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-tag.html}
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
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelArtifactMaxSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelartifactmaxsize.html}
 */
export type TrainedModelArtifactMaxSize = {
  Unit: TrainedModelArtifactMaxSizeUnitType;
  /**
   * @min `0.01`
   * @max `10`
   */
  Value: number;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelArtifactMaxSizeUnitType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelartifactmaxsizeunittype.html}
 */
export type TrainedModelArtifactMaxSizeUnitType = "GB";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelExportFileType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelexportfiletype.html}
 */
export type TrainedModelExportFileType = "MODEL" | "OUTPUT";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelExportsConfigurationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelexportsconfigurationpolicy.html}
 */
export type TrainedModelExportsConfigurationPolicy = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  FilesToExport: TrainedModelExportFileType[];
  MaxSize: TrainedModelExportsMaxSize;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelExportsMaxSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelexportsmaxsize.html}
 */
export type TrainedModelExportsMaxSize = {
  Unit: TrainedModelExportsMaxSizeUnitType;
  /**
   * @min `0.01`
   * @max `10`
   */
  Value: number;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelExportsMaxSizeUnitType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelexportsmaxsizeunittype.html}
 */
export type TrainedModelExportsMaxSizeUnitType = "GB";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelInferenceJobsConfigurationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelinferencejobsconfigurationpolicy.html}
 */
export type TrainedModelInferenceJobsConfigurationPolicy = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  ContainerLogs?: LogsConfigurationPolicy[];
  MaxOutputSize?: TrainedModelInferenceMaxOutputSize;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelInferenceMaxOutputSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelinferencemaxoutputsize.html}
 */
export type TrainedModelInferenceMaxOutputSize = {
  Unit: TrainedModelInferenceMaxOutputSizeUnitType;
  /**
   * @min `0.01`
   * @max `50`
   */
  Value: number;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelInferenceMaxOutputSizeUnitType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelinferencemaxoutputsizeunittype.html}
 */
export type TrainedModelInferenceMaxOutputSizeUnitType = "GB";
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation.TrainedModelsConfigurationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithmassociation-trainedmodelsconfigurationpolicy.html}
 */
export type TrainedModelsConfigurationPolicy = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  ContainerLogs?: LogsConfigurationPolicy[];
  ContainerMetrics?: MetricsConfigurationPolicy;
  MaxArtifactSize?: TrainedModelArtifactMaxSize;
};
/**
 * Definition of AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-configuredmodelalgorithmassociation.html}
 */
export class CleanRoomsMLConfiguredModelAlgorithmAssociation extends $Resource<
  "AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation",
  CleanRoomsMLConfiguredModelAlgorithmAssociationProperties,
  CleanRoomsMLConfiguredModelAlgorithmAssociationAttributes
> {
  public static readonly Type =
    "AWS::CleanRoomsML::ConfiguredModelAlgorithmAssociation";
  constructor(
    logicalId: string,
    properties: CleanRoomsMLConfiguredModelAlgorithmAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CleanRoomsMLConfiguredModelAlgorithmAssociation.Type,
      properties,
      options,
    );
  }
}
