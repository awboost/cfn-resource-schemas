import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::CleanRoomsML::ConfiguredModelAlgorithm Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-configuredmodelalgorithm.html}
 */
export type CleanRoomsMLConfiguredModelAlgorithmProperties = {
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  InferenceContainerConfig?: InferenceContainerConfig;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:kms:[-a-z0-9]+:[0-9]{12}:key/.+$`
   */
  KmsKeyArn?: string;
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  Name: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:iam::[0-9]{12}:role/.+$`
   */
  RoleArn: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.
   */
  Tags?: Tag[];
  TrainingContainerConfig?: ContainerConfig;
};
/**
 * Attribute type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-configuredmodelalgorithm.html#aws-resource-cleanroomsml-configuredmodelalgorithm-return-values}
 */
export type CleanRoomsMLConfiguredModelAlgorithmAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:cleanrooms-ml:[-a-z0-9]+:[0-9]{12}:configured-model-algorithm/[-a-zA-Z0-9_/.]+$`
   */
  ConfiguredModelAlgorithmArn: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithm.ContainerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithm-containerconfig.html}
 */
export type ContainerConfig = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Arguments?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Entrypoint?: string[];
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  ImageUri: string;
  /**
   * @minLength `0`
   * @maxLength `40`
   */
  MetricDefinitions?: MetricDefinition[];
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithm.InferenceContainerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithm-inferencecontainerconfig.html}
 */
export type InferenceContainerConfig = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  ImageUri: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithm.MetricDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithm-metricdefinition.html}
 */
export type MetricDefinition = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.+$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^.+$`
   */
  Regex: string;
};
/**
 * Type definition for `AWS::CleanRoomsML::ConfiguredModelAlgorithm.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanroomsml-configuredmodelalgorithm-tag.html}
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
 * Definition of AWS::CleanRoomsML::ConfiguredModelAlgorithm Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanroomsml-configuredmodelalgorithm.html}
 */
export class CleanRoomsMLConfiguredModelAlgorithm extends $Resource<
  "AWS::CleanRoomsML::ConfiguredModelAlgorithm",
  CleanRoomsMLConfiguredModelAlgorithmProperties,
  CleanRoomsMLConfiguredModelAlgorithmAttributes
> {
  public static readonly Type = "AWS::CleanRoomsML::ConfiguredModelAlgorithm";
  constructor(
    logicalId: string,
    properties: CleanRoomsMLConfiguredModelAlgorithmProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CleanRoomsMLConfiguredModelAlgorithm.Type,
      properties,
      options,
    );
  }
}
