import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::SageMaker::MlflowApp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowapp.html}
 */
export type SageMakerMlflowAppProperties = {
  /**
   * The S3 URI for a general purpose bucket to use as the MLflow App artifact store.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `(https|s3)://([^/]+)/?(.*)`
   */
  ArtifactStoreUri: string;
  /**
   * Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.
   */
  ModelRegistrationMode?:
    | "AutoModelRegistrationEnabled"
    | "AutoModelRegistrationDisabled";
  /**
   * The name of the MLflow App.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,255}$`
   */
  Name: string;
  /**
   * The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   */
  RoleArn: string;
  /**
   * Tags to associate with the MLflow App.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: Tue:03:30.
   * @minLength `0`
   * @maxLength `9`
   * @pattern `(Mon|Tue|Wed|Thu|Fri|Sat|Sun):([01]\d|2[0-3]):([0-5]\d)`
   */
  WeeklyMaintenanceWindowStart?: string;
};
/**
 * Attribute type definition for `AWS::SageMaker::MlflowApp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowapp.html#aws-resource-sagemaker-mlflowapp-return-values}
 */
export type SageMakerMlflowAppAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the MLflow App.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:mlflow-app/.*`
   */
  Arn: string;
  /**
   * The date and time that the MLflow App was created.
   */
  CreationTime: string;
  /**
   * The date and time that the MLflow App was last modified.
   */
  LastModifiedTime: string;
  /**
   * The server-generated identifier of the MLflow App.
   */
  MlflowAppId: string;
  /**
   * The MLflow version used by the MLflow App.
   * @minLength `0`
   * @maxLength `16`
   * @pattern `[0-9]*.[0-9]*.[0-9]*`
   */
  MlflowVersion: string;
  /**
   * The status of the MLflow App.
   */
  Status:
    | "Creating"
    | "Created"
    | "CreateFailed"
    | "Updating"
    | "Updated"
    | "UpdateFailed"
    | "Deleting"
    | "DeleteFailed"
    | "Deleted";
};
/**
 * Type definition for `AWS::SageMaker::MlflowApp.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-mlflowapp-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::SageMaker::MlflowApp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowapp.html}
 */
export class SageMakerMlflowApp extends $Resource<
  "AWS::SageMaker::MlflowApp",
  SageMakerMlflowAppProperties,
  SageMakerMlflowAppAttributes
> {
  public static readonly Type = "AWS::SageMaker::MlflowApp";
  constructor(
    logicalId: string,
    properties: SageMakerMlflowAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerMlflowApp.Type, properties, options);
  }
}
