import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::MLTransform
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html}
 */
export type GlueMLTransformProperties = {
  Description?: string;
  GlueVersion?: string;
  InputRecordTables: InputRecordTables;
  MaxCapacity?: number;
  MaxRetries?: number;
  Name?: string;
  NumberOfWorkers?: number;
  Role: string;
  Tags?: Record<string, any>;
  Timeout?: number;
  TransformEncryption?: TransformEncryption;
  TransformParameters: TransformParameters;
  WorkerType?: string;
};
/**
 * Attribute type definition for `AWS::Glue::MLTransform`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html#aws-resource-glue-mltransform-return-values}
 */
export type GlueMLTransformAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::MLTransform.FindMatchesParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-findmatchesparameters.html}
 */
export type FindMatchesParameters = {
  AccuracyCostTradeoff?: number;
  EnforceProvidedLabels?: boolean;
  PrecisionRecallTradeoff?: number;
  PrimaryKeyColumnName: string;
};
/**
 * Type definition for `AWS::Glue::MLTransform.GlueTables`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-gluetables.html}
 */
export type GlueTables = {
  CatalogId?: string;
  ConnectionName?: string;
  DatabaseName: string;
  TableName: string;
};
/**
 * Type definition for `AWS::Glue::MLTransform.InputRecordTables`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables.html}
 */
export type InputRecordTables = {
  GlueTables?: GlueTables[];
};
/**
 * Type definition for `AWS::Glue::MLTransform.MLUserDataEncryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-mluserdataencryption.html}
 */
export type MLUserDataEncryption = {
  KmsKeyId?: string;
  MLUserDataEncryptionMode: string;
};
/**
 * Type definition for `AWS::Glue::MLTransform.TransformEncryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption.html}
 */
export type TransformEncryption = {
  MLUserDataEncryption?: MLUserDataEncryption;
  TaskRunSecurityConfigurationName?: string;
};
/**
 * Type definition for `AWS::Glue::MLTransform.TransformParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters.html}
 */
export type TransformParameters = {
  FindMatchesParameters?: FindMatchesParameters;
  TransformType: string;
};
/**
 * Resource Type definition for AWS::Glue::MLTransform
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html}
 */
export class GlueMLTransform extends $Resource<
  "AWS::Glue::MLTransform",
  GlueMLTransformProperties,
  GlueMLTransformAttributes
> {
  public static readonly Type = "AWS::Glue::MLTransform";
  constructor(
    logicalId: string,
    properties: GlueMLTransformProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueMLTransform.Type, properties, options);
  }
}
