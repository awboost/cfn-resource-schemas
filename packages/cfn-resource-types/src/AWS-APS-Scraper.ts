import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::APS::Scraper
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html}
 */
export type APSScraperProperties = {
  /**
   * Scraper alias.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z][-.0-9A-Z_a-z]*$`
   */
  Alias?: string;
  /**
   * Scraper metrics destination
   */
  Destination: Destination;
  /**
   * Scraper configuration
   */
  ScrapeConfiguration: ScrapeConfiguration;
  /**
   * Scraper metrics source
   */
  Source: Source;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::APS::Scraper`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#aws-resource-aps-scraper-return-values}
 */
export type APSScraperAttributes = {
  /**
   * Scraper ARN.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:(af|ap|ca|eu|me|sa|us)-(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-[0-9]+:[0-9]+:scraper/s-[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$`
   */
  Arn: string;
  /**
   * IAM role ARN for the scraper.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):iam::[0-9]{12}:role/[a-zA-Z0-9-]+$`
   */
  RoleArn: string;
  /**
   * Required to identify a specific scraper.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^s-[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$`
   */
  ScraperId: string;
};
/**
 * Type definition for `AWS::APS::Scraper.Destination`.
 * Scraper metrics destination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-destination.html}
 */
export type Destination = {
  /**
   * Configuration for Amazon Managed Prometheus metrics destination
   */
  AmpConfiguration?: {
    /**
     * ARN of an Amazon Managed Prometheus workspace
     * @pattern `^arn:aws[-a-z]*:aps:[-a-z0-9]+:[0-9]{12}:workspace/.+$`
     */
    WorkspaceArn: string;
  };
};
/**
 * Type definition for `AWS::APS::Scraper.ScrapeConfiguration`.
 * Scraper configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-scrapeconfiguration.html}
 */
export type ScrapeConfiguration = {
  /**
   * Prometheus compatible scrape configuration in base64 encoded blob format
   */
  ConfigurationBlob?: string;
};
/**
 * Type definition for `AWS::APS::Scraper.Source`.
 * Scraper metrics source
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-source.html}
 */
export type Source = {
  /**
   * Configuration for EKS metrics source
   */
  EksConfiguration?: {
    /**
     * ARN of an EKS cluster
     * @pattern `^arn:aws[-a-z]*:eks:[-a-z0-9]+:[0-9]{12}:cluster/.+$`
     */
    ClusterArn: string;
    /**
     * List of security group IDs
     */
    SecurityGroupIds?: string[];
    /**
     * List of subnet IDs
     */
    SubnetIds: string[];
  };
};
/**
 * Type definition for `AWS::APS::Scraper.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-scraper-tag.html}
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
  Value: string;
};
/**
 * Resource Type definition for AWS::APS::Scraper
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html}
 */
export class APSScraper extends $Resource<
  "AWS::APS::Scraper",
  APSScraperProperties,
  APSScraperAttributes
> {
  public static readonly Type = "AWS::APS::Scraper";
  constructor(
    logicalId: string,
    properties: APSScraperProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, APSScraper.Type, properties, options);
  }
}
