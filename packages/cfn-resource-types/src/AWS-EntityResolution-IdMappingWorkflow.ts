import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EntityResolution::IdMappingWorkflow`.
 * IdMappingWorkflow defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html}
 */
export type EntityResolutionIdMappingWorkflowProperties = {
  /**
   * The description of the IdMappingWorkflow
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  IdMappingIncrementalRunConfig?: IdMappingIncrementalRunConfig;
  IdMappingTechniques: IdMappingTechniques;
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  InputSourceConfig: IdMappingWorkflowInputSource[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  OutputSourceConfig?: IdMappingWorkflowOutputSource[];
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
   * The name of the IdMappingWorkflow
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9-]*$`
   */
  WorkflowName: string;
};
/**
 * Attribute type definition for `AWS::EntityResolution::IdMappingWorkflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#aws-resource-entityresolution-idmappingworkflow-return-values}
 */
export type EntityResolutionIdMappingWorkflowAttributes = {
  /**
   * The time of this IdMappingWorkflow got created
   */
  CreatedAt: string;
  /**
   * The time of this IdMappingWorkflow got last updated at
   */
  UpdatedAt: string;
  /**
   * The default IdMappingWorkflow arn
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(idmappingworkflow/.*)$`
   */
  WorkflowArn: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.IdMappingIncrementalRunConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingincrementalrunconfig.html}
 */
export type IdMappingIncrementalRunConfig = {
  IncrementalRunType: "ON_DEMAND";
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.IdMappingRuleBasedProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingrulebasedproperties.html}
 */
export type IdMappingRuleBasedProperties = {
  AttributeMatchingModel: "ONE_TO_ONE" | "MANY_TO_MANY";
  RecordMatchingModel: "ONE_SOURCE_TO_ONE_TARGET" | "MANY_SOURCE_TO_ONE_TARGET";
  RuleDefinitionType?: "SOURCE" | "TARGET";
  /**
   * @minLength `1`
   * @maxLength `25`
   */
  Rules?: Rule[];
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.IdMappingTechniques`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingtechniques.html}
 */
export type IdMappingTechniques = {
  IdMappingType?: "PROVIDER" | "RULE_BASED";
  NormalizationVersion?: string;
  ProviderProperties?: ProviderProperties;
  RuleBasedProperties?: IdMappingRuleBasedProperties;
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.IdMappingWorkflowInputSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html}
 */
export type IdMappingWorkflowInputSource = {
  /**
   * An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(idnamespace/[a-zA-Z_0-9-]{1,255})$|^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(matchingworkflow/[a-zA-Z_0-9-]{1,255})$|^arn:(aws|aws-us-gov|aws-cn):glue:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(table/[a-zA-Z_0-9-]{1,255}/[a-zA-Z_0-9-]{1,255})$`
   */
  InputSourceARN: string;
  /**
   * The SchemaMapping arn associated with the Schema
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(schemamapping/.*)$`
   */
  SchemaArn?: string;
  Type?: "SOURCE" | "TARGET";
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.IdMappingWorkflowOutputSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-idmappingworkflowoutputsource.html}
 */
export type IdMappingWorkflowOutputSource = {
  /**
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):kms:.*:[0-9]+:.*$`
   */
  KMSArn?: string;
  /**
   * The S3 path to which Entity Resolution will write the output table
   * @pattern `^s3://([^/]+)/?(.*?([^/]+)/?)$`
   */
  OutputS3Path: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.IntermediateSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-intermediatesourceconfiguration.html}
 */
export type IntermediateSourceConfiguration = {
  /**
   * The s3 path that would be used to stage the intermediate data being generated during workflow execution.
   */
  IntermediateS3Path: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.ProviderProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-providerproperties.html}
 */
export type ProviderProperties = {
  IntermediateSourceConfiguration?: IntermediateSourceConfiguration;
  /**
   * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
   */
  ProviderConfiguration?: Record<string, string>;
  /**
   * Arn of the Provider Service being used.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):(entityresolution):([a-z]{2}-[a-z]{1,10}-[0-9])::providerservice/([a-zA-Z0-9_-]{1,255})/([a-zA-Z0-9_-]{1,255})$`
   */
  ProviderServiceArn: string;
};
/**
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-rule.html}
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
 * Type definition for `AWS::EntityResolution::IdMappingWorkflow.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-idmappingworkflow-tag.html}
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
 * Resource type definition for `AWS::EntityResolution::IdMappingWorkflow`.
 * IdMappingWorkflow defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html}
 */
export class EntityResolutionIdMappingWorkflow extends $Resource<
  "AWS::EntityResolution::IdMappingWorkflow",
  EntityResolutionIdMappingWorkflowProperties,
  EntityResolutionIdMappingWorkflowAttributes
> {
  public static readonly Type = "AWS::EntityResolution::IdMappingWorkflow";
  constructor(
    logicalId: string,
    properties: EntityResolutionIdMappingWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EntityResolutionIdMappingWorkflow.Type,
      properties,
      options,
    );
  }
}
