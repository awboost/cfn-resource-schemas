import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::WAFv2::LoggingConfiguration`.
 * A WAFv2 Logging Configuration Resource Provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html}
 */
export type WAFv2LoggingConfigurationProperties = {
  /**
   * The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.
   */
  LogDestinationConfigs: string[];
  /**
   * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
   */
  LoggingFilter?: {
    /**
     * Default handling for logs that don't match any of the specified filtering conditions.
     */
    DefaultBehavior: "KEEP" | "DROP";
    /**
     * The filters that you want to apply to the logs.
     * @minLength `1`
     */
    Filters: Filter[];
  };
  /**
   * The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
   */
  RedactedFields?: FieldToMatch[];
  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.
   */
  ResourceArn: string;
};
/**
 * Attribute type definition for `AWS::WAFv2::LoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#aws-resource-wafv2-loggingconfiguration-return-values}
 */
export type WAFv2LoggingConfigurationAttributes = {
  /**
   * Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration.
   */
  ManagedByFirewallManager: boolean;
};
/**
 * Type definition for `AWS::WAFv2::LoggingConfiguration.Condition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-condition.html}
 */
export type Condition = {
  /**
   * A single action condition.
   */
  ActionCondition?: {
    /**
     * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
     */
    Action:
      | "ALLOW"
      | "BLOCK"
      | "COUNT"
      | "CAPTCHA"
      | "CHALLENGE"
      | "EXCLUDED_AS_COUNT";
  };
  /**
   * A single label name condition.
   */
  LabelNameCondition?: {
    /**
     * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
     */
    LabelName: string;
  };
};
/**
 * Type definition for `AWS::WAFv2::LoggingConfiguration.FieldToMatch`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html}
 */
export type FieldToMatch = {
  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   */
  JsonBody?: {
    /**
     * What AWS WAF should do if it fails to completely parse the JSON body.
     */
    InvalidFallbackBehavior?: "MATCH" | "NO_MATCH" | "EVALUATE_AS_STRING";
    /**
     * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
     */
    MatchPattern: {
      /**
       * Match all of the elements. See also MatchScope in JsonBody. You must specify either this setting or the IncludedPaths setting, but not both.
       */
      All?: Record<string, any>;
      /**
       * Match only the specified include paths. See also MatchScope in JsonBody.
       * @minLength `1`
       */
      IncludedPaths?: string[];
    };
    /**
     * The parts of the JSON to match against using the MatchPattern. If you specify All, AWS WAF matches against keys and values.
     */
    MatchScope: "ALL" | "KEY" | "VALUE";
  };
  /**
   * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   */
  Method?: Record<string, any>;
  /**
   * Inspect the query string. This is the part of a URL that appears after a ? character, if any.
   */
  QueryString?: Record<string, any>;
  /**
   * Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
   */
  SingleHeader?: {
    /**
     * The name of the query header to inspect.
     */
    Name: string;
  };
  /**
   * Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.
   */
  UriPath?: Record<string, any>;
};
/**
 * Type definition for `AWS::WAFv2::LoggingConfiguration.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html}
 */
export type Filter = {
  /**
   * How to handle logs that satisfy the filter's conditions and requirement.
   */
  Behavior: "KEEP" | "DROP";
  /**
   * Match conditions for the filter.
   * @minLength `1`
   */
  Conditions: Condition[];
  /**
   * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
   */
  Requirement: "MEETS_ALL" | "MEETS_ANY";
};
/**
 * Resource type definition for `AWS::WAFv2::LoggingConfiguration`.
 * A WAFv2 Logging Configuration Resource Provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html}
 */
export class WAFv2LoggingConfiguration extends $Resource<
  "AWS::WAFv2::LoggingConfiguration",
  WAFv2LoggingConfigurationProperties,
  WAFv2LoggingConfigurationAttributes
> {
  public static readonly Type = "AWS::WAFv2::LoggingConfiguration";
  constructor(
    logicalId: string,
    properties: WAFv2LoggingConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFv2LoggingConfiguration.Type, properties, options);
  }
}
