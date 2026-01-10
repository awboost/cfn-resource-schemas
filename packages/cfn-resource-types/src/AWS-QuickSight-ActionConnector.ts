import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::ActionConnector Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-actionconnector.html}
 */
export type QuickSightActionConnectorProperties = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ActionConnectorId: string;
  AuthenticationConfig?: AuthConfig;
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[A-Za-z0-9 _.,!?-]*$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9](?:[\w- ]*[A-Za-z0-9])?$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type: ActionConnectorType;
  VpcConnectionArn?: string;
};
/**
 * Attribute type definition for `AWS::QuickSight::ActionConnector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-actionconnector.html#aws-resource-quicksight-actionconnector-return-values}
 */
export type QuickSightActionConnectorAttributes = {
  Arn: string;
  CreatedTime: string;
  /**
   * @maxLength `100`
   */
  EnabledActions: string[];
  LastUpdatedTime: string;
  Status: ResourceStatus;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ActionConnectorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-actionconnectortype.html}
 */
export type ActionConnectorType =
  | "GENERIC_HTTP"
  | "SERVICENOW_NOW_PLATFORM"
  | "SALESFORCE_CRM"
  | "MICROSOFT_OUTLOOK"
  | "PAGERDUTY_ADVANCE"
  | "JIRA_CLOUD"
  | "ATLASSIAN_CONFLUENCE"
  | "AMAZON_S3"
  | "AMAZON_BEDROCK_AGENT_RUNTIME"
  | "AMAZON_BEDROCK_RUNTIME"
  | "AMAZON_BEDROCK_DATA_AUTOMATION_RUNTIME"
  | "AMAZON_TEXTRACT"
  | "AMAZON_COMPREHEND"
  | "AMAZON_COMPREHEND_MEDICAL"
  | "MICROSOFT_ONEDRIVE"
  | "MICROSOFT_SHAREPOINT"
  | "MICROSOFT_TEAMS"
  | "SAP_BUSINESSPARTNER"
  | "SAP_PRODUCTMASTERDATA"
  | "SAP_PHYSICALINVENTORY"
  | "SAP_BILLOFMATERIALS"
  | "SAP_MATERIALSTOCK"
  | "ZENDESK_SUITE"
  | "SMARTSHEET"
  | "SLACK"
  | "ASANA"
  | "BAMBOO_HR";
/**
 * Type definition for `AWS::QuickSight::ActionConnector.APIKeyConnectionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-apikeyconnectionmetadata.html}
 */
export type APIKeyConnectionMetadata = {
  ApiKey: string;
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  BaseEndpoint: string;
  /**
   * @pattern `^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$`
   */
  Email?: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.AuthConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-authconfig.html}
 */
export type AuthConfig = {
  AuthenticationMetadata: AuthenticationMetadata;
  AuthenticationType: ConnectionAuthType;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.AuthenticationMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-authenticationmetadata.html}
 */
export type AuthenticationMetadata =
  | {
      AuthorizationCodeGrantMetadata: AuthorizationCodeGrantMetadata;
    }
  | {
      ClientCredentialsGrantMetadata: ClientCredentialsGrantMetadata;
    }
  | {
      BasicAuthConnectionMetadata: BasicAuthConnectionMetadata;
    }
  | {
      ApiKeyConnectionMetadata: APIKeyConnectionMetadata;
    }
  | {
      NoneConnectionMetadata: NoneConnectionMetadata;
    }
  | {
      IamConnectionMetadata: IAMConnectionMetadata;
    };
/**
 * Type definition for `AWS::QuickSight::ActionConnector.AuthorizationCodeGrantCredentialsDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-authorizationcodegrantcredentialsdetails.html}
 */
export type AuthorizationCodeGrantCredentialsDetails = {
  AuthorizationCodeGrantDetails: AuthorizationCodeGrantDetails;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.AuthorizationCodeGrantCredentialsSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-authorizationcodegrantcredentialssource.html}
 */
