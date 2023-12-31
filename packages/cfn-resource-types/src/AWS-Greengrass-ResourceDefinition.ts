import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html}
 */
export type GreengrassResourceDefinitionProperties = {
  InitialVersion?: ResourceDefinitionVersion;
  Name: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Greengrass::ResourceDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#aws-resource-greengrass-resourcedefinition-return-values}
 */
export type GreengrassResourceDefinitionAttributes = {
  Arn: string;
  Id: string;
  LatestVersionArn: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.GroupOwnerSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-groupownersetting.html}
 */
export type GroupOwnerSetting = {
  AutoAddGroupOwner: boolean;
  GroupOwner?: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.LocalDeviceResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html}
 */
export type LocalDeviceResourceData = {
  GroupOwnerSetting?: GroupOwnerSetting;
  SourcePath: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.LocalVolumeResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html}
 */
export type LocalVolumeResourceData = {
  DestinationPath: string;
  GroupOwnerSetting?: GroupOwnerSetting;
  SourcePath: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.ResourceDataContainer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html}
 */
export type ResourceDataContainer = {
  LocalDeviceResourceData?: LocalDeviceResourceData;
  LocalVolumeResourceData?: LocalVolumeResourceData;
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.ResourceDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedefinitionversion.html}
 */
export type ResourceDefinitionVersion = {
  Resources: ResourceInstance[];
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.ResourceDownloadOwnerSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html}
 */
export type ResourceDownloadOwnerSetting = {
  GroupOwner: string;
  GroupPermission: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.ResourceInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html}
 */
export type ResourceInstance = {
  Id: string;
  Name: string;
  ResourceDataContainer: ResourceDataContainer;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.S3MachineLearningModelResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html}
 */
export type S3MachineLearningModelResourceData = {
  DestinationPath: string;
  OwnerSetting?: ResourceDownloadOwnerSetting;
  S3Uri: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.SageMakerMachineLearningModelResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html}
 */
export type SageMakerMachineLearningModelResourceData = {
  DestinationPath: string;
  OwnerSetting?: ResourceDownloadOwnerSetting;
  SageMakerJobArn: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinition.SecretsManagerSecretResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.html}
 */
export type SecretsManagerSecretResourceData = {
  ARN: string;
  AdditionalStagingLabelsToDownload?: string[];
};
/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html}
 */
export class GreengrassResourceDefinition extends $Resource<
  "AWS::Greengrass::ResourceDefinition",
  GreengrassResourceDefinitionProperties,
  GreengrassResourceDefinitionAttributes
> {
  public static readonly Type = "AWS::Greengrass::ResourceDefinition";
  constructor(
    logicalId: string,
    properties: GreengrassResourceDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GreengrassResourceDefinition.Type, properties, options);
  }
}
