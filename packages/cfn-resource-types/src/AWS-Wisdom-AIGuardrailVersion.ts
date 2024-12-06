import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::AIGuardrailVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html}
 */
export type WisdomAIGuardrailVersionProperties = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AIGuardrailId: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssistantId: string;
  ModifiedTimeSeconds?: number;
};
/**
 * Attribute type definition for `AWS::Wisdom::AIGuardrailVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html#aws-resource-wisdom-aiguardrailversion-return-values}
 */
export type WisdomAIGuardrailVersionAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AIGuardrailArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AIGuardrailVersionId: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AssistantArn: string;
  VersionNumber: number;
};
/**
 * Definition of AWS::Wisdom::AIGuardrailVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html}
 */
export class WisdomAIGuardrailVersion extends $Resource<
  "AWS::Wisdom::AIGuardrailVersion",
  WisdomAIGuardrailVersionProperties,
  WisdomAIGuardrailVersionAttributes
> {
  public static readonly Type = "AWS::Wisdom::AIGuardrailVersion";
  constructor(
    logicalId: string,
    properties: WisdomAIGuardrailVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomAIGuardrailVersion.Type, properties, options);
  }
}
