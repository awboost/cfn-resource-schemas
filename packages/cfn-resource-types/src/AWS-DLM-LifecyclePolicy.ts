import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DLM::LifecyclePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html}
 */
export type DLMLifecyclePolicyProperties = {
  CopyTags?: boolean;
  CreateInterval?: number;
  CrossRegionCopyTargets?: CrossRegionCopyTargets;
  DefaultPolicy?: string;
  Description?: string;
  Exclusions?: Exclusions;
  ExecutionRoleArn?: string;
  ExtendDeletion?: boolean;
  PolicyDetails?: PolicyDetails;
  RetainInterval?: number;
  State?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DLM::LifecyclePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html#aws-resource-dlm-lifecyclepolicy-return-values}
 */
export type DLMLifecyclePolicyAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-action.html}
 */
export type Action = {
  CrossRegionCopy: CrossRegionCopyAction[];
  Name: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.ArchiveRetainRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiveretainrule.html}
 */
export type ArchiveRetainRule = {
  RetentionArchiveTier: RetentionArchiveTier;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.ArchiveRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiverule.html}
 */
export type ArchiveRule = {
  RetainRule: ArchiveRetainRule;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.CreateRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html}
 */
export type CreateRule = {
  CronExpression?: string;
  Interval?: number;
  IntervalUnit?: string;
  Location?: string;
  Scripts?: Script[];
  Times?: string[];
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.CrossRegionCopyAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html}
 */
export type CrossRegionCopyAction = {
  EncryptionConfiguration: EncryptionConfiguration;
  RetainRule?: CrossRegionCopyRetainRule;
  Target: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.CrossRegionCopyDeprecateRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.html}
 */
export type CrossRegionCopyDeprecateRule = {
  Interval: number;
  IntervalUnit: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.CrossRegionCopyRetainRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.html}
 */
export type CrossRegionCopyRetainRule = {
  Interval: number;
  IntervalUnit: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.CrossRegionCopyRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html}
 */
export type CrossRegionCopyRule = {
  CmkArn?: string;
  CopyTags?: boolean;
  DeprecateRule?: CrossRegionCopyDeprecateRule;
  Encrypted: boolean;
  RetainRule?: CrossRegionCopyRetainRule;
  Target?: string;
  TargetRegion?: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.CrossRegionCopyTargets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopytargets.html}
 */
export type CrossRegionCopyTargets = Record<string, any>;
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.DeprecateRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html}
 */
export type DeprecateRule = {
  Count?: number;
  Interval?: number;
  IntervalUnit?: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.EncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  CmkArn?: string;
  Encrypted: boolean;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.EventParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html}
 */
export type EventParameters = {
  DescriptionRegex?: string;
  EventType: string;
  SnapshotOwner: string[];
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.EventSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventsource.html}
 */
export type EventSource = {
  Parameters?: EventParameters;
  Type: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.ExcludeTags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-excludetags.html}
 */
export type ExcludeTags = Record<string, any>;
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.ExcludeVolumeTypesList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-excludevolumetypeslist.html}
 */
export type ExcludeVolumeTypesList = Record<string, any>;
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.Exclusions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-exclusions.html}
 */
export type Exclusions = {
  ExcludeBootVolumes?: boolean;
  ExcludeTags?: ExcludeTags;
  ExcludeVolumeTypes?: ExcludeVolumeTypesList;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.FastRestoreRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html}
 */
export type FastRestoreRule = {
  AvailabilityZones?: string[];
  Count?: number;
  Interval?: number;
  IntervalUnit?: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.Parameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html}
 */
export type Parameters = {
  ExcludeBootVolume?: boolean;
  ExcludeDataVolumeTags?: Tag[];
  NoReboot?: boolean;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.PolicyDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html}
 */
export type PolicyDetails = {
  Actions?: Action[];
  CopyTags?: boolean;
  CreateInterval?: number;
  CrossRegionCopyTargets?: CrossRegionCopyTargets;
  EventSource?: EventSource;
  Exclusions?: Exclusions;
  ExtendDeletion?: boolean;
  Parameters?: Parameters;
  PolicyLanguage?: string;
  PolicyType?: string;
  ResourceLocations?: string[];
  ResourceType?: string;
  ResourceTypes?: string[];
  RetainInterval?: number;
  Schedules?: Schedule[];
  TargetTags?: Tag[];
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.RetainRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html}
 */
export type RetainRule = {
  Count?: number;
  Interval?: number;
  IntervalUnit?: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.RetentionArchiveTier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html}
 */
export type RetentionArchiveTier = {
  Count?: number;
  Interval?: number;
  IntervalUnit?: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html}
 */
export type Schedule = {
  ArchiveRule?: ArchiveRule;
  CopyTags?: boolean;
  CreateRule?: CreateRule;
  CrossRegionCopyRules?: CrossRegionCopyRule[];
  DeprecateRule?: DeprecateRule;
  FastRestoreRule?: FastRestoreRule;
  Name?: string;
  RetainRule?: RetainRule;
  ShareRules?: ShareRule[];
  TagsToAdd?: Tag[];
  VariableTags?: Tag[];
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.Script`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-script.html}
 */
export type Script = {
  ExecuteOperationOnScriptFailure?: boolean;
  ExecutionHandler?: string;
  ExecutionHandlerService?: string;
  ExecutionTimeout?: number;
  MaximumRetryCount?: number;
  Stages?: string[];
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.ShareRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html}
 */
export type ShareRule = {
  TargetAccounts?: string[];
  UnshareInterval?: number;
  UnshareIntervalUnit?: string;
};
/**
 * Type definition for `AWS::DLM::LifecyclePolicy.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DLM::LifecyclePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html}
 */
export class DLMLifecyclePolicy extends $Resource<
  "AWS::DLM::LifecyclePolicy",
  DLMLifecyclePolicyProperties,
  DLMLifecyclePolicyAttributes
> {
  public static readonly Type = "AWS::DLM::LifecyclePolicy";
  constructor(
    logicalId: string,
    properties: DLMLifecyclePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DLMLifecyclePolicy.Type, properties, options);
  }
}
