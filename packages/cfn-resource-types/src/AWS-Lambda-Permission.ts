import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lambda::Permission
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 */
export type LambdaPermissionProperties = {
  /**
   * The action that the principal can use on the function.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(lambda:[*]|lambda:[a-zA-Z]+|[*])$`
   */
  Action: string;
  /**
   * For Alexa Smart Home functions, a token that must be supplied by the invoker.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9._\-]+$`
   */
  EventSourceToken?: string;
  /**
   * The name of the Lambda function, version, or alias.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  FunctionName: string;
  /**
   * The type of authentication that your function URL uses. Set to AWS_IAM if you want to restrict access to authenticated users only. Set to NONE if you want to bypass IAM authentication to create a public endpoint.
   */
  FunctionUrlAuthType?: "AWS_IAM" | "NONE";
  /**
   * The AWS service or account that invokes the function. If you specify a service, use SourceArn or SourceAccount to limit who can invoke the function through that service.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.*$`
   */
  Principal: string;
  /**
   * The identifier for your organization in AWS Organizations. Use this to grant permissions to all the AWS accounts under this organization.
   * @minLength `12`
   * @maxLength `34`
   * @pattern `^o-[a-z0-9]{10,32}$`
   */
  PrincipalOrgID?: string;
  /**
   * For Amazon S3, the ID of the account that owns the resource. Use this together with SourceArn to ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d{12}$`
   */
  SourceAccount?: string;
  /**
   * For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
   * @minLength `12`
   * @maxLength `1024`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)$`
   */
  SourceArn?: string;
};
/**
 * Attribute type definition for `AWS::Lambda::Permission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#aws-resource-lambda-permission-return-values}
 */
export type LambdaPermissionAttributes = {
  /**
   * A statement identifier that differentiates the statement from others in the same policy.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.*$`
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::Lambda::Permission
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 */
export class LambdaPermission extends $Resource<
  "AWS::Lambda::Permission",
  LambdaPermissionProperties,
  LambdaPermissionAttributes
> {
  public static readonly Type = "AWS::Lambda::Permission";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: LambdaPermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LambdaPermission.Type,
      properties,
      LambdaPermission.AttributeNames,
      options,
    );
  }
}
