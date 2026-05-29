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
  AccessAppsNativeDataStore?: CapabilityState;
  Action?: CapabilityState;
  AddOrRunAnomalyDetectionForAnalyses?: CapabilityState;
  AmazonBedrockARSAction?: CapabilityState;
  AmazonBedrockFSAction?: CapabilityState;
  AmazonBedrockKRSAction?: CapabilityState;
  AmazonSThreeAction?: CapabilityState;
  Analysis?: CapabilityState;
  ApproveFlowShareRequests?: CapabilityState;
  Apps?: CapabilityState;
  AsanaAction?: CapabilityState;
  Automate?: CapabilityState;
  BambooHRAction?: CapabilityState;
  BoxAgentAction?: CapabilityState;
  BuildCalculatedFieldWithQ?: CapabilityState;
  CanvaAgentAction?: CapabilityState;
  ChatAgent?: CapabilityState;
  ComprehendAction?: CapabilityState;
  ComprehendMedicalAction?: CapabilityState;
  ConfluenceAction?: CapabilityState;
  CreateAndUpdateAmazonBedrockARSAction?: CapabilityState;
  CreateAndUpdateAmazonBedrockFSAction?: CapabilityState;
  CreateAndUpdateAmazonBedrockKRSAction?: CapabilityState;
  CreateAndUpdateAmazonSThreeAction?: CapabilityState;
  CreateAndUpdateApps?: CapabilityState;
  CreateAndUpdateAsanaAction?: CapabilityState;
  CreateAndUpdateBambooHRAction?: CapabilityState;
  CreateAndUpdateBoxAgentAction?: CapabilityState;
  CreateAndUpdateCanvaAgentAction?: CapabilityState;
  CreateAndUpdateComprehendAction?: CapabilityState;
  CreateAndUpdateComprehendMedicalAction?: CapabilityState;
  CreateAndUpdateConfluenceAction?: CapabilityState;
  CreateAndUpdateDashboardEmailReports?: CapabilityState;
  CreateAndUpdateDataSources?: CapabilityState;
  CreateAndUpdateDatasets?: CapabilityState;
  CreateAndUpdateFactSetAction?: CapabilityState;
  CreateAndUpdateGenericHTTPAction?: CapabilityState;
  CreateAndUpdateGithubAction?: CapabilityState;
  CreateAndUpdateGoogleCalendarAction?: CapabilityState;
  CreateAndUpdateHubspotAction?: CapabilityState;
  CreateAndUpdateHuggingFaceAction?: CapabilityState;
  CreateAndUpdateIntercomAction?: CapabilityState;
  CreateAndUpdateJiraAction?: CapabilityState;
  CreateAndUpdateKnowledgeBases?: CapabilityState;
  CreateAndUpdateLinearAction?: CapabilityState;
  CreateAndUpdateMCPAction?: CapabilityState;
  CreateAndUpdateMSExchangeAction?: CapabilityState;
  CreateAndUpdateMSTeamsAction?: CapabilityState;
  CreateAndUpdateMondayAction?: CapabilityState;
  CreateAndUpdateNewRelicAction?: CapabilityState;
  CreateAndUpdateNotionAction?: CapabilityState;
  CreateAndUpdateOneDriveAction?: CapabilityState;
  CreateAndUpdateOpenAPIAction?: CapabilityState;
  CreateAndUpdatePagerDutyAction?: CapabilityState;
  CreateAndUpdateSAPBillOfMaterialAction?: CapabilityState;
  CreateAndUpdateSAPBusinessPartnerAction?: CapabilityState;
  CreateAndUpdateSAPMaterialStockAction?: CapabilityState;
  CreateAndUpdateSAPPhysicalInventoryAction?: CapabilityState;
  CreateAndUpdateSAPProductMasterDataAction?: CapabilityState;
  CreateAndUpdateSalesforceAction?: CapabilityState;
  CreateAndUpdateSandPGMIAction?: CapabilityState;
  CreateAndUpdateSandPGlobalEnergyAction?: CapabilityState;
  CreateAndUpdateServiceNowAction?: CapabilityState;
  CreateAndUpdateSharePointAction?: CapabilityState;
  CreateAndUpdateSlackAction?: CapabilityState;
  CreateAndUpdateSmartsheetAction?: CapabilityState;
  CreateAndUpdateTextractAction?: CapabilityState;
  CreateAndUpdateThemes?: CapabilityState;
  CreateAndUpdateThresholdAlerts?: CapabilityState;
  CreateAndUpdateZendeskAction?: CapabilityState;
  CreateChatAgents?: CapabilityState;
  CreateDashboardExecutiveSummaryWithQ?: CapabilityState;
  CreateSPICEDataset?: CapabilityState;
  CreateSharedFolders?: CapabilityState;
  CreateSpaces?: CapabilityState;
  Dashboard?: CapabilityState;
  EditVisualWithQ?: CapabilityState;
  ExportToCsv?: CapabilityState;
  ExportToCsvInScheduledReports?: CapabilityState;
  ExportToExcel?: CapabilityState;
  ExportToExcelInScheduledReports?: CapabilityState;
  ExportToPdf?: CapabilityState;
  ExportToPdfInScheduledReports?: CapabilityState;
  Extension?: CapabilityState;
  FactSetAction?: CapabilityState;
  Flow?: CapabilityState;
  GenericHTTPAction?: CapabilityState;
  GithubAction?: CapabilityState;
  GoogleCalendarAction?: CapabilityState;
  HubspotAction?: CapabilityState;
  HuggingFaceAction?: CapabilityState;
  IncludeContentInScheduledReportsEmail?: CapabilityState;
  IntercomAction?: CapabilityState;
  InvokeAppsAIInference?: CapabilityState;
  JiraAction?: CapabilityState;
  KnowledgeBase?: CapabilityState;
  LinearAction?: CapabilityState;
  MCPAction?: CapabilityState;
  MSExchangeAction?: CapabilityState;
  MSTeamsAction?: CapabilityState;
  ManageSharedFolders?: CapabilityState;
  MondayAction?: CapabilityState;
  NewRelicAction?: CapabilityState;
  NotionAction?: CapabilityState;
  OneDriveAction?: CapabilityState;
  OpenAPIAction?: CapabilityState;
  PagerDutyAction?: CapabilityState;
  PerformFlowUiTask?: CapabilityState;
  PrintReports?: CapabilityState;
  PublishWithoutApproval?: CapabilityState;
  RenameSharedFolders?: CapabilityState;
  Research?: CapabilityState;
  SAPBillOfMaterialAction?: CapabilityState;
  SAPBusinessPartnerAction?: CapabilityState;
  SAPMaterialStockAction?: CapabilityState;
  SAPPhysicalInventoryAction?: CapabilityState;
  SAPProductMasterDataAction?: CapabilityState;
  SalesforceAction?: CapabilityState;
  SandPGMIAction?: CapabilityState;
  SandPGlobalEnergyAction?: CapabilityState;
  ServiceNowAction?: CapabilityState;
  ShareAmazonBedrockARSAction?: CapabilityState;
  ShareAmazonBedrockFSAction?: CapabilityState;
  ShareAmazonBedrockKRSAction?: CapabilityState;
  ShareAmazonSThreeAction?: CapabilityState;
  ShareAnalyses?: CapabilityState;
  ShareApps?: CapabilityState;
  ShareAsanaAction?: CapabilityState;
  ShareBambooHRAction?: CapabilityState;
  ShareBoxAgentAction?: CapabilityState;
  ShareCanvaAgentAction?: CapabilityState;
  ShareChatAgents?: CapabilityState;
  ShareComprehendAction?: CapabilityState;
  ShareComprehendMedicalAction?: CapabilityState;
  ShareConfluenceAction?: CapabilityState;
  ShareDashboards?: CapabilityState;
  ShareDataSources?: CapabilityState;
  ShareDatasets?: CapabilityState;
  ShareFactSetAction?: CapabilityState;
  ShareGenericHTTPAction?: CapabilityState;
  ShareGithubAction?: CapabilityState;
  ShareGoogleCalendarAction?: CapabilityState;
  ShareHubspotAction?: CapabilityState;
  ShareHuggingFaceAction?: CapabilityState;
  ShareIntercomAction?: CapabilityState;
  ShareJiraAction?: CapabilityState;
  ShareKnowledgeBases?: CapabilityState;
  ShareLinearAction?: CapabilityState;
  ShareMCPAction?: CapabilityState;
  ShareMSExchangeAction?: CapabilityState;
  ShareMSTeamsAction?: CapabilityState;
  ShareMondayAction?: CapabilityState;
  ShareNewRelicAction?: CapabilityState;
  ShareNotionAction?: CapabilityState;
  ShareOneDriveAction?: CapabilityState;
  ShareOpenAPIAction?: CapabilityState;
  SharePagerDutyAction?: CapabilityState;
  SharePointAction?: CapabilityState;
  ShareSAPBillOfMaterialAction?: CapabilityState;
  ShareSAPBusinessPartnerAction?: CapabilityState;
  ShareSAPMaterialStockAction?: CapabilityState;
  ShareSAPPhysicalInventoryAction?: CapabilityState;
  ShareSAPProductMasterDataAction?: CapabilityState;
  ShareSalesforceAction?: CapabilityState;
  ShareSandPGMIAction?: CapabilityState;
  ShareSandPGlobalEnergyAction?: CapabilityState;
  ShareServiceNowAction?: CapabilityState;
  ShareSharePointAction?: CapabilityState;
  ShareSlackAction?: CapabilityState;
  ShareSmartsheetAction?: CapabilityState;
  ShareSpaces?: CapabilityState;
  ShareTextractAction?: CapabilityState;
  ShareZendeskAction?: CapabilityState;
  SlackAction?: CapabilityState;
  SmartsheetAction?: CapabilityState;
  Space?: CapabilityState;
  SubscribeDashboardEmailReports?: CapabilityState;
  TextractAction?: CapabilityState;
  Topic?: CapabilityState;
  UseAgentWebSearch?: CapabilityState;
  UseAmazonBedrockARSAction?: CapabilityState;
  UseAmazonBedrockFSAction?: CapabilityState;
  UseAmazonBedrockKRSAction?: CapabilityState;
  UseAmazonSThreeAction?: CapabilityState;
  UseAsanaAction?: CapabilityState;
  UseBambooHRAction?: CapabilityState;
  UseBedrockModels?: CapabilityState;
  UseBoxAgentAction?: CapabilityState;
  UseCanvaAgentAction?: CapabilityState;
  UseComprehendAction?: CapabilityState;
  UseComprehendMedicalAction?: CapabilityState;
  UseConfluenceAction?: CapabilityState;
  UseFactSetAction?: CapabilityState;
  UseGenericHTTPAction?: CapabilityState;
  UseGithubAction?: CapabilityState;
  UseGoogleCalendarAction?: CapabilityState;
  UseHubspotAction?: CapabilityState;
  UseHuggingFaceAction?: CapabilityState;
  UseIntercomAction?: CapabilityState;
  UseJiraAction?: CapabilityState;
  UseLinearAction?: CapabilityState;
  UseMCPAction?: CapabilityState;
  UseMSExchangeAction?: CapabilityState;
  UseMSTeamsAction?: CapabilityState;
  UseMondayAction?: CapabilityState;
  UseNewRelicAction?: CapabilityState;
  UseNotionAction?: CapabilityState;
  UseOneDriveAction?: CapabilityState;
  UseOpenAPIAction?: CapabilityState;
  UsePagerDutyAction?: CapabilityState;
  UseSAPBillOfMaterialAction?: CapabilityState;
  UseSAPBusinessPartnerAction?: CapabilityState;
  UseSAPMaterialStockAction?: CapabilityState;
  UseSAPPhysicalInventoryAction?: CapabilityState;
  UseSAPProductMasterDataAction?: CapabilityState;
  UseSalesforceAction?: CapabilityState;
  UseSandPGMIAction?: CapabilityState;
  UseSandPGlobalEnergyAction?: CapabilityState;
  UseServiceNowAction?: CapabilityState;
  UseSharePointAction?: CapabilityState;
  UseSlackAction?: CapabilityState;
  UseSmartsheetAction?: CapabilityState;
  UseTextractAction?: CapabilityState;
  UseZendeskAction?: CapabilityState;
  ViewAccountSPICECapacity?: CapabilityState;
  ZendeskAction?: CapabilityState;
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
