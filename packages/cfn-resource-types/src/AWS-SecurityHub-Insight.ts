import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::Insight resource represents the AWS Security Hub Insight in your account. An AWS Security Hub insight is a collection of related findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html}
 */
export type SecurityHubInsightProperties = {
  /**
   * One or more attributes used to filter the findings included in the insight
   */
  Filters: AwsSecurityFindingFilters;
  /**
   * The grouping attribute for the insight's findings
   * @minLength `1`
   */
  GroupByAttribute: string;
  /**
   * The name of a Security Hub insight
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::SecurityHub::Insight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#aws-resource-securityhub-insight-return-values}
 */
export type SecurityHubInsightAttributes = {
  /**
   * The ARN of a Security Hub insight
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  InsightArn: string;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.AwsSecurityFindingFilters`.
 * A collection of filters that are applied to all active findings aggregated by AWS Security Hub.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-awssecurityfindingfilters.html}
 */
export type AwsSecurityFindingFilters = {
  /**
   * The AWS account ID in which a finding is generated.
   * @maxLength `20`
   */
  AwsAccountId?: StringFilter[];
  /**
   * The name of the AWS account in which a finding is generated.
   * @maxLength `20`
   */
  AwsAccountName?: StringFilter[];
  /**
   * The name of the findings provider (company) that owns the solution (product) that generates findings.
   * @maxLength `20`
   */
  CompanyName?: StringFilter[];
  /**
   * The unique identifier of a standard in which a control is enabled.
   * @maxLength `20`
   */
  ComplianceAssociatedStandardsId?: StringFilter[];
  /**
   * The unique identifier of a control across standards.
   * @maxLength `20`
   */
  ComplianceSecurityControlId?: StringFilter[];
  /**
   * The name of a security control parameter.
   * @maxLength `20`
   */
  ComplianceSecurityControlParametersName?: StringFilter[];
  /**
   * The current value of a security control parameter.
   * @maxLength `20`
   */
  ComplianceSecurityControlParametersValue?: StringFilter[];
  /**
   * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard.
   * @maxLength `20`
   */
  ComplianceStatus?: StringFilter[];
  /**
   * A finding's confidence.
   * @maxLength `20`
   */
  Confidence?: NumberFilter[];
  /**
   * An ISO8601-formatted timestamp that indicates when the security findings provider captured the potential security issue that a finding captured.
   * @maxLength `20`
   */
  CreatedAt?: DateFilter[];
  /**
   * The level of importance assigned to the resources associated with the finding.
   * @maxLength `20`
   */
  Criticality?: NumberFilter[];
  /**
   * A finding's description.
   * @maxLength `20`
   */
  Description?: StringFilter[];
  /**
   * The finding provider value for the finding confidence.
   * @maxLength `20`
   */
  FindingProviderFieldsConfidence?: NumberFilter[];
  /**
   * The finding provider value for the level of importance assigned to the resources associated with the findings.
   * @maxLength `20`
   */
  FindingProviderFieldsCriticality?: NumberFilter[];
  /**
   * The finding identifier of a related finding that is identified by the finding provider.
   * @maxLength `20`
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];
  /**
   * The ARN of the solution that generated a related finding that is identified by the finding provider.
   * @maxLength `20`
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];
  /**
   * The finding provider value for the severity label.
   * @maxLength `20`
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[];
  /**
   * The finding provider's original value for the severity.
   * @maxLength `20`
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[];
  /**
   * One or more finding types that the finding provider assigned to the finding.
   * @maxLength `20`
   */
  FindingProviderFieldsTypes?: StringFilter[];
  /**
   * An ISO8601-formatted timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
   * @maxLength `20`
   */
  FirstObservedAt?: DateFilter[];
  /**
   * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding.
   * @maxLength `20`
   */
  GeneratorId?: StringFilter[];
  /**
   * The security findings provider-specific identifier for a finding.
   * @maxLength `20`
   */
  Id?: StringFilter[];
  /**
   * A keyword for a finding.
   * @maxLength `20`
   */
  Keyword?: KeywordFilter[];
  /**
   * An ISO8601-formatted timestamp that indicates when the security findings provider most recently observed the potential security issue that a finding captured.
   * @maxLength `20`
   */
  LastObservedAt?: DateFilter[];
  /**
   * The name of the malware that was observed.
   * @maxLength `20`
   */
  MalwareName?: StringFilter[];
  /**
   * The filesystem path of the malware that was observed.
   * @maxLength `20`
   */
  MalwarePath?: StringFilter[];
  /**
   * The state of the malware that was observed.
   * @maxLength `20`
   */
  MalwareState?: StringFilter[];
  /**
   * The type of the malware that was observed.
   * @maxLength `20`
   */
  MalwareType?: StringFilter[];
  /**
   * The destination domain of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkDestinationDomain?: StringFilter[];
  /**
   * The destination IPv4 address of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkDestinationIpV4?: IpFilter[];
  /**
   * The destination IPv6 address of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkDestinationIpV6?: IpFilter[];
  /**
   * The destination port of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkDestinationPort?: NumberFilter[];
  /**
   * Indicates the direction of network traffic associated with a finding.
   * @maxLength `20`
   */
  NetworkDirection?: StringFilter[];
  /**
   * The protocol of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkProtocol?: StringFilter[];
  /**
   * The source domain of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkSourceDomain?: StringFilter[];
  /**
   * The source IPv4 address of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkSourceIpV4?: IpFilter[];
  /**
   * The source IPv6 address of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkSourceIpV6?: IpFilter[];
  /**
   * The source media access control (MAC) address of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkSourceMac?: StringFilter[];
  /**
   * The source port of network-related information about a finding.
   * @maxLength `20`
   */
  NetworkSourcePort?: NumberFilter[];
  /**
   * The text of a note.
   * @maxLength `20`
   */
  NoteText?: StringFilter[];
  /**
   * The timestamp of when the note was updated.
   * @maxLength `20`
   */
  NoteUpdatedAt?: DateFilter[];
  /**
   * The principal that created a note.
   * @maxLength `20`
   */
  NoteUpdatedBy?: StringFilter[];
  /**
   * A timestamp that identifies when the process was launched.
   * @maxLength `20`
   */
  ProcessLaunchedAt?: DateFilter[];
  /**
   * The name of the process.
   * @maxLength `20`
   */
  ProcessName?: StringFilter[];
  /**
   * The parent process ID.
   * @maxLength `20`
   */
  ProcessParentPid?: NumberFilter[];
  /**
   * The path to the process executable.
   * @maxLength `20`
   */
  ProcessPath?: StringFilter[];
  /**
   * The process ID.
   * @maxLength `20`
   */
  ProcessPid?: NumberFilter[];
  /**
   * A timestamp that identifies when the process was terminated.
   * @maxLength `20`
   */
  ProcessTerminatedAt?: DateFilter[];
  /**
   * The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
   * @maxLength `20`
   */
  ProductArn?: StringFilter[];
  /**
   * A data type where security findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
   * @maxLength `20`
   */
  ProductFields?: MapFilter[];
  /**
   * The name of the solution (product) that generates findings.
   * @maxLength `20`
   */
  ProductName?: StringFilter[];
  /**
   * The recommendation of what to do about the issue described in a finding.
   * @maxLength `20`
   */
  RecommendationText?: StringFilter[];
  /**
   * The updated record state for the finding.
   * @maxLength `20`
   */
  RecordState?: StringFilter[];
  /**
   * The Region from which the finding was generated.
   * @maxLength `20`
   */
  Region?: StringFilter[];
  /**
   * The solution-generated identifier for a related finding.
   * @maxLength `20`
   */
  RelatedFindingsId?: StringFilter[];
  /**
   * The ARN of the solution that generated a related finding.
   * @maxLength `20`
   */
  RelatedFindingsProductArn?: StringFilter[];
  /**
   * The ARN of the application that is related to a finding.
   * @maxLength `20`
   */
  ResourceApplicationArn?: StringFilter[];
  /**
   * The name of the application that is related to a finding.
   * @maxLength `20`
   */
  ResourceApplicationName?: StringFilter[];
  /**
   * The IAM profile ARN of the instance.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];
  /**
   * The Amazon Machine Image (AMI) ID of the instance.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];
  /**
   * The IPv4 addresses associated with the instance.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];
  /**
   * The IPv6 addresses associated with the instance.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];
  /**
   * The key name associated with the instance.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];
  /**
   * The date and time the instance was launched.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];
  /**
   * The identifier of the subnet that the instance was launched in.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];
  /**
   * The instance type of the instance.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceType?: StringFilter[];
  /**
   * The identifier of the VPC that the instance was launched in.
   * @maxLength `20`
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];
  /**
   * The creation date/time of the IAM access key related to a finding.
   * @maxLength `20`
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];
  /**
   * The name of the principal that is associated with an IAM access key.
   * @maxLength `20`
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];
  /**
   * The status of the IAM access key related to a finding.
   * @maxLength `20`
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];
  /**
   * The user associated with the IAM access key related to a finding.
   * @maxLength `20`
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];
  /**
   * The name of an IAM user.
   * @maxLength `20`
   */
  ResourceAwsIamUserUserName?: StringFilter[];
  /**
   * The canonical user ID of the owner of the S3 bucket.
   * @maxLength `20`
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];
  /**
   * The display name of the owner of the S3 bucket.
   * @maxLength `20`
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];
  /**
   * The identifier of the image related to a finding.
   * @maxLength `20`
   */
  ResourceContainerImageId?: StringFilter[];
  /**
   * The name of the image related to a finding.
   * @maxLength `20`
   */
  ResourceContainerImageName?: StringFilter[];
  /**
   * A timestamp that identifies when the container was started.
   * @maxLength `20`
   */
  ResourceContainerLaunchedAt?: DateFilter[];
  /**
   * The name of the container related to a finding.
   * @maxLength `20`
   */
  ResourceContainerName?: StringFilter[];
  /**
   * The details of a resource that doesn't have a specific subfield for the resource type defined.
   * @maxLength `20`
   */
  ResourceDetailsOther?: MapFilter[];
  /**
   * The canonical identifier for the given resource type.
   * @maxLength `20`
   */
  ResourceId?: StringFilter[];
  /**
   * The canonical AWS partition name that the Region is assigned to.
   * @maxLength `20`
   */
  ResourcePartition?: StringFilter[];
  /**
   * The canonical AWS external Region name where this resource is located.
   * @maxLength `20`
   */
  ResourceRegion?: StringFilter[];
  /**
   * A list of AWS tags associated with a resource at the time the finding was processed.
   * @maxLength `20`
   */
  ResourceTags?: MapFilter[];
  /**
   * Specifies the type of the resource that details are provided for.
   * @maxLength `20`
   */
  ResourceType?: StringFilter[];
  /**
   * Indicates whether or not sample findings are included in the filter results.
   * @maxLength `20`
   */
  Sample?: BooleanFilter[];
  /**
   * The label of a finding's severity.
   * @maxLength `20`
   */
  SeverityLabel?: StringFilter[];
  /**
   * The normalized severity of a finding.
   * @maxLength `20`
   */
  SeverityNormalized?: NumberFilter[];
  /**
   * The native severity as defined by the security findings provider's solution that generated the finding.
   * @maxLength `20`
   */
  SeverityProduct?: NumberFilter[];
  /**
   * A URL that links to a page about the current finding in the security findings provider's solution.
   * @maxLength `20`
   */
  SourceUrl?: StringFilter[];
  /**
   * The category of a threat intelligence indicator.
   * @maxLength `20`
   */
  ThreatIntelIndicatorCategory?: StringFilter[];
  /**
   * A timestamp that identifies the last observation of a threat intelligence indicator.
   * @maxLength `20`
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];
  /**
   * The source of the threat intelligence.
   * @maxLength `20`
   */
  ThreatIntelIndicatorSource?: StringFilter[];
  /**
   * The URL for more details from the source of the threat intelligence.
   * @maxLength `20`
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];
  /**
   * The type of a threat intelligence indicator.
   * @maxLength `20`
   */
  ThreatIntelIndicatorType?: StringFilter[];
  /**
   * The value of a threat intelligence indicator.
   * @maxLength `20`
   */
  ThreatIntelIndicatorValue?: StringFilter[];
  /**
   * A finding's title.
   * @maxLength `20`
   */
  Title?: StringFilter[];
  /**
   * A finding type in the format of namespace/category/classifier that classifies a finding.
   * @maxLength `20`
   */
  Type?: StringFilter[];
  /**
   * An ISO8601-formatted timestamp that indicates when the security findings provider last updated the finding record.
   * @maxLength `20`
   */
  UpdatedAt?: DateFilter[];
  /**
   * A list of name/value string pairs associated with the finding.
   * @maxLength `20`
   */
  UserDefinedFields?: MapFilter[];
  /**
   * The veracity of a finding.
   * @maxLength `20`
   */
  VerificationState?: StringFilter[];
  /**
   * Indicates whether a software vulnerability in your environment has a known exploit.
   * @maxLength `20`
   */
  VulnerabilitiesExploitAvailable?: StringFilter[];
  /**
   * Indicates whether a vulnerability is fixed in a newer version of the affected software packages.
   * @maxLength `20`
   */
  VulnerabilitiesFixAvailable?: StringFilter[];
  /**
   * The workflow state of a finding.
   * @maxLength `20`
   */
  WorkflowState?: StringFilter[];
  /**
   * The status of the investigation into a finding.
   * @maxLength `20`
   */
  WorkflowStatus?: StringFilter[];
};
/**
 * Type definition for `AWS::SecurityHub::Insight.BooleanFilter`.
 * Boolean filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-booleanfilter.html}
 */
export type BooleanFilter = {
  /**
   * The value of the boolean.
   */
  Value: boolean;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.DateFilter`.
 * A date filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-datefilter.html}
 */
export type DateFilter = {
  /**
   * A date range for the date filter.
   */
  DateRange?: DateRange;
  /**
   * The date and time, in UTC and ISO 8601 format.
   * @pattern `^([\+-]?\d{4}(?!\d{2}))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([tT]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$`
   */
  End?: string;
  /**
   * The date and time, in UTC and ISO 8601 format.
   * @pattern `^([\+-]?\d{4}(?!\d{2}))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([tT]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$`
   */
  Start?: string;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.DateRange`.
 * A date range for the date filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-daterange.html}
 */
export type DateRange = {
  /**
   * A date range unit for the date filter.
   */
  Unit: "DAYS";
  /**
   * A date range value for the date filter.
   */
  Value: number;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.IpFilter`.
 * The IP filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-ipfilter.html}
 */
export type IpFilter = {
  /**
   * A finding's CIDR value.
   * @minLength `1`
   */
  Cidr: string;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.KeywordFilter`.
 * A keyword filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-keywordfilter.html}
 */
export type KeywordFilter = {
  /**
   * A value for the keyword.
   * @minLength `1`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.MapFilter`.
 * A map filter for filtering AWS Security Hub findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-mapfilter.html}
 */
export type MapFilter = {
  /**
   * The condition to apply to the key value when filtering Security Hub findings with a map filter.
   */
  Comparison: "EQUALS" | "NOT_EQUALS";
  /**
   * Non-empty string definition.
   * @minLength `1`
   */
  Key: string;
  /**
   * Non-empty string definition.
   * @minLength `1`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.NumberFilter`.
 * A number filter for querying findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-numberfilter.html}
 */
export type NumberFilter = {
  /**
   * The equal-to condition to be applied to a single field when querying for findings.
   */
  Eq?: number;
  /**
   * The greater-than-equal condition to be applied to a single field when querying for findings.
   */
  Gte?: number;
  /**
   * The less-than-equal condition to be applied to a single field when querying for findings.
   */
  Lte?: number;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.StringFilter`.
 * A string filter for filtering AWS Security Hub findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-stringfilter.html}
 */
export type StringFilter = {
  /**
   * The condition to apply to a string value when filtering Security Hub findings.
   */
  Comparison: StringFilterComparison;
  /**
   * Non-empty string definition.
   * @minLength `1`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityHub::Insight.StringFilterComparison`.
 * The condition to apply to a string value when filtering Security Hub findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-insight-stringfiltercomparison.html}
 */
export type StringFilterComparison =
  | "EQUALS"
  | "PREFIX"
  | "NOT_EQUALS"
  | "PREFIX_NOT_EQUALS";
/**
 * The AWS::SecurityHub::Insight resource represents the AWS Security Hub Insight in your account. An AWS Security Hub insight is a collection of related findings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html}
 */
export class SecurityHubInsight extends $Resource<
  "AWS::SecurityHub::Insight",
  SecurityHubInsightProperties,
  SecurityHubInsightAttributes
> {
  public static readonly Type = "AWS::SecurityHub::Insight";
  constructor(
    logicalId: string,
    properties: SecurityHubInsightProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubInsight.Type, properties, options);
  }
}
