import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Creates a CF function.
 To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.
 By default, when you create a function, it’s in the ``DEVELOPMENT`` stage. In this stage, you can [test the function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html) in the CF console (or with ``TestFunction`` in the CF API).
 When you’re ready to use your function with a CF distribution, publish the function to the ``LIVE`` stage. You can do this in the CF console, with ``PublishFunction`` in the CF API, or by updating the ``AWS::CloudFront::Function`` resource with the ``AutoPublish`` property set to ``true``. When the function is published to the ``LIVE`` stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.
 To automatically publish the function to the ``LIVE`` stage when it’s created, set the ``AutoPublish`` property to ``true``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export type CloudFrontFunctionProperties = {
  /**
   * A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it’s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.
   */
  AutoPublish?: boolean;
  /**
   * The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the *Amazon CloudFront Developer Guide*.
   */
  FunctionCode: string;
  /**
   * Contains configuration information about a CloudFront function.
   */
  FunctionConfig: FunctionConfig;
  /**
   * A name to identify the function.
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::CloudFront::Function`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#aws-resource-cloudfront-function-return-values}
 */
export type CloudFrontFunctionAttributes = {
  FunctionARN: string;
  /**
   * Contains metadata about a CloudFront function.
   */
  FunctionMetadata: {
    /**
     * The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.
     */
    FunctionARN: string;
  };
  Stage: string;
};
/**
 * Type definition for `AWS::CloudFront::Function.FunctionConfig`.
 * Contains configuration information about a CloudFront function.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionconfig.html}
 */
export type FunctionConfig = {
  /**
   * A comment to describe the function.
   */
  Comment: string;
  /**
   * The configuration for the key value store associations.
   */
  KeyValueStoreAssociations?: KeyValueStoreAssociation[];
  /**
   * The function's runtime environment version.
   */
  Runtime: string;
};
/**
 * Type definition for `AWS::CloudFront::Function.KeyValueStoreAssociation`.
 * The key value store association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-keyvaluestoreassociation.html}
 */
export type KeyValueStoreAssociation = {
  /**
   * The Amazon Resource Name (ARN) of the key value store association.
   */
  KeyValueStoreARN: string;
};
/**
 * Creates a CF function.
 To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.
 By default, when you create a function, it’s in the ``DEVELOPMENT`` stage. In this stage, you can [test the function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html) in the CF console (or with ``TestFunction`` in the CF API).
 When you’re ready to use your function with a CF distribution, publish the function to the ``LIVE`` stage. You can do this in the CF console, with ``PublishFunction`` in the CF API, or by updating the ``AWS::CloudFront::Function`` resource with the ``AutoPublish`` property set to ``true``. When the function is published to the ``LIVE`` stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.
 To automatically publish the function to the ``LIVE`` stage when it’s created, set the ``AutoPublish`` property to ``true``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export class CloudFrontFunction extends $Resource<
  "AWS::CloudFront::Function",
  CloudFrontFunctionProperties,
  CloudFrontFunctionAttributes
> {
  public static readonly Type = "AWS::CloudFront::Function";
  constructor(
    logicalId: string,
    properties: CloudFrontFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontFunction.Type, properties, options);
  }
}
