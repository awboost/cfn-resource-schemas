import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ElastiCache::ServerlessCache resource creates an Amazon ElastiCache Serverless Cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html}
 */
export type ElastiCacheServerlessCacheProperties = {
  /**
   * The cache capacity limit of the Serverless Cache.
   */
  CacheUsageLimits?: CacheUsageLimits;
  /**
   * The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache.
   */
  DailySnapshotTime?: string;
  /**
   * The description of the Serverless Cache.
   */
  Description?: string;
  /**
   * The engine name of the Serverless Cache.
   */
  Engine: string;
  /**
   * The final snapshot name which is taken before Serverless Cache is deleted.
   */
  FinalSnapshotName?: string;
  /**
   * The ID of the KMS key used to encrypt the cluster.
   */
  KmsKeyId?: string;
  /**
   * The major engine version of the Serverless Cache.
   */
  MajorEngineVersion?: string;
  /**
   * One or more Amazon VPC security groups associated with this Serverless Cache.
   */
  SecurityGroupIds?: string[];
  /**
   * The name of the Serverless Cache. This value must be unique.
   */
  ServerlessCacheName: string;
  /**
   * The ARN's of snapshot to restore Serverless Cache.
   */
  SnapshotArnsToRestore?: string[];
  /**
   * The snapshot retention limit of the Serverless Cache.
   */
  SnapshotRetentionLimit?: number;
  /**
   * The subnet id's of the Serverless Cache.
   */
  SubnetIds?: string[];
  /**
   * An array of key-value pairs to apply to this Serverless Cache.
   */
  Tags?: Tag[];
  /**
   * The ID of the user group.
   */
  UserGroupId?: string;
};
/**
 * Attribute type definition for `AWS::ElastiCache::ServerlessCache`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#aws-resource-elasticache-serverlesscache-return-values}
 */
export type ElastiCacheServerlessCacheAttributes = {
  /**
   * The ARN of the Serverless Cache.
   */
  ARN: string;
  /**
   * The creation time of the Serverless Cache.
   */
  CreateTime: string;
  /**
   * The address and the port.
   */
  Endpoint: {
    /**
     * Endpoint address.
     */
    Address: string;
    /**
     * Endpoint port.
     */
    Port: string;
  };
  /**
   * The full engine version of the Serverless Cache.
   */
  FullEngineVersion: string;
  /**
   * The address and the port.
   */
  ReaderEndpoint: {
    /**
     * Endpoint address.
     */
    Address: string;
    /**
     * Endpoint port.
     */
    Port: string;
  };
  /**
   * The status of the Serverless Cache.
   */
  Status: string;
};
/**
 * Type definition for `AWS::ElastiCache::ServerlessCache.CacheUsageLimits`.
 * The cache capacity limit of the Serverless Cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-cacheusagelimits.html}
 */
export type CacheUsageLimits = {
  /**
   * The cached data capacity of the Serverless Cache.
   */
  DataStorage?: DataStorage;
  /**
   * The ECPU per second of the Serverless Cache.
   */
  ECPUPerSecond?: ECPUPerSecond;
};
/**
 * Type definition for `AWS::ElastiCache::ServerlessCache.DataStorage`.
 * The cached data capacity of the Serverless Cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-datastorage.html}
 */
export type DataStorage = {
  /**
   * The maximum cached data capacity of the Serverless Cache.
   */
  Maximum?: number;
  /**
   * The minimum cached data capacity of the Serverless Cache.
   */
  Minimum?: number;
  /**
   * The unit of cached data capacity of the Serverless Cache.
   */
  Unit: "GB";
};
/**
 * Type definition for `AWS::ElastiCache::ServerlessCache.ECPUPerSecond`.
 * The ECPU per second of the Serverless Cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-ecpupersecond.html}
 */
export type ECPUPerSecond = {
  /**
   * The maximum ECPU per second of the Serverless Cache.
   */
  Maximum?: number;
  /**
   * The minimum ECPU per second of the Serverless Cache.
   */
  Minimum?: number;
};
/**
 * Type definition for `AWS::ElastiCache::ServerlessCache.Tag`.
 * A key-value pair to associate with Serverless Cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z0-9 _\.\/=+:\-@]*$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9 _\.\/=+:\-@]*$`
   */
  Value?: string;
};
/**
 * The AWS::ElastiCache::ServerlessCache resource creates an Amazon ElastiCache Serverless Cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html}
 */
export class ElastiCacheServerlessCache extends $Resource<
  "AWS::ElastiCache::ServerlessCache",
  ElastiCacheServerlessCacheProperties,
  ElastiCacheServerlessCacheAttributes
> {
  public static readonly Type = "AWS::ElastiCache::ServerlessCache";
  constructor(
    logicalId: string,
    properties: ElastiCacheServerlessCacheProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheServerlessCache.Type, properties, options);
  }
}
