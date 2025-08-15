import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::InspectorV2::CodeSecurityIntegration`.
 * Inspector CodeSecurityIntegration resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityintegration.html}
 */
export type InspectorV2CodeSecurityIntegrationProperties = {
  /**
   * Create Integration Details
   */
  CreateIntegrationDetails?: CreateDetails;
  /**
   * Code Security Integration name
   * @minLength `1`
   * @maxLength `60`
   * @pattern `^[a-zA-Z0-9-_$:.]*$`
   */
  Name?: string;
  Tags?: TagMap;
  /**
   * Integration Type
   */
  Type?: IntegrationType;
  /**
   * Update Integration Details
   */
  UpdateIntegrationDetails?: UpdateDetails;
};
/**
 * Attribute type definition for `AWS::InspectorV2::CodeSecurityIntegration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityintegration.html#aws-resource-inspectorv2-codesecurityintegration-return-values}
 */
export type InspectorV2CodeSecurityIntegrationAttributes = {
  /**
   * Code Security Integration ARN
   * @pattern `^arn:(aws[a-zA-Z-]*)?:inspector2:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:codesecurity-integration/[a-f0-9-]{36}$`
   */
  Arn: string;
  /**
   * Authorization URL for OAuth flow
   * @pattern `^https://[-a-zA-Z0-9()@:%_+.~#?&//=]{1,1024}$`
   */
  AuthorizationUrl: string;
  /**
   * Creation timestamp
   */
  CreatedAt: string;
  /**
   * Last update timestamp
   */
  LastUpdatedAt: string;
  /**
   * Integration Status
   */
  Status: IntegrationStatus;
  /**
   * Reason for the current status
   */
  StatusReason: string;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.CreateDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-createdetails.html}
 */
export type CreateDetails = {
  gitlabSelfManaged: CreateGitLabSelfManagedIntegrationDetail;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.CreateGitLabSelfManagedIntegrationDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-creategitlabselfmanagedintegrationdetail.html}
 */
export type CreateGitLabSelfManagedIntegrationDetail = {
  accessToken: string;
  /**
   * @pattern `^https://[-a-zA-Z0-9()@:%_+.~#?&//=]{1,1024}$`
   */
  instanceUrl: string;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.IntegrationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-integrationstatus.html}
 */
export type IntegrationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "ACTIVE"
  | "INACTIVE"
  | "DISABLING";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.IntegrationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-integrationtype.html}
 */
export type IntegrationType = "GITLAB_SELF_MANAGED" | "GITHUB";
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.UpdateDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-updatedetails.html}
 */
export type UpdateDetails = {
  github?: UpdateGitHubIntegrationDetail;
  gitlabSelfManaged?: UpdateGitLabSelfManagedIntegrationDetail;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.UpdateGitHubIntegrationDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-updategithubintegrationdetail.html}
 */
export type UpdateGitHubIntegrationDetail = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  code: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  installationId: string;
};
/**
 * Type definition for `AWS::InspectorV2::CodeSecurityIntegration.UpdateGitLabSelfManagedIntegrationDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-codesecurityintegration-updategitlabselfmanagedintegrationdetail.html}
 */
export type UpdateGitLabSelfManagedIntegrationDetail = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  authCode: string;
};
/**
 * Resource type definition for `AWS::InspectorV2::CodeSecurityIntegration`.
 * Inspector CodeSecurityIntegration resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityintegration.html}
 */
export class InspectorV2CodeSecurityIntegration extends $Resource<
  "AWS::InspectorV2::CodeSecurityIntegration",
  InspectorV2CodeSecurityIntegrationProperties,
  InspectorV2CodeSecurityIntegrationAttributes
> {
  public static readonly Type = "AWS::InspectorV2::CodeSecurityIntegration";
  constructor(
    logicalId: string,
    properties: InspectorV2CodeSecurityIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      InspectorV2CodeSecurityIntegration.Type,
      properties,
      options,
    );
  }
}
