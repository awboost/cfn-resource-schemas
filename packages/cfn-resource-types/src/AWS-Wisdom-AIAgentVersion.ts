import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::AIAgentVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagentversion.html}
 */
export type WisdomAIAgentVersionProperties = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AIAgentId: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssistantId: string;
  ModifiedTimeSeconds?: number;
};
/**
 * Attribute type definition for `AWS::Wisdom::AIAgentVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagentversion.html#aws-resource-wisdom-aiagentversion-return-values}
 */
export type WisdomAIAgentVersionAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AIAgentArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AIAgentVersionId: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AssistantArn: string;
  VersionNumber: number;
};
/**
 * Definition of AWS::Wisdom::AIAgentVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagentversion.html}
 */
export class WisdomAIAgentVersion extends $Resource<
  "AWS::Wisdom::AIAgentVersion",
  WisdomAIAgentVersionProperties,
  WisdomAIAgentVersionAttributes
> {
  public static readonly Type = "AWS::Wisdom::AIAgentVersion";
  constructor(
    logicalId: string,
    properties: WisdomAIAgentVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomAIAgentVersion.Type, properties, options);
  }
}
