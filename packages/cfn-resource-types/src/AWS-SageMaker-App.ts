import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::App
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html}
 */
export type SageMakerAppProperties = {
  /**
   * The name of the app.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  AppName: string;
  /**
   * The type of app.
   */
  AppType:
    | "JupyterServer"
    | "KernelGateway"
    | "RStudioServerPro"
    | "RSessionGateway"
    | "Canvas";
  /**
   * The domain ID.
   * @minLength `1`
   * @maxLength `63`
   */
  DomainId: string;
  /**
   * The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
   */
  ResourceSpec?: ResourceSpec;
  /**
   * A list of tags to apply to the app.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The user profile name.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  UserProfileName: string;
};
/**
 * Attribute type definition for `AWS::SageMaker::App`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#aws-resource-sagemaker-app-return-values}
 */
export type SageMakerAppAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the app.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:app/.*`
   */
  AppArn: string;
};
/**
 * Type definition for `AWS::SageMaker::App.ResourceSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html}
 */
export type ResourceSpec = {
  /**
   * The instance type that the image version runs on.
   */
  InstanceType?:
    | "system"
    | "ml.t3.micro"
    | "ml.t3.small"
    | "ml.t3.medium"
    | "ml.t3.large"
    | "ml.t3.xlarge"
    | "ml.t3.2xlarge"
    | "ml.m5.large"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.8xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.16xlarge"
    | "ml.m5.24xlarge"
    | "ml.c5.large"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.12xlarge"
    | "ml.c5.18xlarge"
    | "ml.c5.24xlarge"
    | "ml.p3.2xlarge"
    | "ml.p3.8xlarge"
    | "ml.p3.16xlarge"
    | "ml.g4dn.xlarge"
    | "ml.g4dn.2xlarge"
    | "ml.g4dn.4xlarge"
    | "ml.g4dn.8xlarge"
    | "ml.g4dn.12xlarge"
    | "ml.g4dn.16xlarge"
    | "ml.r5.large"
    | "ml.r5.xlarge"
    | "ml.r5.2xlarge"
    | "ml.r5.4xlarge"
    | "ml.r5.8xlarge"
    | "ml.r5.12xlarge"
    | "ml.r5.16xlarge"
    | "ml.r5.24xlarge"
    | "ml.p3dn.24xlarge"
    | "ml.m5d.large"
    | "ml.m5d.xlarge"
    | "ml.m5d.2xlarge"
    | "ml.m5d.4xlarge"
    | "ml.m5d.8xlarge"
    | "ml.m5d.12xlarge"
    | "ml.m5d.16xlarge"
    | "ml.m5d.24xlarge"
    | "ml.g5.xlarge"
    | "ml.g5.2xlarge"
    | "ml.g5.4xlarge"
    | "ml.g5.8xlarge"
    | "ml.g5.12xlarge"
    | "ml.g5.16xlarge"
    | "ml.g5.24xlarge"
    | "ml.g5.48xlarge"
    | "ml.p4d.24xlarge"
    | "ml.p4de.24xlarge"
    | "ml.geospatial.interactive"
    | "ml.trn1.2xlarge"
    | "ml.trn1.32xlarge"
    | "ml.trn1n.32xlarge";
  /**
   * The ARN of the SageMaker image that the image version belongs to.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   */
  SageMakerImageArn?: string;
  /**
   * The ARN of the image version created on the instance.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])/‍*[0-9]+$`
   */
  SageMakerImageVersionArn?: string;
};
/**
 * Type definition for `AWS::SageMaker::App.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::App
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html}
 */
export class SageMakerApp extends $Resource<
  "AWS::SageMaker::App",
  SageMakerAppProperties,
  SageMakerAppAttributes
> {
  public static readonly Type = "AWS::SageMaker::App";
  constructor(
    logicalId: string,
    properties: SageMakerAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerApp.Type, properties, options);
  }
}
