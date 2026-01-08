import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::CustomPermissions Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html}
 */
export type QuickSightCustomPermissionsProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId: string;
  Capabilities?: Capabilities;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9+=,.@_-]+$`
   */
  CustomPermissionsName: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QuickSight::CustomPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#aws-resource-quicksight-custompermissions-return-values}
 */
export type QuickSightCustomPermissionsAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::QuickSight::CustomPermissions.Capabilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-custompermissions-capabilities.html}
 */
export type Capabilities = {
  Action?: CapabilityState;
  AddOrRunAnomalyDetectionForAnalyses?: CapabilityState;
  Analysis?: CapabilityState;
  Automate?: CapabilityState;
  ChatAgent?: CapabilityState;
  CreateAndUpdateDashboardEmailReports?: CapabilityState;
  CreateAndUpdateDataSources?: CapabilityState;
  CreateAndUpdateDatasets?: CapabilityState;
  CreateAndUpdateThemes?: CapabilityState;
  CreateAndUpdateThresholdAlerts?: CapabilityState;
  CreateChatAgents?: CapabilityState;
  CreateSPICEDataset?: CapabilityState;
  CreateSharedFolders?: CapabilityState;
  Dashboard?: CapabilityState;
  ExportToCsv?: CapabilityState;
  ExportToCsvInScheduledReports?: CapabilityState;
  ExportToExcel?: CapabilityState;
  ExportToExcelInScheduledReports?: CapabilityState;
  ExportToPdf?: CapabilityState;
  ExportToPdfInScheduledReports?: CapabilityState;
  Flow?: CapabilityState;
  IncludeContentInScheduledReportsEmail?: CapabilityState;
  KnowledgeBase?: CapabilityState;
  PerformFlowUiTask?: CapabilityState;
  PrintReports?: CapabilityState;
  PublishWithoutApproval?: CapabilityState;
  RenameSharedFolders?: CapabilityState;
  Research?: CapabilityState;
  ShareAnalyses?: CapabilityState;
  ShareDashboards?: CapabilityState;
  ShareDataSources?: CapabilityState;
  ShareDatasets?: CapabilityState;
  Space?: CapabilityState;
  SubscribeDashboardEmailReports?: CapabilityState;
  UseAgentWebSearch?: CapabilityState;
  UseBedrockModels?: CapabilityState;
  ViewAccountSPICECapacity?: CapabilityState;
};
/**
 * Type definition for `AWS::QuickSight::CustomPermissions.CapabilityState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-custompermissions-capabilitystate.html}
 */
export type CapabilityState = "DENY";
/**
 * Type definition for `AWS::QuickSight::CustomPermissions.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-custompermissions-tag.html}
 */
export type Tag = {
  /**
   * <p>Tag key.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>Tag value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of the AWS::QuickSight::CustomPermissions Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html}
 */
export class QuickSightCustomPermissions extends $Resource<
  "AWS::QuickSight::CustomPermissions",
  QuickSightCustomPermissionsProperties,
  QuickSightCustomPermissionsAttributes
> {
  public static readonly Type = "AWS::QuickSight::CustomPermissions";
  constructor(
    logicalId: string,
    properties: QuickSightCustomPermissionsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightCustomPermissions.Type, properties, options);
  }
}
