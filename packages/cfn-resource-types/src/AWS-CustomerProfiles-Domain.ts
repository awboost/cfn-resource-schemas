import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CustomerProfiles::Domain`.
 * A domain defined for 3rd party data source in Profile Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html}
 */
export type CustomerProfilesDomainProperties = {
  /**
   * The URL of the SQS dead letter queue
   * @minLength `0`
   * @maxLength `255`
   */
  DeadLetterQueueUrl?: string;
  /**
   * The default encryption key
   * @minLength `0`
   * @maxLength `255`
   */
  DefaultEncryptionKey?: string;
  /**
   * The default number of days until the data within the domain expires.
   * @min `1`
   * @max `1098`
   */
  DefaultExpirationDays: number;
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3.
   */
  Matching?: Matching;
  /**
   * The process of matching duplicate profiles using the Rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3.
   */
  RuleBasedMatching?: RuleBasedMatching;
  /**
   * The tags (keys and values) associated with the domain
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html#aws-resource-customerprofiles-domain-return-values}
 */
export type CustomerProfilesDomainAttributes = {
  /**
   * The time of this integration got created
   */
  CreatedAt: string;
  /**
   * The time of this integration got last updated at
   */
  LastUpdatedAt: string;
  /**
   * The process of matching duplicate profiles using the Rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3.
   */
  RuleBasedMatching: {
    Status: "PENDING" | "IN_PROGRESS" | "ACTIVE";
  };
  /**
   * Usage-specific statistics about the domain.
   */
  Stats: {
    /**
     * The number of profiles that you are currently paying for in the domain. If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on.
     */
    MeteringProfileCount: number;
    /**
     * The total number of objects in domain.
     */
    ObjectCount: number;
    /**
     * The total number of profiles currently in the domain.
     */
    ProfileCount: number;
    /**
     * The total size, in bytes, of all objects in the domain.
     */
    TotalSize: number;
  };
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.AttributeTypesSelector`.
 * Configures information about the AttributeTypesSelector where the rule-based identity resolution uses to match profiles.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-attributetypesselector.html}
 */
export type AttributeTypesSelector = {
  /**
   * The Address type. You can choose from Address, BusinessAddress, MaillingAddress, and ShippingAddress. You only can use the Address type in the MatchingRule. For example, if you want to match profile based on BusinessAddress.City or MaillingAddress.City, you need to choose the BusinessAddress and the MaillingAddress to represent the Address type and specify the Address.City on the matching rule.
   * @minLength `1`
   * @maxLength `4`
   */
  Address?: string[];
  /**
   * Configures the AttributeMatchingModel, you can either choose ONE_TO_ONE or MANY_TO_MANY.
   */
  AttributeMatchingModel: "ONE_TO_ONE" | "MANY_TO_MANY";
  /**
   * The Email type. You can choose from EmailAddress, BusinessEmailAddress and PersonalEmailAddress. You only can use the EmailAddress type in the MatchingRule. For example, if you want to match profile based on PersonalEmailAddress or BusinessEmailAddress, you need to choose the PersonalEmailAddress and the BusinessEmailAddress to represent the EmailAddress type and only specify the EmailAddress on the matching rule.
   * @minLength `1`
   * @maxLength `3`
   */
  EmailAddress?: string[];
  /**
   * The PhoneNumber type. You can choose from PhoneNumber, HomePhoneNumber, and MobilePhoneNumber. You only can use the PhoneNumber type in the MatchingRule. For example, if you want to match a profile based on Phone or HomePhone, you need to choose the Phone and the HomePhone to represent the PhoneNumber type and only specify the PhoneNumber on the matching rule.
   * @minLength `1`
   * @maxLength `4`
   */
  PhoneNumber?: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.AutoMerging`.
 * Configuration information about the auto-merging process.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-automerging.html}
 */
export type AutoMerging = {
  /**
   * How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same FirstName and LastName (and that is the matching criteria), which EmailAddress should be used?
   */
  ConflictResolution?: ConflictResolution;
  /**
   * A list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.
   */
  Consolidation?: Consolidation;
  /**
   * The flag that enables the auto-merging of duplicate profiles.
   */
  Enabled: boolean;
  /**
   * A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles.
   * @min `0`
   * @max `1`
   */
  MinAllowedConfidenceScoreForMerging?: number;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.ConflictResolution`.
 * How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same FirstName and LastName (and that is the matching criteria), which EmailAddress should be used?
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-conflictresolution.html}
 */
