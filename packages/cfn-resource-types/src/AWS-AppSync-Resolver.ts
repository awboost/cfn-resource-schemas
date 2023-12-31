import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::Resolver
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html}
 */
export type AppSyncResolverProperties = {
  /**
   * The AWS AppSync GraphQL API to which you want to attach this resolver.
   */
  ApiId: string;
  /**
   * The caching configuration for the resolver.
   */
  CachingConfig?: CachingConfig;
  /**
   * The resolver code that contains the request and response functions. When code is used, the runtime is required.
   */
  Code?: string;
  /**
   * The Amazon S3 endpoint.
   */
  CodeS3Location?: string;
  /**
   * The resolver data source name.
   */
  DataSourceName?: string;
  /**
   * The GraphQL field on a type that invokes the resolver.
   */
  FieldName: string;
  /**
   * The resolver type.
   */
  Kind?: string;
  /**
   * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.
   */
  MaxBatchSize?: number;
  /**
   * Functions linked with the pipeline resolver.
   */
  PipelineConfig?: PipelineConfig;
  /**
   * Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.
   */
  RequestMappingTemplate?: string;
  /**
   * The location of a request mapping template in an Amazon S3 bucket. Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
   */
  RequestMappingTemplateS3Location?: string;
  /**
   * The response mapping template.
   */
  ResponseMappingTemplate?: string;
  /**
   * The location of a response mapping template in an Amazon S3 bucket. Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
   */
  ResponseMappingTemplateS3Location?: string;
  /**
   * Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   */
  Runtime?: AppSyncRuntime;
  /**
   * The SyncConfig for a resolver attached to a versioned data source.
   */
  SyncConfig?: SyncConfig;
  /**
   * The GraphQL type that invokes this resolver.
   */
  TypeName: string;
};
/**
 * Attribute type definition for `AWS::AppSync::Resolver`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#aws-resource-appsync-resolver-return-values}
 */
export type AppSyncResolverAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the resolver.
   */
  ResolverArn: string;
};
/**
 * Type definition for `AWS::AppSync::Resolver.AppSyncRuntime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html}
 */
export type AppSyncRuntime = {
  /**
   * The name of the runtime to use.
   */
  Name: string;
  /**
   * The version of the runtime to use.
   */
  RuntimeVersion: string;
};
/**
 * Type definition for `AWS::AppSync::Resolver.CachingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html}
 */
export type CachingConfig = {
  /**
   * The caching keys for a resolver that has caching activated. Valid values are entries from the $context.arguments, $context.source, and $context.identity maps.
   */
  CachingKeys?: string[];
  /**
   * The TTL in seconds for a resolver that has caching activated. Valid values are 1-36.00 seconds.
   */
  Ttl: number;
};
/**
 * Type definition for `AWS::AppSync::Resolver.LambdaConflictHandlerConfig`.
 * The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-lambdaconflicthandlerconfig.html}
 */
export type LambdaConflictHandlerConfig = {
  /**
   * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
   */
  LambdaConflictHandlerArn?: string;
};
/**
 * Type definition for `AWS::AppSync::Resolver.PipelineConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-pipelineconfig.html}
 */
export type PipelineConfig = {
  /**
   * A list of Function objects.
   */
  Functions?: string[];
};
/**
 * Type definition for `AWS::AppSync::Resolver.SyncConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html}
 */
export type SyncConfig = {
  /**
   * The Conflict Detection strategy to use.
   */
  ConflictDetection: string;
  /**
   * The Conflict Resolution strategy to perform in the event of a conflict.
   */
  ConflictHandler?: string;
  /**
   * The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.
   */
  LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
};
/**
 * Resource Type definition for AWS::AppSync::Resolver
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html}
 */
export class AppSyncResolver extends $Resource<
  "AWS::AppSync::Resolver",
  AppSyncResolverProperties,
  AppSyncResolverAttributes
> {
  public static readonly Type = "AWS::AppSync::Resolver";
  constructor(
    logicalId: string,
    properties: AppSyncResolverProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncResolver.Type, properties, options);
  }
}