export type AuthorizationCodeGrantCredentialsSource = "PLAIN_CREDENTIALS";
/**
 * Type definition for `AWS::QuickSight::ActionConnector.AuthorizationCodeGrantDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-authorizationcodegrantdetails.html}
 */
export type AuthorizationCodeGrantDetails = {
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  AuthorizationEndpoint: string;
  /**
   * @maxLength `1024`
   */
  ClientId: string;
  /**
   * @maxLength `2048`
   */
  ClientSecret: string;
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  TokenEndpoint: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.AuthorizationCodeGrantMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-authorizationcodegrantmetadata.html}
 */
export type AuthorizationCodeGrantMetadata = {
  AuthorizationCodeGrantCredentialsDetails?: AuthorizationCodeGrantCredentialsDetails;
  AuthorizationCodeGrantCredentialsSource?: AuthorizationCodeGrantCredentialsSource;
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  BaseEndpoint: string;
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  RedirectUrl: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.BasicAuthConnectionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-basicauthconnectionmetadata.html}
 */
export type BasicAuthConnectionMetadata = {
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  BaseEndpoint: string;
  Password: string;
  Username: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ClientCredentialsDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-clientcredentialsdetails.html}
 */
export type ClientCredentialsDetails = {
  ClientCredentialsGrantDetails: ClientCredentialsGrantDetails;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ClientCredentialsGrantDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-clientcredentialsgrantdetails.html}
 */
export type ClientCredentialsGrantDetails = {
  /**
   * @maxLength `1024`
   */
  ClientId: string;
  /**
   * @maxLength `2048`
   */
  ClientSecret: string;
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  TokenEndpoint: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ClientCredentialsGrantMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-clientcredentialsgrantmetadata.html}
 */
export type ClientCredentialsGrantMetadata = {
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  BaseEndpoint: string;
  ClientCredentialsDetails?: ClientCredentialsDetails;
  ClientCredentialsSource?: ClientCredentialsSource;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ClientCredentialsSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-clientcredentialssource.html}
 */
export type ClientCredentialsSource = "PLAIN_CREDENTIALS";
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ConnectionAuthType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-connectionauthtype.html}
 */
export type ConnectionAuthType =
  | "BASIC"
  | "API_KEY"
  | "OAUTH2_CLIENT_CREDENTIALS"
  | "NONE"
  | "IAM"
  | "OAUTH2_AUTHORIZATION_CODE";
/**
 * Type definition for `AWS::QuickSight::ActionConnector.IAMConnectionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-iamconnectionmetadata.html}
 */
export type IAMConnectionMetadata = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.NoneConnectionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-noneconnectionmetadata.html}
 */
export type NoneConnectionMetadata = {
  /**
   * @minLength `1`
   * @maxLength `8192`
   * @pattern `^https://.*`
   */
  BaseEndpoint: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-resourcepermission.html}
 */
export type ResourcePermission = {
  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @minLength `1`
   * @maxLength `20`
   */
  Actions: string[];
  /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
                following:</p>
             <ul>
                <li>
                   <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     */
  Principal: string;
};
/**
 * Type definition for `AWS::QuickSight::ActionConnector.ResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-resourcestatus.html}
 */
export type ResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "PENDING_UPDATE"
  | "DELETED";
/**
 * Type definition for `AWS::QuickSight::ActionConnector.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-actionconnector-tag.html}
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
 * Definition of the AWS::QuickSight::ActionConnector Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-actionconnector.html}
 */
export class QuickSightActionConnector extends $Resource<
  "AWS::QuickSight::ActionConnector",
  QuickSightActionConnectorProperties,
  QuickSightActionConnectorAttributes
> {
  public static readonly Type = "AWS::QuickSight::ActionConnector";
  constructor(
    logicalId: string,
    properties: QuickSightActionConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightActionConnector.Type, properties, options);
  }
}
