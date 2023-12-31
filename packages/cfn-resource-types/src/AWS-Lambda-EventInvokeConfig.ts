import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lambda::EventInvokeConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html}
 */
export type LambdaEventInvokeConfigProperties = {
  DestinationConfig?: DestinationConfig;
  FunctionName: string;
  MaximumEventAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
  Qualifier: string;
};
/**
 * Attribute type definition for `AWS::Lambda::EventInvokeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#aws-resource-lambda-eventinvokeconfig-return-values}
 */
export type LambdaEventInvokeConfigAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Lambda::EventInvokeConfig.DestinationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html}
 */
export type DestinationConfig = {
  OnFailure?: OnFailure;
  OnSuccess?: OnSuccess;
};
/**
 * Type definition for `AWS::Lambda::EventInvokeConfig.OnFailure`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onfailure.html}
 */
export type OnFailure = {
  Destination: string;
};
/**
 * Type definition for `AWS::Lambda::EventInvokeConfig.OnSuccess`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onsuccess.html}
 */
export type OnSuccess = {
  Destination: string;
};
/**
 * Resource Type definition for AWS::Lambda::EventInvokeConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html}
 */
export class LambdaEventInvokeConfig extends $Resource<
  "AWS::Lambda::EventInvokeConfig",
  LambdaEventInvokeConfigProperties,
  LambdaEventInvokeConfigAttributes
> {
  public static readonly Type = "AWS::Lambda::EventInvokeConfig";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: LambdaEventInvokeConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LambdaEventInvokeConfig.Type,
      properties,
      LambdaEventInvokeConfig.AttributeNames,
      options,
    );
  }
}
