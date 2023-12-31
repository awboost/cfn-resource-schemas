import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::Personalize::DatasetGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html}
 */
export type PersonalizeDatasetGroupProperties = {
  /**
   * The domain of a Domain dataset group.
   */
  Domain?: "ECOMMERCE" | "VIDEO_ON_DEMAND";
  /**
   * The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets.
   * @maxLength `2048`
   * @pattern `arn:aws.*:kms:.*:[0-9]{12}:key/.*`
   */
  KmsKeyArn?: string;
  /**
   * The name for the new dataset group.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  Name: string;
  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   */
  RoleArn?: string;
};
/**
 * Attribute type definition for `AWS::Personalize::DatasetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html#aws-resource-personalize-datasetgroup-return-values}
 */
export type PersonalizeDatasetGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):personalize:.*:.*:.+`
   */
  DatasetGroupArn: string;
};
/**
 * Resource Schema for AWS::Personalize::DatasetGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html}
 */
export class PersonalizeDatasetGroup extends $Resource<
  "AWS::Personalize::DatasetGroup",
  PersonalizeDatasetGroupProperties,
  PersonalizeDatasetGroupAttributes
> {
  public static readonly Type = "AWS::Personalize::DatasetGroup";
  constructor(
    logicalId: string,
    properties: PersonalizeDatasetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PersonalizeDatasetGroup.Type, properties, options);
  }
}
