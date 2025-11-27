import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Lambda::EventInvokeConfig resource configures options for asynchronous invocation on a version or an alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html}
 */
export type LambdaEventInvokeConfigProperties = {
  /**
   * A destination for events after they have been sent to a function for processing.
   */
  DestinationConfig?: DestinationConfig;
  /**
   * The name of the Lambda function.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]+(-[a-z]+)+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST(\.PUBLISHED)?|[a-zA-Z0-9-_]+))?$`
   */
  FunctionName: string;
  /**
   * The maximum age of a request that Lambda sends to a function for processing.
   * @min `60`
   * @max `21600`
   */
  MaximumEventAgeInSeconds?: number;
  /**
   * The maximum number of times to retry when the function returns an error.
   * @min `0`
   * @max `2`
   */
  MaximumRetryAttempts?: number;
  /**
   * The identifier of a version or alias.
   * @pattern `^\$(LATEST(\.PUBLISHED)?)|[a-zA-Z0-9$_-]{1,129}$`
   */
  Qualifier: string;
};
/**
 * Type definition for `AWS::Lambda::EventInvokeConfig.DestinationConfig`.
 * A destination for events after they have been sent to a function for processing.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html}
 */
export type DestinationConfig = {
  /**
   * The destination configuration for failed invocations.
   */
  OnFailure?: OnFailure;
  /**
   * The destination configuration for successful invocations.
   */
  OnSuccess?: OnSuccess;
};
/**
 * Type definition for `AWS::Lambda::EventInvokeConfig.OnFailure`.
 * The destination configuration for failed invocations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onfailure.html}
 */
export type OnFailure = {
  /**
   * The Amazon Resource Name (ARN) of the destination resource.
   * @minLength `0`
   * @maxLength `350`
   * @pattern `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]+(-[a-z]+)+-\d{1})?:(\d{12})?:(.*)`
   */
  Destination: string;
};
/**
 * Type definition for `AWS::Lambda::EventInvokeConfig.OnSuccess`.
 * The destination configuration for successful invocations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onsuccess.html}
 */
export type OnSuccess = {
  /**
   * The Amazon Resource Name (ARN) of the destination resource.
   * @minLength `0`
   * @maxLength `350`
   * @pattern `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]+(-[a-z]+)+-\d{1})?:(\d{12})?:(.*)`
   */
  Destination: string;
};
/**
 * The AWS::Lambda::EventInvokeConfig resource configures options for asynchronous invocation on a version or an alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html}
 */
export class LambdaEventInvokeConfig extends $Resource<
  "AWS::Lambda::EventInvokeConfig",
  LambdaEventInvokeConfigProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Lambda::EventInvokeConfig";
  constructor(
    logicalId: string,
    properties: LambdaEventInvokeConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaEventInvokeConfig.Type, properties, options);
  }
}