export type ConflictResolution = {
  /**
   * How the auto-merging process should resolve conflicts between different profiles.
   */
  ConflictResolvingModel: "RECENCY" | "SOURCE";
  /**
   * The ObjectType name that is used to resolve profile merging conflicts when choosing SOURCE as the ConflictResolvingModel.
   * @minLength `1`
   * @maxLength `255`
   */
  SourceName?: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.Consolidation`.
 * A list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-consolidation.html}
 */
export type Consolidation = {
  /**
   * A list of matching criteria.
   * @minLength `1`
   * @maxLength `10`
   */
  MatchingAttributesList: string[][];
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.DomainStats`.
 * Usage-specific statistics about the domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-domainstats.html}
 */
export type DomainStats = {
  /**
   * The number of profiles that you are currently paying for in the domain. If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on.
   */
  MeteringProfileCount?: number;
  /**
   * The total number of objects in domain.
   */
  ObjectCount?: number;
  /**
   * The total number of profiles currently in the domain.
   */
  ProfileCount?: number;
  /**
   * The total size, in bytes, of all objects in the domain.
   */
  TotalSize?: number;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.ExportingConfig`.
 * Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-exportingconfig.html}
 */
export type ExportingConfig = {
  /**
   * The S3 location where Identity Resolution Jobs write result files.
   */
  S3Exporting?: S3ExportingConfig;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.JobSchedule`.
 * The day and time when do you want to start the Identity Resolution Job every week.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-jobschedule.html}
 */
export type JobSchedule = {
  /**
   * The day when the Identity Resolution Job should run every week.
   */
  DayOfTheWeek:
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY";
  /**
   * The time when the Identity Resolution Job should run every week.
   * @minLength `3`
   * @maxLength `5`
   * @pattern `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   */
  Time: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.Matching`.
 * The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matching.html}
 */
export type Matching = {
  /**
   * Configuration information about the auto-merging process.
   */
  AutoMerging?: AutoMerging;
  /**
   * The flag that enables the matching process of duplicate profiles.
   */
  Enabled: boolean;
  /**
   * Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.
   */
  ExportingConfig?: ExportingConfig;
  /**
   * The day and time when do you want to start the Identity Resolution Job every week.
   */
  JobSchedule?: JobSchedule;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.MatchingRule`.
 * Specifies how does the rule-based matching process should match profiles.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-matchingrule.html}
 */
export type MatchingRule = {
  /**
   * A single rule level of the MatchRules. Configures how the rule-based matching process should match profiles.
   * @minLength `1`
   * @maxLength `15`
   */
  Rule: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.RuleBasedMatching`.
 * The process of matching duplicate profiles using the Rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-rulebasedmatching.html}
 */
export type RuleBasedMatching = {
  /**
   * Configures information about the AttributeTypesSelector where the rule-based identity resolution uses to match profiles.
   */
  AttributeTypesSelector?: AttributeTypesSelector;
  /**
   * How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same FirstName and LastName (and that is the matching criteria), which EmailAddress should be used?
   */
  ConflictResolution?: ConflictResolution;
  /**
   * The flag that enables the rule-based matching process of duplicate profiles.
   */
  Enabled: boolean;
  /**
   * Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.
   */
  ExportingConfig?: ExportingConfig;
  /**
   * Configures how the rule-based matching process should match profiles. You can have up to 15 MatchingRule in the MatchingRules.
   * @minLength `1`
   * @maxLength `15`
   */
  MatchingRules?: MatchingRule[];
  /**
   * Indicates the maximum allowed rule level for matching.
   * @min `1`
   * @max `15`
   */
  MaxAllowedRuleLevelForMatching?: number;
  /**
   * Indicates the maximum allowed rule level for merging.
   * @min `1`
   * @max `15`
   */
  MaxAllowedRuleLevelForMerging?: number;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.S3ExportingConfig`.
 * The S3 location where Identity Resolution Jobs write result files.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-s3exportingconfig.html}
 */
export type S3ExportingConfig = {
  /**
   * The name of the S3 bucket where Identity Resolution Jobs write result files.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9.-]+$`
   */
  S3BucketName: string;
  /**
   * The S3 key name of the location where Identity Resolution Jobs write result files.
   * @minLength `1`
   * @maxLength `800`
   * @pattern `.*`
   */
  S3KeyName?: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::Domain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-domain-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CustomerProfiles::Domain`.
 * A domain defined for 3rd party data source in Profile Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html}
 */
export class CustomerProfilesDomain extends $Resource<
  "AWS::CustomerProfiles::Domain",
  CustomerProfilesDomainProperties,
  CustomerProfilesDomainAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::Domain";
  constructor(
    logicalId: string,
    properties: CustomerProfilesDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CustomerProfilesDomain.Type, properties, options);
  }
}
