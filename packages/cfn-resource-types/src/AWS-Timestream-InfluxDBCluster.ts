import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Timestream::InfluxDBCluster resource creates an InfluxDB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbcluster.html}
 */
export type TimestreamInfluxDBClusterProperties = {
  /**
   * The allocated storage for the InfluxDB cluster.
   * @min `20`
   * @max `15360`
   */
  AllocatedStorage?: number;
  /**
   * The bucket for the InfluxDB cluster.
   * @minLength `2`
   * @maxLength `64`
   * @pattern `^[^_][^"]*$`
   */
  Bucket?: string;
  /**
   * The compute instance of the InfluxDB cluster.
   */
  DbInstanceType?:
    | "db.influx.medium"
    | "db.influx.large"
    | "db.influx.xlarge"
    | "db.influx.2xlarge"
    | "db.influx.4xlarge"
    | "db.influx.8xlarge"
    | "db.influx.12xlarge"
    | "db.influx.16xlarge"
    | "db.influx.24xlarge";
  /**
   * The name of an existing InfluxDB parameter group.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  DbParameterGroupIdentifier?: string;
  /**
   * The storage type of the InfluxDB cluster.
   */
  DbStorageType?:
    | "InfluxIOIncludedT1"
    | "InfluxIOIncludedT2"
    | "InfluxIOIncludedT3";
  /**
   * Deployment type of the InfluxDB cluster.
   */
  DeploymentType?: "MULTI_NODE_READ_REPLICAS";
  /**
   * Failover mode of the InfluxDB cluster.
   */
  FailoverMode?: "AUTOMATIC" | "NO_FAILOVER";
  /**
   * Configuration for sending logs to customer account from the InfluxDB cluster.
   */
  LogDeliveryConfiguration?: {
    /**
     * S3 configuration for sending logs to customer account from the InfluxDB cluster.
     */
    S3Configuration: {
      /**
       * The bucket name for logs to be sent from the InfluxDB cluster
       * @minLength `3`
       * @maxLength `63`
       * @pattern `^[0-9a-z]+[0-9a-z\.\-]*[0-9a-z]+$`
       */
      BucketName: string;
      /**
       * Specifies whether logging to customer specified bucket is enabled.
       */
      Enabled: boolean;
    };
  };
  /**
   * The unique name that is associated with the InfluxDB cluster.
   * @minLength `3`
   * @maxLength `40`
   * @pattern `^[a-zA-z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*$`
   */
  Name?: string;
  /**
   * Network type of the InfluxDB cluster.
   */
  NetworkType?: "IPV4" | "DUAL";
  /**
   * The organization for the InfluxDB cluster.
   * @minLength `1`
   * @maxLength `64`
   */
  Organization?: string;
  /**
   * The password for the InfluxDB cluster.
   * @minLength `8`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Password?: string;
  /**
   * The port number on which InfluxDB accepts connections.
   * @min `1024`
   * @max `65535`
   */
  Port?: number;
  /**
   * Attach a public IP to the customer ENI.
   */
  PubliclyAccessible?: boolean;
  /**
   * An arbitrary set of tags (key-value pairs) for this DB cluster.
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The username for the InfluxDB cluster.
   * @minLength `1`
   * @maxLength `64`
   */
  Username?: string;
  /**
   * A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.
   * @minLength `1`
   * @maxLength `5`
   */
  VpcSecurityGroupIds?: string[];
  /**
   * A list of EC2 subnet IDs for this InfluxDB cluster.
   * @minLength `1`
   * @maxLength `3`
   */
  VpcSubnetIds?: string[];
};
/**
 * Attribute type definition for `AWS::Timestream::InfluxDBCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbcluster.html#aws-resource-timestream-influxdbcluster-return-values}
 */
export type TimestreamInfluxDBClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) that is associated with the InfluxDB cluster.
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws[a-z\-]*:timestream\-influxdb:[a-z0-9\-]+:[0-9]{12}:(db\-instance|db\-cluster|db\-parameter\-group)/[a-zA-Z0-9]{3,64}$`
   */
  Arn: string;
  /**
   * The connection endpoint for the InfluxDB cluster.
   */
  Endpoint: string;
  /**
   * The engine type for the InfluxDB cluster.
   */
  EngineType: "INFLUXDB_V2" | "INFLUXDB_V3_CORE" | "INFLUXDB_V3_ENTERPRISE";
  /**
   * The service generated unique identifier for InfluxDB cluster.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Id: string;
  /**
   * The Auth parameters secret Amazon Resource name (ARN) that is associated with the InfluxDB cluster.
   * @pattern `^arn:[a-z]*:secretsmanager:[a-z\-0-9]*:[0-9]*:secret:[a-zA-Z0-9\-]*`
   */
  InfluxAuthParametersSecretArn: string;
  /**
   * The reader endpoint for the InfluxDB cluster.
   */
  ReaderEndpoint: string;
  /**
   * Status of the InfluxDB cluster.
   */
  Status:
    | "CREATING"
    | "UPDATING"
    | "UPDATING_INSTANCE_TYPE"
    | "MAINTENANCE"
    | "DELETING"
    | "AVAILABLE"
    | "REBOOTING"
    | "REBOOT_FAILED"
    | "PARTIALLY_AVAILABLE"
    | "FAILED"
    | "DELETED";
};
/**
 * Type definition for `AWS::Timestream::InfluxDBCluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-influxdbcluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::Timestream::InfluxDBCluster resource creates an InfluxDB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbcluster.html}
 */
export class TimestreamInfluxDBCluster extends $Resource<
  "AWS::Timestream::InfluxDBCluster",
  TimestreamInfluxDBClusterProperties,
  TimestreamInfluxDBClusterAttributes
> {
  public static readonly Type = "AWS::Timestream::InfluxDBCluster";
  constructor(
    logicalId: string,
    properties: TimestreamInfluxDBClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TimestreamInfluxDBCluster.Type, properties, options);
  }
}
