import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::AppSync::Resolver`` resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see [Resolver Mapping Template Reference](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html).
  When you submit an update, CFNLong updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CFNshort template. Changing the S3 file content without changing a property value will not result in an update operation.
 See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html}
 */
export type AppSyncResolverProperties = {
  /**
   * The APSYlong GraphQL API to which you want to attach this resolver.
   */
  ApiId: string;
  /**
   * The caching configuration for the resolver.
   */
  CachingConfig?: CachingConfig;
  /**
   * The ``resolver`` code that contains the request and response functions. When code is used, the ``runtime`` is required. The runtime value must be ``APPSYNC_JS``.
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
      +   *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
      +   *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of ``Function`` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
     */
  Kind?: string;
  /**
   * The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation.
   */
  MaxBatchSize?: number;
  MetricsConfig?: "ENABLED" | "DISABLED";
  /**
   * Functions linked with the pipeline resolver.
   */
  PipelineConfig?: PipelineConfig;
  /**
     * The request mapping template.
     Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.
     */
  RequestMappingTemplate?: string;
  /**
   * The location of a request mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.
   */
  RequestMappingTemplateS3Location?: string;
  /**
   * The response mapping template.
   */
  ResponseMappingTemplate?: string;
  /**
   * The location of a response mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.
   */
  ResponseMappingTemplateS3Location?: string;
  /**
   * Describes a runtime used by an APSYlong resolver or APSYlong function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   */
  Runtime?: AppSyncRuntime;
  /**
   * The ``SyncConfig`` for a resolver attached to a versioned data source.
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
  ResolverArn: string;
};
/**
 * Type definition for `AWS::AppSync::Resolver.AppSyncRuntime`.
 * Describes a runtime used by an APSYlong resolver or APSYlong function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html}
 */
export type AppSyncRuntime = {
  /**
   * The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``.
   */
  Name: string;
  /**
   * The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``.
   */
  RuntimeVersion: string;
};
/**
 * Type definition for `AWS::AppSync::Resolver.CachingConfig`.
 * The caching configuration for a resolver that has caching activated.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html}
 */
export type CachingConfig = {
  /**
     * The caching keys for a resolver that has caching activated.
     Valid values are entries from the ``$context.arguments``, ``$context.source``, and ``$context.identity`` maps.
     */
  CachingKeys?: string[];
  /**
     * The TTL in seconds for a resolver that has caching activated.
     Valid values are 1–3,600 seconds.
     */
  Ttl: number;
};
/**
 * Type definition for `AWS::AppSync::Resolver.LambdaConflictHandlerConfig`.
 * The ``LambdaConflictHandlerConfig`` when configuring LAMBDA as the Conflict Handler.
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
 * Use the ``PipelineConfig`` property type to specify ``PipelineConfig`` for an APSYlong resolver.
  ``PipelineConfig`` is a property of the [AWS::AppSync::Resolver](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html) resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-pipelineconfig.html}
 */
export type PipelineConfig = {
  /**
   * A list of ``Function`` objects.
   */
  Functions?: string[];
};
/**
 * Type definition for `AWS::AppSync::Resolver.SyncConfig`.
 * Describes a Sync configuration for a resolver.
 Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html}
 */
export type SyncConfig = {
  /**
     * The Conflict Detection strategy to use.
      +   *VERSION*: Detect conflicts based on object versions for this resolver.
      +   *NONE*: Do not detect conflicts when invoking this resolver.
     */
  ConflictDetection: string;
  /**
     * The Conflict Resolution strategy to perform in the event of a conflict.
      +   *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
      +   *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
      +   *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the ``LambdaConflictHandlerConfig``.
     */
  ConflictHandler?: string;
  /**
   * The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler.
   */
  LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
};
/**
 * The ``AWS::AppSync::Resolver`` resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see [Resolver Mapping Template Reference](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html).
  When you submit an update, CFNLong updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CFNshort template. Changing the S3 file content without changing a property value will not result in an update operation.
 See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the *User Guide*.
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
