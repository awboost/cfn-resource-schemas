import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::ApiCache
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html}
 */
export type AppSyncApiCacheProperties = {
  ApiCachingBehavior: string;
  ApiId: string;
  AtRestEncryptionEnabled?: boolean;
  HealthMetricsConfig?: string;
  TransitEncryptionEnabled?: boolean;
  Ttl: number;
  Type: string;
};
/**
 * Attribute type definition for `AWS::AppSync::ApiCache`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#aws-resource-appsync-apicache-return-values}
 */
export type AppSyncApiCacheAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::AppSync::ApiCache
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html}
 */
export class AppSyncApiCache extends $Resource<
  "AWS::AppSync::ApiCache",
  AppSyncApiCacheProperties,
  AppSyncApiCacheAttributes
> {
  public static readonly Type = "AWS::AppSync::ApiCache";
  constructor(
    logicalId: string,
    properties: AppSyncApiCacheProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncApiCache.Type, properties, options);
  }
}
