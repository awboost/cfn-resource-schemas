import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::AIPromptVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aipromptversion.html}
 */
export type WisdomAIPromptVersionProperties = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AIPromptId: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssistantId: string;
  ModifiedTimeSeconds?: number;
};
/**
 * Attribute type definition for `AWS::Wisdom::AIPromptVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aipromptversion.html#aws-resource-wisdom-aipromptversion-return-values}
 */
export type WisdomAIPromptVersionAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AIPromptArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AIPromptVersionId: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AssistantArn: string;
  VersionNumber: number;
};
/**
 * Definition of AWS::Wisdom::AIPromptVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aipromptversion.html}
 */
export class WisdomAIPromptVersion extends $Resource<
  "AWS::Wisdom::AIPromptVersion",
  WisdomAIPromptVersionProperties,
  WisdomAIPromptVersionAttributes
> {
  public static readonly Type = "AWS::Wisdom::AIPromptVersion";
  constructor(
    logicalId: string,
    properties: WisdomAIPromptVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomAIPromptVersion.Type, properties, options);
  }
}
