import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::ResourcePolicy`.
 * The resource schema for AWSLogs ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html}
 */
export type LogsResourcePolicyProperties = {
  /**
   * The policy document
   * @minLength `1`
   * @maxLength `5120`
   * @pattern `[\u0009\u000A\u000D\u0020-\u00FF]+`
   */
  PolicyDocument: string;
  /**
   * A name for resource policy
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^([^:*\/]+\/?)*[^:*\/]+$`
   */
  PolicyName: string;
};
/**
 * Resource type definition for `AWS::Logs::ResourcePolicy`.
 * The resource schema for AWSLogs ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html}
 */
export class LogsResourcePolicy extends $Resource<
  "AWS::Logs::ResourcePolicy",
  LogsResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: LogsResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsResourcePolicy.Type, properties, options);
  }
}
