import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EntityResolution::MatchingWorkflow`.
 * MatchingWorkflow defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html}
 */
export type EntityResolutionMatchingWorkflowProperties = {
  /**
   * The description of the MatchingWorkflow
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  InputSourceConfig: InputSource[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  OutputSourceConfig: OutputSource[];
  ResolutionTechniques: ResolutionTechniques;
  /**
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The name of the MatchingWorkflow
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9-]*$`
   */
  WorkflowName: string;
};
/**
 * Attribute type definition for `AWS::EntityResolution::MatchingWorkflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#aws-resource-entityresolution-matchingworkflow-return-values}
 */
export type EntityResolutionMatchingWorkflowAttributes = {
  /**
   * The time of this MatchingWorkflow got created
   */
  CreatedAt: string;
  /**
   * The time of this MatchingWorkflow got last updated at
   */
  UpdatedAt: string;
  /**
   * The default MatchingWorkflow arn
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(matchingworkflow/.*)$`
   */
  WorkflowArn: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.InputSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-inputsource.html}
 */
export type InputSource = {
  ApplyNormalization?: boolean;
  /**
   * An Glue table ARN for the input source table
   * @pattern `arn:(aws|aws-us-gov|aws-cn):.*:.*:[0-9]+:.*$`
   */
  InputSourceARN: string;
  /**
   * The SchemaMapping arn associated with the Schema
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(schemamapping/.*)$`
   */
  SchemaArn: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.IntermediateSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-intermediatesourceconfiguration.html}
 */
export type IntermediateSourceConfiguration = {
  /**
   * The s3 path that would be used to stage the intermediate data being generated during workflow execution.
   */
  IntermediateS3Path: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.OutputAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputattribute.html}
 */
export type OutputAttribute = {
  Hashed?: boolean;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9- \t]*$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.OutputSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-outputsource.html}
 */
export type OutputSource = {
  ApplyNormalization?: boolean;
  /**
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):kms:.*:[0-9]+:.*$`
   */
  KMSArn?: string;
  /**
   * @minLength `0`
   * @maxLength `750`
   */
  Output: OutputAttribute[];
  /**
   * The S3 path to which Entity Resolution will write the output table
   * @pattern `^s3://([^/]+)/?(.*?([^/]+)/?)$`
   */
  OutputS3Path: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.ProviderProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-providerproperties.html}
 */
export type ProviderProperties = {
  IntermediateSourceConfiguration?: IntermediateSourceConfiguration;
  /**
   * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
   */
  ProviderConfiguration?: Record<string, string>;
  /**
   * Arn of the Provider service being used.
   */
  ProviderServiceArn: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.ResolutionTechniques`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html}
 */
export type ResolutionTechniques = {
  ProviderProperties?: ProviderProperties;
  ResolutionType?: "RULE_MATCHING" | "ML_MATCHING" | "PROVIDER";
  RuleBasedProperties?: RuleBasedProperties;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rule.html}
 */
export type Rule = {
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  MatchingKeys: string[];
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9- \t]*$`
   */
  RuleName: string;
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.RuleBasedProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-rulebasedproperties.html}
 */
export type RuleBasedProperties = {
  AttributeMatchingModel: "ONE_TO_ONE" | "MANY_TO_MANY";
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  Rules: Rule[];
};
/**
 * Type definition for `AWS::EntityResolution::MatchingWorkflow.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-matchingworkflow-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EntityResolution::MatchingWorkflow`.
 * MatchingWorkflow defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html}
 */
export class EntityResolutionMatchingWorkflow extends $Resource<
  "AWS::EntityResolution::MatchingWorkflow",
  EntityResolutionMatchingWorkflowProperties,
  EntityResolutionMatchingWorkflowAttributes
> {
  public static readonly Type = "AWS::EntityResolution::MatchingWorkflow";
  constructor(
    logicalId: string,
    properties: EntityResolutionMatchingWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EntityResolutionMatchingWorkflow.Type,
      properties,
      options,
    );
  }
}
