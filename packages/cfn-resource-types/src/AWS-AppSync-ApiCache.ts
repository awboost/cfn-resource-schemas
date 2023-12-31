import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppSync::ApiCache
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html}
 */
export type AppSyncApiCacheProperties = {
  ApiCachingBehavior: string;
  ApiId: string;
  AtRestEncryptionEnabled?: boolean;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppSyncApiCacheProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppSyncApiCache.Type,
      properties,
      AppSyncApiCache.AttributeNames,
      options,
    );
  }
}
