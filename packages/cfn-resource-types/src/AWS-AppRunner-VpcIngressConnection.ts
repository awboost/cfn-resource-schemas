import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::AppRunner::VpcIngressConnection resource is an App Runner resource that specifies an App Runner VpcIngressConnection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html}
 */
export type AppRunnerVpcIngressConnectionProperties = {
  /**
   * The configuration of customer’s VPC and related VPC endpoint
   */
  IngressVpcConfiguration: IngressVpcConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the service.
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[0-9]{12}:(\w|/|-){1,1011}`
   */
  ServiceArn: string;
  Tags?: Tag[];
  /**
   * The customer-provided Vpc Ingress Connection name.
   * @minLength `4`
   * @maxLength `40`
   * @pattern `[A-Za-z0-9][A-Za-z0-9\-_]{3,39}`
   */
  VpcIngressConnectionName?: string;
};
/**
 * Attribute type definition for `AWS::AppRunner::VpcIngressConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#aws-resource-apprunner-vpcingressconnection-return-values}
 */
export type AppRunnerVpcIngressConnectionAttributes = {
  /**
   * The Domain name associated with the VPC Ingress Connection.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[A-Za-z0-9*.-]{1,255}`
   */
  DomainName: string;
  /**
   * The current status of the VpcIngressConnection.
   */
  Status:
    | "AVAILABLE"
    | "PENDING_CREATION"
    | "PENDING_UPDATE"
    | "PENDING_DELETION"
    | "FAILED_CREATION"
    | "FAILED_UPDATE"
    | "FAILED_DELETION"
    | "DELETED";
  /**
   * The Amazon Resource Name (ARN) of the VpcIngressConnection.
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[0-9]{12}:(\w|/|-){1,1011}`
   */
  VpcIngressConnectionArn: string;
};
/**
 * Type definition for `AWS::AppRunner::VpcIngressConnection.IngressVpcConfiguration`.
 * The configuration of customer’s VPC and related VPC endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html}
 */
export type IngressVpcConfiguration = {
  /**
   * The ID of the VPC endpoint that your App Runner service connects to.
   */
  VpcEndpointId: string;
  /**
   * The ID of the VPC that the VPC endpoint is used in.
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::AppRunner::VpcIngressConnection.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * The AWS::AppRunner::VpcIngressConnection resource is an App Runner resource that specifies an App Runner VpcIngressConnection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html}
 */
export class AppRunnerVpcIngressConnection extends $Resource<
  "AWS::AppRunner::VpcIngressConnection",
  AppRunnerVpcIngressConnectionProperties,
  AppRunnerVpcIngressConnectionAttributes
> {
  public static readonly Type = "AWS::AppRunner::VpcIngressConnection";
  constructor(
    logicalId: string,
    properties: AppRunnerVpcIngressConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppRunnerVpcIngressConnection.Type, properties, options);
  }
}
