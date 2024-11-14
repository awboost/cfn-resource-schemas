import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::FIS::ExperimentTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html}
 */
export type FISExperimentTemplateProperties = {
  /**
   * The actions for the experiment.
   */
  Actions?: ExperimentTemplateActionMap;
  /**
   * A description for the experiment template.
   * @maxLength `512`
   */
  Description: string;
  ExperimentOptions?: ExperimentTemplateExperimentOptions;
  ExperimentReportConfiguration?: ExperimentTemplateExperimentReportConfiguration;
  LogConfiguration?: ExperimentTemplateLogConfiguration;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
   * @maxLength `1224`
   */
  RoleArn: string;
  /**
   * One or more stop conditions.
   */
  StopConditions: ExperimentTemplateStopCondition[];
  Tags: Record<string, string>;
  /**
   * The targets for the experiment.
   */
  Targets: ExperimentTemplateTargetMap;
};
/**
 * Attribute type definition for `AWS::FIS::ExperimentTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#aws-resource-fis-experimenttemplate-return-values}
 */
export type FISExperimentTemplateAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.CloudWatchDashboard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-cloudwatchdashboard.html}
 */
export type CloudWatchDashboard = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  DashboardIdentifier: string;
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateAction`.
 * Specifies an action for the experiment template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html}
 */
export type ExperimentTemplateAction = {
  /**
   * The ID of the action.
   * @maxLength `64`
   */
  ActionId: string;
  /**
   * A description for the action.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The parameters for the action, if applicable.
   */
  Parameters?: Record<string, string>;
  /**
   * The names of the actions that must be completed before the current action starts.
   */
  StartAfter?: string[];
  /**
   * One or more targets for the action.
   */
  Targets?: Record<string, string>;
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateActionMap`.
 * The actions for the experiment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateactionmap.html}
 */
export type ExperimentTemplateActionMap = Record<
  string,
  ExperimentTemplateAction
>;
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateExperimentOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateexperimentoptions.html}
 */
export type ExperimentTemplateExperimentOptions = {
  /**
   * The account targeting setting for the experiment template.
   */
  AccountTargeting?: "multi-account" | "single-account";
  /**
   * The target resolution failure mode for the experiment template.
   */
  EmptyTargetResolutionMode?: "fail" | "skip";
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateExperimentReportConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateexperimentreportconfiguration.html}
 */
export type ExperimentTemplateExperimentReportConfiguration = {
  DataSources: {
    CloudWatchDashboards?: CloudWatchDashboard[];
  };
  Outputs: {
    ExperimentReportS3Configuration: {
      /**
       * @minLength `3`
       * @maxLength `63`
       */
      BucketName: string;
      /**
       * @minLength `1`
       * @maxLength `1024`
       */
      Prefix?: string;
    };
  };
  PostExperimentDuration?: string;
  PreExperimentDuration?: string;
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateLogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html}
 */
export type ExperimentTemplateLogConfiguration = {
  CloudWatchLogsConfiguration?: {
    /**
     * @minLength `20`
     * @maxLength `2048`
     */
    LogGroupArn: string;
  };
  /**
   * @min `1`
   */
  LogSchemaVersion: number;
  S3Configuration?: {
    /**
     * @minLength `3`
     * @maxLength `63`
     */
    BucketName: string;
    /**
     * @minLength `1`
     * @maxLength `1024`
     */
    Prefix?: string;
  };
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateStopCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html}
 */
export type ExperimentTemplateStopCondition = {
  /**
   * @maxLength `64`
   */
  Source: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateTarget`.
 * Specifies a target for an experiment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html}
 */
export type ExperimentTemplateTarget = {
  Filters?: ExperimentTemplateTargetFilter[];
  Parameters?: Record<string, string>;
  /**
   * The Amazon Resource Names (ARNs) of the target resources.
   */
  ResourceArns?: string[];
  ResourceTags?: Record<string, string>;
  /**
   * The AWS resource type. The resource type must be supported for the specified action.
   * @maxLength `64`
   */
  ResourceType: string;
  /**
   * Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.
   * @maxLength `64`
   */
  SelectionMode: string;
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateTargetFilter`.
 * Describes a filter used for the target resource input in an experiment template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html}
 */
export type ExperimentTemplateTargetFilter = {
  /**
   * The attribute path for the filter.
   * @maxLength `256`
   */
  Path: string;
  /**
   * The attribute values for the filter.
   */
  Values: string[];
};
/**
 * Type definition for `AWS::FIS::ExperimentTemplate.ExperimentTemplateTargetMap`.
 * The targets for the experiment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetmap.html}
 */
export type ExperimentTemplateTargetMap = Record<
  string,
  ExperimentTemplateTarget
>;
/**
 * Resource schema for AWS::FIS::ExperimentTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html}
 */
export class FISExperimentTemplate extends $Resource<
  "AWS::FIS::ExperimentTemplate",
  FISExperimentTemplateProperties,
  FISExperimentTemplateAttributes
> {
  public static readonly Type = "AWS::FIS::ExperimentTemplate";
  constructor(
    logicalId: string,
    properties: FISExperimentTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FISExperimentTemplate.Type, properties, options);
  }
}
