import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html}
 */
export type GreengrassResourceDefinitionVersionProperties = {
  ResourceDefinitionId: string;
  Resources: ResourceInstance[];
};
/**
 * Attribute type definition for `AWS::Greengrass::ResourceDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html#aws-resource-greengrass-resourcedefinitionversion-return-values}
 */
export type GreengrassResourceDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.GroupOwnerSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-groupownersetting.html}
 */
export type GroupOwnerSetting = {
  AutoAddGroupOwner: boolean;
  GroupOwner?: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.LocalDeviceResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html}
 */
export type LocalDeviceResourceData = {
  GroupOwnerSetting?: GroupOwnerSetting;
  SourcePath: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.LocalVolumeResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html}
 */
export type LocalVolumeResourceData = {
  DestinationPath: string;
  GroupOwnerSetting?: GroupOwnerSetting;
  SourcePath: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.ResourceDataContainer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html}
 */
export type ResourceDataContainer = {
  LocalDeviceResourceData?: LocalDeviceResourceData;
  LocalVolumeResourceData?: LocalVolumeResourceData;
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.ResourceDownloadOwnerSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.html}
 */
export type ResourceDownloadOwnerSetting = {
  GroupOwner: string;
  GroupPermission: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.ResourceInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html}
 */
export type ResourceInstance = {
  Id: string;
  Name: string;
  ResourceDataContainer: ResourceDataContainer;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.S3MachineLearningModelResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html}
 */
export type S3MachineLearningModelResourceData = {
  DestinationPath: string;
  OwnerSetting?: ResourceDownloadOwnerSetting;
  S3Uri: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html}
 */
export type SageMakerMachineLearningModelResourceData = {
  DestinationPath: string;
  OwnerSetting?: ResourceDownloadOwnerSetting;
  SageMakerJobArn: string;
};
/**
 * Type definition for `AWS::Greengrass::ResourceDefinitionVersion.SecretsManagerSecretResourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.html}
 */
export type SecretsManagerSecretResourceData = {
  ARN: string;
  AdditionalStagingLabelsToDownload?: string[];
};
/**
 * Resource Type definition for AWS::Greengrass::ResourceDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html}
 */
export class GreengrassResourceDefinitionVersion extends $Resource<
  "AWS::Greengrass::ResourceDefinitionVersion",
  GreengrassResourceDefinitionVersionProperties,
  GreengrassResourceDefinitionVersionAttributes
> {
  public static readonly Type = "AWS::Greengrass::ResourceDefinitionVersion";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GreengrassResourceDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassResourceDefinitionVersion.Type,
      properties,
      GreengrassResourceDefinitionVersion.AttributeNames,
      options,
    );
  }
}
