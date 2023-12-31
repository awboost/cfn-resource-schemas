import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html}
 */
export type ElasticBeanstalkApplicationVersionProperties = {
  /**
   * The name of the Elastic Beanstalk application that is associated with this application version.
   */
  ApplicationName: string;
  /**
   * A description of this application version.
   */
  Description?: string;
  /**
   * The Amazon S3 bucket and key that identify the location of the source bundle for this version.
   */
  SourceBundle: SourceBundle;
};
/**
 * Attribute type definition for `AWS::ElasticBeanstalk::ApplicationVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html#aws-resource-elasticbeanstalk-applicationversion-return-values}
 */
export type ElasticBeanstalkApplicationVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ElasticBeanstalk::ApplicationVersion.SourceBundle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-applicationversion-sourcebundle.html}
 */
export type SourceBundle = {
  /**
   * The Amazon S3 bucket where the data is located.
   */
  S3Bucket: string;
  /**
   * The Amazon S3 key where the data is located.
   */
  S3Key: string;
};
/**
 * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html}
 */
export class ElasticBeanstalkApplicationVersion extends $Resource<
  "AWS::ElasticBeanstalk::ApplicationVersion",
  ElasticBeanstalkApplicationVersionProperties,
  ElasticBeanstalkApplicationVersionAttributes
> {
  public static readonly Type = "AWS::ElasticBeanstalk::ApplicationVersion";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ElasticBeanstalkApplicationVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticBeanstalkApplicationVersion.Type,
      properties,
      ElasticBeanstalkApplicationVersion.AttributeNames,
      options,
    );
  }
}
