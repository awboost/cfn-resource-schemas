import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::Lambda::Permission`` resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.
 To grant permission to another account, specify the account ID as the ``Principal``. To grant permission to an organization defined in AOlong, specify the organization ID as the ``PrincipalOrgID``. For AWS services, the principal is a domain-style identifier defined by the service, like ``s3.amazonaws.com`` or ``sns.amazonaws.com``. For AWS services, you can also specify the ARN of the associated resource as the ``SourceArn``. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.
 If your function has a fu
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 */
export type LambdaPermissionProperties = {
  /**
   * The action that the principal can use on the function. For example, ``lambda:InvokeFunction`` or ``lambda:GetFunction``.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(lambda:[*]|lambda:[a-zA-Z]+|[*])$`
   */
  Action: string;
  /**
   * For Alexa Smart Home functions, a token that the invoker must supply.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9._\-]+$`
   */
  EventSourceToken?: string;
  /**
     * The name of the Lambda function, version, or alias.
      **Name formats**
     +   *Function name* – ``my-function`` (name-only), ``my-function:v1`` (with alias).
      +   *Function ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:my-function``.
      +   *Partial ARN* – ``123456789012:function:my-function``.
      
     You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     * @minLength `1`
     * @maxLength `140`
     * @pattern `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
     */
  FunctionName: string;
  /**
   * The type of authentication that your function URL uses. Set to ``AWS_IAM`` if you want to restrict access to authenticated users only. Set to ``NONE`` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   */
  FunctionUrlAuthType?: "AWS_IAM" | "NONE";
  /**
   * The AWS-service or AWS-account that invokes the function. If you specify a service, use ``SourceArn`` or ``SourceAccount`` to limit who can invoke the function through that service.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.*$`
   */
  Principal: string;
  /**
   * The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization.
   * @minLength `12`
   * @maxLength `34`
   * @pattern `^o-[a-z0-9]{10,32}$`
   */
  PrincipalOrgID?: string;
  /**
   * For AWS-service, the ID of the AWS-account that owns the resource. Use this together with ``SourceArn`` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d{12}$`
   */
  SourceAccount?: string;
  /**
     * For AWS-services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
     Note that Lambda configures the comparison using the ``StringLike`` operator.
     * @minLength `12`
     * @maxLength `1024`
     * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.*)$`
     */
  SourceArn?: string;
};
/**
 * Attribute type definition for `AWS::Lambda::Permission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#aws-resource-lambda-permission-return-values}
 */
export type LambdaPermissionAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.*$`
   */
  Id: string;
};
/**
 * The ``AWS::Lambda::Permission`` resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.
 To grant permission to another account, specify the account ID as the ``Principal``. To grant permission to an organization defined in AOlong, specify the organization ID as the ``PrincipalOrgID``. For AWS services, the principal is a domain-style identifier defined by the service, like ``s3.amazonaws.com`` or ``sns.amazonaws.com``. For AWS services, you can also specify the ARN of the associated resource as the ``SourceArn``. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.
 If your function has a fu
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 */
export class LambdaPermission extends $Resource<
  "AWS::Lambda::Permission",
  LambdaPermissionProperties,
  LambdaPermissionAttributes
> {
  public static readonly Type = "AWS::Lambda::Permission";
  constructor(
    logicalId: string,
    properties: LambdaPermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaPermission.Type, properties, options);
  }
}
