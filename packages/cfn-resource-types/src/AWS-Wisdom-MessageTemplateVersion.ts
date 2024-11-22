import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Wisdom::MessageTemplateVersion`.
 * A version for the specified customer-managed message template within the specified knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html}
 */
export type WisdomMessageTemplateVersionProperties = {
  /**
   * The unqualified Amazon Resource Name (ARN) of the message template.
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  MessageTemplateArn: string;
  /**
   * The content SHA256 of the message template.
   * @minLength `1`
   * @maxLength `64`
   */
  MessageTemplateContentSha256?: string;
};
/**
 * Attribute type definition for `AWS::Wisdom::MessageTemplateVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html#aws-resource-wisdom-messagetemplateversion-return-values}
 */
export type WisdomMessageTemplateVersionAttributes = {
  /**
   * The unqualified Amazon Resource Name (ARN) of the message template version.
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}):[0-9]+?$`
   */
  MessageTemplateVersionArn: string;
  /**
   * Current version number of the message template.
   */
  MessageTemplateVersionNumber: number;
};
/**
 * Resource type definition for `AWS::Wisdom::MessageTemplateVersion`.
 * A version for the specified customer-managed message template within the specified knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html}
 */
export class WisdomMessageTemplateVersion extends $Resource<
  "AWS::Wisdom::MessageTemplateVersion",
  WisdomMessageTemplateVersionProperties,
  WisdomMessageTemplateVersionAttributes
> {
  public static readonly Type = "AWS::Wisdom::MessageTemplateVersion";
  constructor(
    logicalId: string,
    properties: WisdomMessageTemplateVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomMessageTemplateVersion.Type, properties, options);
  }
}
