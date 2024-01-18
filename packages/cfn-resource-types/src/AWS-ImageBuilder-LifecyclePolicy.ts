import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::LifecyclePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html}
 */
export type ImageBuilderLifecyclePolicyProperties = {
  /**
   * The description of the lifecycle policy.
   */
  Description?: string;
  /**
   * The execution role of the lifecycle policy.
   */
  ExecutionRole: string;
  /**
   * The name of the lifecycle policy.
   */
  Name: string;
  /**
   * The policy details of the lifecycle policy.
   */
  PolicyDetails: PolicyDetail[];
  /**
   * The resource selection of the lifecycle policy.
   */
  ResourceSelection: ResourceSelection;
  /**
   * The resource type of the lifecycle policy.
   */
  ResourceType: "AMI_IMAGE" | "CONTAINER_IMAGE";
  /**
   * The status of the lifecycle policy.
   */
  Status?: "DISABLED" | "ENABLED";
  /**
   * The tags associated with the lifecycle policy.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::LifecyclePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#aws-resource-imagebuilder-lifecyclepolicy-return-values}
 */
export type ImageBuilderLifecyclePolicyAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.Action`.
 * The action of the policy detail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-action.html}
 */
export type Action = {
  /**
   * The included resources of the policy detail.
   */
  IncludeResources?: IncludeResources;
  /**
   * The action type of the policy detail.
   */
  Type: "DELETE" | "DEPRECATE" | "DISABLE";
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.AmiExclusionRules`.
 * The AMI exclusion rules for the policy detail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html}
 */
export type AmiExclusionRules = {
  /**
   * Use to apply lifecycle policy actions on whether the AMI is public.
   */
  IsPublic?: boolean;
  /**
   * Use to apply lifecycle policy actions on AMIs launched before a certain time.
   */
  LastLaunched?: LastLaunched;
  /**
   * Use to apply lifecycle policy actions on AMIs distributed to a set of regions.
   */
  Regions?: string[];
  /**
   * Use to apply lifecycle policy actions on AMIs shared with a set of regions.
   */
  SharedAccounts?: string[];
  /**
   * The AMIs to select by tag.
   */
  TagMap?: Record<string, string>;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.ExclusionRules`.
 * The exclusion rules to apply of the policy detail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-exclusionrules.html}
 */
export type ExclusionRules = {
  /**
   * The AMI exclusion rules for the policy detail.
   */
  Amis?: AmiExclusionRules;
  /**
   * The Image Builder tags to filter on.
   */
  TagMap?: Record<string, string>;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.Filter`.
 * The filters to apply of the policy detail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-filter.html}
 */
export type Filter = {
  /**
   * The minimum number of Image Builder resources to retain.
   */
  RetainAtLeast?: number;
  /**
   * The filter type.
   */
  Type: "AGE" | "COUNT";
  /**
   * The value's time unit.
   */
  Unit?: TimeUnit;
  /**
   * The filter value.
   */
  Value: number;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.IncludeResources`.
 * The included resources of the policy detail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-includeresources.html}
 */
export type IncludeResources = {
  /**
   * Use to configure lifecycle actions on AMIs.
   */
  Amis?: boolean;
  /**
   * Use to configure lifecycle actions on containers.
   */
  Containers?: boolean;
  /**
   * Use to configure lifecycle actions on snapshots.
   */
  Snapshots?: boolean;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.LastLaunched`.
 * The last launched time of a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-lastlaunched.html}
 */
export type LastLaunched = {
  /**
   * The value's time unit.
   */
  Unit: TimeUnit;
  /**
   * The last launched value.
   */
  Value: number;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.PolicyDetail`.
 * The policy detail of the lifecycle policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-policydetail.html}
 */
export type PolicyDetail = {
  /**
   * The action of the policy detail.
   */
  Action: Action;
  /**
   * The exclusion rules to apply of the policy detail.
   */
  ExclusionRules?: ExclusionRules;
  /**
   * The filters to apply of the policy detail.
   */
  Filter: Filter;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.RecipeSelection`.
 * The recipe to apply the lifecycle policy for.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-recipeselection.html}
 */
export type RecipeSelection = {
  /**
   * The recipe name.
   */
  Name: string;
  /**
   * The recipe version.
   */
  SemanticVersion: string;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.ResourceSelection`.
 * The resource selection for the lifecycle policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-resourceselection.html}
 */
export type ResourceSelection = {
  /**
   * The recipes to select.
   */
  Recipes?: RecipeSelection[];
  /**
   * The Image Builder resources to select by tag.
   */
  TagMap?: Record<string, string>;
};
/**
 * Type definition for `AWS::ImageBuilder::LifecyclePolicy.TimeUnit`.
 * A time unit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-lifecyclepolicy-timeunit.html}
 */
export type TimeUnit = "DAYS" | "WEEKS" | "MONTHS" | "YEARS";
/**
 * Resource schema for AWS::ImageBuilder::LifecyclePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html}
 */
export class ImageBuilderLifecyclePolicy extends $Resource<
  "AWS::ImageBuilder::LifecyclePolicy",
  ImageBuilderLifecyclePolicyProperties,
  ImageBuilderLifecyclePolicyAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::LifecyclePolicy";
  constructor(
    logicalId: string,
    properties: ImageBuilderLifecyclePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderLifecyclePolicy.Type, properties, options);
  }
}
