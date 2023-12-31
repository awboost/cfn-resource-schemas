import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lambda::Url
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html}
 */
export type LambdaUrlProperties = {
  /**
   * Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.
   */
  AuthType: "AWS_IAM" | "NONE";
  Cors?: Cors;
  /**
   * The invocation mode for the function’s URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.
   */
  InvokeMode?: "BUFFERED" | "RESPONSE_STREAM";
  /**
   * The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `((?!^[0-9]+$)([a-zA-Z0-9-_]+))`
   */
  Qualifier?: string;
  /**
   * The Amazon Resource Name (ARN) of the function associated with the Function URL.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:((?!\d+)[0-9a-zA-Z-_]+))?$`
   */
  TargetFunctionArn: string;
};
/**
 * Attribute type definition for `AWS::Lambda::Url`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html#aws-resource-lambda-url-return-values}
 */
export type LambdaUrlAttributes = {
  /**
   * The full Amazon Resource Name (ARN) of the function associated with the Function URL.
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:((?!\d+)[0-9a-zA-Z-_]+))?$`
   */
  FunctionArn: string;
  /**
   * The generated url for this resource.
   */
  FunctionUrl: string;
};
/**
 * Type definition for `AWS::Lambda::Url.Cors`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html}
 */
export type Cors = {
  /**
   * Specifies whether credentials are included in the CORS request.
   */
  AllowCredentials?: boolean;
  /**
   * Represents a collection of allowed headers.
   * @minLength `1`
   * @maxLength `100`
   */
  AllowHeaders?: string[];
  /**
   * Represents a collection of allowed HTTP methods.
   * @minLength `1`
   * @maxLength `6`
   */
  AllowMethods?: ("GET" | "PUT" | "HEAD" | "POST" | "PATCH" | "DELETE" | "*")[];
  /**
   * Represents a collection of allowed origins.
   * @minLength `1`
   * @maxLength `100`
   */
  AllowOrigins?: string[];
  /**
   * Represents a collection of exposed headers.
   * @minLength `1`
   * @maxLength `100`
   */
  ExposeHeaders?: string[];
  /**
   * @max `86400`
   */
  MaxAge?: number;
};
/**
 * Resource Type definition for AWS::Lambda::Url
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html}
 */
export class LambdaUrl extends $Resource<
  "AWS::Lambda::Url",
  LambdaUrlProperties,
  LambdaUrlAttributes
> {
  public static readonly Type = "AWS::Lambda::Url";
  public static readonly AttributeNames = [
    "FunctionArn" as const,
    "FunctionUrl" as const,
  ];
  constructor(
    logicalId: string,
    properties: LambdaUrlProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LambdaUrl.Type,
      properties,
      LambdaUrl.AttributeNames,
      options,
    );
  }
}
