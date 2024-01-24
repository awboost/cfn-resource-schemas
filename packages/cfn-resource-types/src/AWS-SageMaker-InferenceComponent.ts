import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::InferenceComponent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html}
 */
export type SageMakerInferenceComponentProperties = {
  /**
   * The Amazon Resource Name (ARN) of the endpoint the inference component is associated with
   * @minLength `1`
   * @maxLength `256`
   */
  EndpointArn?: string;
  /**
   * The name of the endpoint the inference component is associated with
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  EndpointName: string;
  /**
   * The name of the inference component
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  InferenceComponentName?: string;
  /**
   * The runtime config for the inference component
   */
  RuntimeConfig: InferenceComponentRuntimeConfig;
  /**
   * The specification for the inference component
   */
  Specification: InferenceComponentSpecification;
  /**
   * An array of tags to apply to the resource
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The name of the endpoint variant the inference component is associated with
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  VariantName: string;
};
/**
 * Attribute type definition for `AWS::SageMaker::InferenceComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#aws-resource-sagemaker-inferencecomponent-return-values}
 */
export type SageMakerInferenceComponentAttributes = {
  CreationTime: string;
  /**
   * The failure reason if the inference component is in a failed state
   * @maxLength `63`
   */
  FailureReason: string;
  /**
   * The Amazon Resource Name (ARN) of the inference component
   * @minLength `1`
   * @maxLength `256`
   */
  InferenceComponentArn: string;
  InferenceComponentStatus: InferenceComponentStatus;
  LastModifiedTime: string;
  /**
   * The runtime config for the inference component
   */
  RuntimeConfig: {
    /**
     * The number of copies for the inference component
     * @min `0`
     */
    CurrentCopyCount: number;
    /**
     * The number of copies for the inference component
     * @min `0`
     */
    DesiredCopyCount: number;
  };
  /**
   * The specification for the inference component
   */
  Specification: {
    Container: {
      DeployedImage: {
        ResolutionTime: string;
        /**
         * The image to use for the container that will be materialized for the inference component
         * @maxLength `255`
         * @pattern `[\S]+`
         */
        ResolvedImage: string;
        /**
         * The image to use for the container that will be materialized for the inference component
         * @maxLength `255`
         * @pattern `[\S]+`
         */
        SpecifiedImage: string;
      };
    };
  };
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.DeployedImage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-deployedimage.html}
 */
export type DeployedImage = {
  ResolutionTime?: string;
  /**
   * The image to use for the container that will be materialized for the inference component
   * @maxLength `255`
   * @pattern `[\S]+`
   */
  ResolvedImage?: string;
  /**
   * The image to use for the container that will be materialized for the inference component
   * @maxLength `255`
   * @pattern `[\S]+`
   */
  SpecifiedImage?: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.EnvironmentMap`.
 * Environment variables to specify on the container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-environmentmap.html}
 */
export type EnvironmentMap = Record<string, string>;
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.InferenceComponentComputeResourceRequirements`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html}
 */
export type InferenceComponentComputeResourceRequirements = {
  /**
   * @min `128`
   */
  MaxMemoryRequiredInMb?: number;
  /**
   * @min `128`
   */
  MinMemoryRequiredInMb?: number;
  /**
   * @min `1`
   */
  NumberOfAcceleratorDevicesRequired?: number;
  /**
   * @min `0.25`
   */
  NumberOfCpuCoresRequired?: number;
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.InferenceComponentContainerSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html}
 */
export type InferenceComponentContainerSpecification = {
  /**
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  ArtifactUrl?: string;
  /**
   * Environment variables to specify on the container
   */
  Environment?: EnvironmentMap;
  /**
   * The image to use for the container that will be materialized for the inference component
   * @maxLength `255`
   * @pattern `[\S]+`
   */
  Image?: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.InferenceComponentRuntimeConfig`.
 * The runtime config for the inference component
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentruntimeconfig.html}
 */
export type InferenceComponentRuntimeConfig = {
  /**
   * The number of copies for the inference component
   * @min `0`
   */
  CopyCount?: number;
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.InferenceComponentSpecification`.
 * The specification for the inference component
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html}
 */
export type InferenceComponentSpecification = {
  ComputeResourceRequirements: InferenceComponentComputeResourceRequirements;
  Container?: InferenceComponentContainerSpecification;
  /**
   * The name of the model to use with the inference component
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  ModelName?: string;
  StartupParameters?: InferenceComponentStartupParameters;
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.InferenceComponentStartupParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentstartupparameters.html}
 */
export type InferenceComponentStartupParameters = {
  /**
   * @min `60`
   * @max `3600`
   */
  ContainerStartupHealthCheckTimeoutInSeconds?: number;
  /**
   * @min `60`
   * @max `3600`
   */
  ModelDataDownloadTimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.InferenceComponentStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentstatus.html}
 */
export type InferenceComponentStatus =
  | "InService"
  | "Creating"
  | "Updating"
  | "Failed"
  | "Deleting";
/**
 * Type definition for `AWS::SageMaker::InferenceComponent.Tag`.
 * A tag in the form of a key-value pair to associate with the resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::InferenceComponent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html}
 */
export class SageMakerInferenceComponent extends $Resource<
  "AWS::SageMaker::InferenceComponent",
  SageMakerInferenceComponentProperties,
  SageMakerInferenceComponentAttributes
> {
  public static readonly Type = "AWS::SageMaker::InferenceComponent";
  constructor(
    logicalId: string,
    properties: SageMakerInferenceComponentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerInferenceComponent.Type, properties, options);
  }
}
