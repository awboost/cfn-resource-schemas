import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EntityResolution::PolicyStatement`.
 * Policy Statement defined in AWS Entity Resolution Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html}
 */
export type EntityResolutionPolicyStatementProperties = {
  Action?: string[];
  /**
   * Arn of the resource to which the policy statement is being attached.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:((schemamapping|matchingworkflow|idmappingworkflow|idnamespace)/[a-zA-Z_0-9-]{1,255})$`
   */
  Arn: string;
  /**
   * @minLength `1`
   * @maxLength `40960`
   */
  Condition?: string;
  Effect?: StatementEffect;
  Principal?: string[];
  /**
   * The Statement Id of the policy statement that is being attached.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9A-Za-z]+$`
   */
  StatementId: string;
};
/**
 * Type definition for `AWS::EntityResolution::PolicyStatement.StatementEffect`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-policystatement-statementeffect.html}
 */
export type StatementEffect = "Allow" | "Deny";
/**
 * Resource type definition for `AWS::EntityResolution::PolicyStatement`.
 * Policy Statement defined in AWS Entity Resolution Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html}
 */
export class EntityResolutionPolicyStatement extends $Resource<
  "AWS::EntityResolution::PolicyStatement",
  EntityResolutionPolicyStatementProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EntityResolution::PolicyStatement";
  constructor(
    logicalId: string,
    properties: EntityResolutionPolicyStatementProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EntityResolutionPolicyStatement.Type, properties, options);
  }
}
