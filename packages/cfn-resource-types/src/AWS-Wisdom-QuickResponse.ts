import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::QuickResponse Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-quickresponse.html}
 */
export type WisdomQuickResponseProperties = {
  /**
   * The Amazon Connect contact channels this quick response applies to.
   */
  Channels?: ChannelType[];
  /**
   * The container of quick response content.
   */
  Content: QuickResponseContentProvider;
  /**
     * The media type of the quick response content.
    - Use application/x.quickresponse;format=plain for quick response written in plain text.
    - Use application/x.quickresponse;format=markdown for quick response written in richtext.
     * @pattern `^(application/x\.quickresponse;format=(plain|markdown))$`
     */
  ContentType?: string;
  /**
   * The description of the quick response.
   * @minLength `1`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The configuration information of the user groups that the quick response is accessible to.
   */
  GroupingConfiguration?: GroupingConfiguration;
  /**
   * Whether the quick response is active.
   */
  IsActive?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  KnowledgeBaseArn: string;
  /**
   * The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW
   * @minLength `2`
   * @maxLength `5`
   */
  Language?: string;
  /**
   * The name of the quick response.
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   * @minLength `1`
   * @maxLength `100`
   */
  ShortcutKey?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Wisdom::QuickResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-quickresponse.html#aws-resource-wisdom-quickresponse-return-values}
 */
export type WisdomQuickResponseAttributes = {
  /**
   * The content of the quick response stored in different media types.
   */
  Contents: {
    /**
     * The container of quick response content.
     */
    Markdown: {
      /**
       * The content of the quick response.
       * @minLength `1`
       * @maxLength `1024`
       */
      Content: string;
    };
    /**
     * The container of quick response content.
     */
    PlainText: {
      /**
       * The content of the quick response.
       * @minLength `1`
       * @maxLength `1024`
       */
      Content: string;
    };
  };
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  QuickResponseArn: string;
  /**
   * The identifier of the quick response.
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  QuickResponseId: string;
  /**
   * The status of the quick response data.
   */
  Status: Status;
};
/**
 * Type definition for `AWS::Wisdom::QuickResponse.ChannelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-quickresponse-channeltype.html}
 */
export type ChannelType = "Chat" | "Email";
/**
 * Type definition for `AWS::Wisdom::QuickResponse.GroupingConfiguration`.
 * The configuration information of the user groups that the quick response is accessible to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-quickresponse-groupingconfiguration.html}
 */
export type GroupingConfiguration = {
  /**
   * The criteria used for grouping Amazon Q in Connect users.
   * @minLength `1`
   * @maxLength `100`
   */
  Criteria: string;
  /**
   * The list of values that define different groups of Amazon Q in Connect users.
   */
  Values: string[];
};
/**
 * Type definition for `AWS::Wisdom::QuickResponse.QuickResponseContentProvider`.
 * The container of quick response content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-quickresponse-quickresponsecontentprovider.html}
 */
export type QuickResponseContentProvider = {
  /**
   * The content of the quick response.
   * @minLength `1`
   * @maxLength `1024`
   */
  Content?: string;
};
/**
 * Type definition for `AWS::Wisdom::QuickResponse.QuickResponseContents`.
 * The content of the quick response stored in different media types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-quickresponse-quickresponsecontents.html}
 */
export type QuickResponseContents = {
  /**
   * The container of quick response content.
   */
  Markdown?: QuickResponseContentProvider;
  /**
   * The container of quick response content.
   */
  PlainText?: QuickResponseContentProvider;
};
/**
 * Type definition for `AWS::Wisdom::QuickResponse.Status`.
 * The status of the quick response data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-quickresponse-status.html}
 */
export type Status =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "DELETED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED";
/**
 * Type definition for `AWS::Wisdom::QuickResponse.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-quickresponse-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Wisdom::QuickResponse Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-quickresponse.html}
 */
export class WisdomQuickResponse extends $Resource<
  "AWS::Wisdom::QuickResponse",
  WisdomQuickResponseProperties,
  WisdomQuickResponseAttributes
> {
  public static readonly Type = "AWS::Wisdom::QuickResponse";
  constructor(
    logicalId: string,
    properties: WisdomQuickResponseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomQuickResponse.Type, properties, options);
  }
}
