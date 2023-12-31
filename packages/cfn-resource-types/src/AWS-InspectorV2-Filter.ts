import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::InspectorV2::Filter`.
 * Inspector Filter resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html}
 */
export type InspectorV2FilterProperties = {
  /**
   * Findings filter description.
   * @minLength `1`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * Findings filter action.
   */
  FilterAction: FilterAction;
  /**
   * Findings filter criteria.
   */
  FilterCriteria: FilterCriteria;
  /**
   * Findings filter name.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::InspectorV2::Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#aws-resource-inspectorv2-filter-return-values}
 */
export type InspectorV2FilterAttributes = {
  /**
   * Findings filter ARN.
   * @minLength `1`
   * @maxLength `128`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::InspectorV2::Filter.DateFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-datefilter.html}
 */
export type DateFilter = {
  EndInclusive?: number;
  StartInclusive?: number;
};
/**
 * Type definition for `AWS::InspectorV2::Filter.FilterAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filteraction.html}
 */
export type FilterAction = "NONE" | "SUPPRESS";
/**
 * Type definition for `AWS::InspectorV2::Filter.FilterCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html}
 */
export type FilterCriteria = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  AwsAccountId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ComponentId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ComponentType?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Ec2InstanceImageId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Ec2InstanceSubnetId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Ec2InstanceVpcId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  EcrImageArchitecture?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  EcrImageHash?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  EcrImagePushedAt?: DateFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  EcrImageRegistry?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  EcrImageRepositoryName?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  EcrImageTags?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  FindingArn?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  FindingStatus?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  FindingType?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  FirstObservedAt?: DateFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  InspectorScore?: NumberFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  LastObservedAt?: DateFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  NetworkProtocol?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  PortRange?: PortRangeFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  RelatedVulnerabilities?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ResourceId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ResourceTags?: MapFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ResourceType?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Severity?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Title?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  UpdatedAt?: DateFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  VendorSeverity?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  VulnerabilityId?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  VulnerabilitySource?: StringFilter[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  VulnerablePackages?: PackageFilter[];
};
/**
 * Type definition for `AWS::InspectorV2::Filter.MapComparison`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapcomparison.html}
 */
export type MapComparison = "EQUALS";
/**
 * Type definition for `AWS::InspectorV2::Filter.MapFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html}
 */
export type MapFilter = {
  Comparison: MapComparison;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::InspectorV2::Filter.NumberFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-numberfilter.html}
 */
export type NumberFilter = {
  LowerInclusive?: number;
  UpperInclusive?: number;
};
/**
 * Type definition for `AWS::InspectorV2::Filter.PackageFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html}
 */
export type PackageFilter = {
  Architecture?: StringFilter;
  Epoch?: NumberFilter;
  Name?: StringFilter;
  Release?: StringFilter;
  SourceLayerHash?: StringFilter;
  Version?: StringFilter;
};
/**
 * Type definition for `AWS::InspectorV2::Filter.PortRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-portrangefilter.html}
 */
export type PortRangeFilter = {
  /**
   * @min `0`
   * @max `65535`
   */
  BeginInclusive?: number;
  /**
   * @min `0`
   * @max `65535`
   */
  EndInclusive?: number;
};
/**
 * Type definition for `AWS::InspectorV2::Filter.StringComparison`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringcomparison.html}
 */
export type StringComparison = "EQUALS" | "PREFIX" | "NOT_EQUALS";
/**
 * Type definition for `AWS::InspectorV2::Filter.StringFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringfilter.html}
 */
export type StringFilter = {
  Comparison: StringComparison;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::InspectorV2::Filter`.
 * Inspector Filter resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html}
 */
export class InspectorV2Filter extends $Resource<
  "AWS::InspectorV2::Filter",
  InspectorV2FilterProperties,
  InspectorV2FilterAttributes
> {
  public static readonly Type = "AWS::InspectorV2::Filter";
  constructor(
    logicalId: string,
    properties: InspectorV2FilterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, InspectorV2Filter.Type, properties, options);
  }
}
