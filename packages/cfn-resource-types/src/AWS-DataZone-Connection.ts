import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::Connection`.
 * Connections enables users to connect their DataZone resources (domains, projects, and environments) to external resources/services (data, compute, etc)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html}
 */
export type DataZoneConnectionProperties = {
  /**
   * AWS Location of project
   */
  AwsLocation?: AwsLocation;
  /**
   * The description of the connection.
   * @maxLength `128`
   * @pattern `^[\S\s]*$`
   */
  Description?: string;
  /**
   * The identifier of the domain in which the connection is created.
   * @pattern `^dzd[_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The identifier of the environment in which the connection is created.
   */
  EnvironmentIdentifier: string;
  /**
   * The name of the connection.
   * @maxLength `64`
   * @pattern `^[\w][\w\.\-\_]*$`
   */
  Name: string;
  Props?: ConnectionPropertiesInput;
};
/**
 * Attribute type definition for `AWS::DataZone::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#aws-resource-datazone-connection-return-values}
 */
export type DataZoneConnectionAttributes = {
  /**
   * The ID of the connection.
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ConnectionId: string;
  /**
   * The ID of the domain in which the connection is created.
   * @pattern `^dzd[_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of the domain unit in which the connection is created.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitId: string;
  /**
   * The ID of the environment in which the connection is created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentId: string;
  /**
   * The role of the user in the environment.
   */
  EnvironmentUserRole: string;
  /**
   * The ID of the project in which the connection is created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectId: string;
  /**
   * Connection Type
   */
  Type: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.AthenaPropertiesInput`.
 * Athena Properties Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-athenapropertiesinput.html}
 */
export type AthenaPropertiesInput = {
  /**
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9._-]+$`
   */
  WorkgroupName: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.AuthenticationConfigurationInput`.
 * Authentication Configuration Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-authenticationconfigurationinput.html}
 */
export type AuthenticationConfigurationInput = {
  /**
   * Authentication Type
   */
  AuthenticationType?: AuthenticationType;
  /**
   * Basic Authentication Credentials
   */
  BasicAuthenticationCredentials?: BasicAuthenticationCredentials;
  /**
   * Credential Map
   */
  CustomAuthenticationCredentials?: CredentialMap;
  /**
   * @pattern `^$|arn:aws[a-z0-9-]*:kms:.*$`
   */
  KmsKeyArn?: string;
  /**
   * OAuth2 Properties
   */
  OAuth2Properties?: OAuth2Properties;
  /**
   * @pattern `^arn:aws(-(cn|us-gov|iso(-[bef])?))?:secretsmanager:.*$`
   */
  SecretArn?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.AuthenticationType`.
 * Authentication Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-authenticationtype.html}
 */
export type AuthenticationType = "BASIC" | "OAUTH2" | "CUSTOM";
/**
 * Type definition for `AWS::DataZone::Connection.AuthorizationCodeProperties`.
 * Authorization Code Properties
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-authorizationcodeproperties.html}
 */
export type AuthorizationCodeProperties = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  AuthorizationCode?: string;
  /**
   * @maxLength `512`
   */
  RedirectUri?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.AwsLocation`.
 * AWS Location of project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-awslocation.html}
 */
export type AwsLocation = {
  /**
   * @maxLength `2048`
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  AccessRole?: string;
  /**
   * @pattern `^\d{12}$`
   */
  AwsAccountId?: string;
  /**
   * @pattern `^[a-z]{2}-[a-z]{4,10}-\d$`
   */
  AwsRegion?: string;
  /**
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  IamConnectionId?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.BasicAuthenticationCredentials`.
 * Basic Authentication Credentials
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-basicauthenticationcredentials.html}
 */
export type BasicAuthenticationCredentials = {
  /**
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Password?: string;
  /**
   * @maxLength `512`
   * @pattern `^\S+$`
   */
  UserName?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.ConnectionProperties`.
 * Connection Properties
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-connectionproperties.html}
 */
export type ConnectionProperties = Record<string, string>;
/**
 * Type definition for `AWS::DataZone::Connection.ConnectionPropertiesInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-connectionpropertiesinput.html}
 */
export type ConnectionPropertiesInput =
  | {
      /**
       * Athena Properties Input
       */
      AthenaProperties: AthenaPropertiesInput;
    }
  | {
      /**
       * Glue Properties Input
       */
      GlueProperties: GluePropertiesInput;
    }
  | {
      /**
       * HyperPod Properties Input
       */
      HyperPodProperties: HyperPodPropertiesInput;
    }
  | {
      /**
       * IAM Properties Input
       */
      IamProperties: IamPropertiesInput;
    }
  | {
      /**
       * Redshift Properties Input
       */
      RedshiftProperties: RedshiftPropertiesInput;
    }
  | {
      /**
       * Spark EMR Properties Input.
       */
      SparkEmrProperties: SparkEmrPropertiesInput;
    }
  | {
      /**
       * Spark Glue Properties Input.
       */
      SparkGlueProperties: SparkGluePropertiesInput;
    };
/**
 * Type definition for `AWS::DataZone::Connection.CredentialMap`.
 * Credential Map
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-credentialmap.html}
 */
export type CredentialMap = Record<string, string>;
/**
 * Type definition for `AWS::DataZone::Connection.GlueConnectionInput`.
 * Glue Connection Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-glueconnectioninput.html}
 */
export type GlueConnectionInput = {
  /**
   * Property Map
   */
  AthenaProperties?: PropertyMap;
  /**
   * Authentication Configuration Input
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput;
  /**
   * Connection Properties
   */
  ConnectionProperties?: ConnectionProperties;
  /**
   * Glue Connection Type
   */
  ConnectionType?: string;
  /**
   * @maxLength `2048`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFF\r\n\t]*$`
   */
  Description?: string;
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  MatchCriteria?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFF\t]*$`
   */
  Name?: string;
  /**
   * Physical Connection Requirements
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
  /**
   * Property Map
   */
  PythonProperties?: PropertyMap;
  /**
   * Property Map
   */
  SparkProperties?: PropertyMap;
  ValidateCredentials?: boolean;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  ValidateForComputeEnvironments?: string[];
};
/**
 * Type definition for `AWS::DataZone::Connection.GlueOAuth2Credentials`.
 * Glue OAuth2 Credentials
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-glueoauth2credentials.html}
 */
export type GlueOAuth2Credentials = {
  /**
   * @maxLength `4096`
   * @pattern `^[\x20-\x7E]*$`
   */
  AccessToken?: string;
  /**
   * @maxLength `8000`
   * @pattern `^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)$`
   */
  JwtToken?: string;
  /**
   * @maxLength `4096`
   * @pattern `^[\x20-\x7E]*$`
   */
  RefreshToken?: string;
  /**
   * @maxLength `512`
   * @pattern `^[\x20-\x7E]*$`
   */
  UserManagedClientApplicationClientSecret?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.GluePropertiesInput`.
 * Glue Properties Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-gluepropertiesinput.html}
 */
export type GluePropertiesInput = {
  /**
   * Glue Connection Input
   */
  GlueConnectionInput?: GlueConnectionInput;
};
/**
 * Type definition for `AWS::DataZone::Connection.HyperPodPropertiesInput`.
 * HyperPod Properties Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-hyperpodpropertiesinput.html}
 */
export type HyperPodPropertiesInput = {
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  ClusterName: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.IamPropertiesInput`.
 * IAM Properties Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-iampropertiesinput.html}
 */
export type IamPropertiesInput = {
  GlueLineageSyncEnabled?: boolean;
};
/**
 * Type definition for `AWS::DataZone::Connection.LineageSyncSchedule`.
 * Lineage Sync Schedule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-lineagesyncschedule.html}
 */
export type LineageSyncSchedule = {
  /**
   * @pattern `^cron\((\b[0-5]?[0-9]\b) (\b2[0-3]\b|\b[0-1]?[0-9]\b) ([-?*,/\dLW]){1,83} ([-*,/\d]|[a-zA-Z]{3}){1,23} ([-?#*,/\dL]|[a-zA-Z]{3}){1,13} ([^\)]+)\)$`
   */
  Schedule?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.OAuth2ClientApplication`.
 * OAuth2 Client Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-oauth2clientapplication.html}
 */
export type OAuth2ClientApplication = {
  /**
   * @maxLength `2048`
   * @pattern `^\S+$`
   */
  AWSManagedClientApplicationReference?: string;
  /**
   * @maxLength `2048`
   * @pattern `^\S+$`
   */
  UserManagedClientApplicationClientId?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.OAuth2GrantType`.
 * OAuth2 Grant Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-oauth2granttype.html}
 */
export type OAuth2GrantType =
  | "AUTHORIZATION_CODE"
  | "CLIENT_CREDENTIALS"
  | "JWT_BEARER";
/**
 * Type definition for `AWS::DataZone::Connection.OAuth2Properties`.
 * OAuth2 Properties
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-oauth2properties.html}
 */
export type OAuth2Properties = {
  /**
   * Authorization Code Properties
   */
  AuthorizationCodeProperties?: AuthorizationCodeProperties;
  /**
   * OAuth2 Client Application
   */
  OAuth2ClientApplication?: OAuth2ClientApplication;
  /**
   * Glue OAuth2 Credentials
   */
  OAuth2Credentials?: GlueOAuth2Credentials;
  /**
   * OAuth2 Grant Type
   */
  OAuth2GrantType?: OAuth2GrantType;
  /**
   * @maxLength `256`
   * @pattern `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$`
   */
  TokenUrl?: string;
  /**
   * The token URL parameters.
   */
  TokenUrlParametersMap?: TokenUrlParametersMap;
};
/**
 * Type definition for `AWS::DataZone::Connection.PhysicalConnectionRequirements`.
 * Physical Connection Requirements
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-physicalconnectionrequirements.html}
 */
export type PhysicalConnectionRequirements = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  AvailabilityZone?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  SecurityGroupIdList?: string[];
  /**
   * @maxLength `32`
   * @pattern `^subnet-[a-z0-9]+$`
   */
  SubnetId?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  SubnetIdList?: string[];
};
/**
 * Type definition for `AWS::DataZone::Connection.PropertyMap`.
 * Property Map
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-propertymap.html}
 */
export type PropertyMap = Record<string, string>;
/**
 * Type definition for `AWS::DataZone::Connection.RedshiftCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-redshiftcredentials.html}
 */
export type RedshiftCredentials =
  | {
      /**
       * @maxLength `2048`
       * @pattern `^arn:aws[^:]*:secretsmanager:[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]:\d{12}:secret:.*$`
       */
      SecretArn: string;
    }
  | {
      /**
       * The username and password to be used for authentication.
       */
      UsernamePassword: UsernamePassword;
    };
/**
 * Type definition for `AWS::DataZone::Connection.RedshiftLineageSyncConfigurationInput`.
 * Redshift Lineage Sync Configuration Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-redshiftlineagesyncconfigurationinput.html}
 */
export type RedshiftLineageSyncConfigurationInput = {
  Enabled?: boolean;
  /**
   * Lineage Sync Schedule
   */
  Schedule?: LineageSyncSchedule;
};
/**
 * Type definition for `AWS::DataZone::Connection.RedshiftPropertiesInput`.
 * Redshift Properties Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-redshiftpropertiesinput.html}
 */
export type RedshiftPropertiesInput = {
  Credentials?: RedshiftCredentials;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-z0-9_-]+$`
   */
  DatabaseName?: string;
  /**
   * @maxLength `256`
   * @pattern `^[\S]*$`
   */
  Host?: string;
  /**
   * Redshift Lineage Sync Configuration Input
   */
  LineageSync?: RedshiftLineageSyncConfigurationInput;
  /**
   * @min `0`
   * @max `65535`
   */
  Port?: number;
  Storage?: RedshiftStorageProperties;
};
/**
 * Type definition for `AWS::DataZone::Connection.RedshiftStorageProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-redshiftstorageproperties.html}
 */
export type RedshiftStorageProperties =
  | {
      /**
       * @minLength `0`
       * @maxLength `63`
       * @pattern `^[a-z0-9-]+$`
       */
      ClusterName: string;
    }
  | {
      /**
       * @minLength `3`
       * @maxLength `64`
       * @pattern `^[a-z0-9-]+$`
       */
      WorkgroupName: string;
    };
/**
 * Type definition for `AWS::DataZone::Connection.SparkEmrPropertiesInput`.
 * Spark EMR Properties Input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-sparkemrpropertiesinput.html}
 */
export type SparkEmrPropertiesInput = {
  /**
   * @maxLength `2048`
   * @pattern `^arn:aws(-(cn|us-gov|iso(-[bef])?))?:(elasticmapreduce|emr-serverless):.*`
   */
  ComputeArn?: string;
  /**
   * @maxLength `2048`
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  InstanceProfileArn?: string;
  /**
   * @maxLength `256`
   * @pattern `^[\S]*$`
   */
  JavaVirtualEnv?: string;
  /**
   * @maxLength `2048`
   * @pattern `^s3://.+$`
   */
  LogUri?: string;
  /**
   * @maxLength `256`
   * @pattern `^[\S]*$`
   */
  PythonVirtualEnv?: string;
  /**
   * @maxLength `2048`
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  RuntimeRole?: string;
  /**
   * @maxLength `2048`
   * @pattern `^s3://.+$`
   */
  TrustedCertificatesS3Uri?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.SparkGlueArgs`.
 * Spark Glue Args.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-sparkglueargs.html}
 */
export type SparkGlueArgs = {
  /**
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Connection?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.SparkGluePropertiesInput`.
 * Spark Glue Properties Input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-sparkgluepropertiesinput.html}
 */
export type SparkGluePropertiesInput = {
  /**
   * Spark Glue Args.
   */
  AdditionalArgs?: SparkGlueArgs;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\S]*$`
   */
  GlueConnectionName?: string;
  /**
   * @maxLength `256`
   * @pattern `^\w+\.\w+$`
   */
  GlueVersion?: string;
  /**
   * @min `1`
   * @max `3000`
   */
  IdleTimeout?: number;
  /**
   * @maxLength `256`
   * @pattern `^[\S]*$`
   */
  JavaVirtualEnv?: string;
  /**
   * @min `1`
   * @max `1000`
   */
  NumberOfWorkers?: number;
  /**
   * @maxLength `256`
   * @pattern `^[\S]*$`
   */
  PythonVirtualEnv?: string;
  /**
   * @maxLength `256`
   * @pattern `^[G|Z].*$`
   */
  WorkerType?: string;
};
/**
 * Type definition for `AWS::DataZone::Connection.TokenUrlParametersMap`.
 * The token URL parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-tokenurlparametersmap.html}
 */
export type TokenUrlParametersMap = Record<string, string>;
/**
 * Type definition for `AWS::DataZone::Connection.UsernamePassword`.
 * The username and password to be used for authentication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-connection-usernamepassword.html}
 */
export type UsernamePassword = {
  /**
   * @maxLength `64`
   * @pattern `^[\S]*$`
   */
  Password: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^[\S]*$`
   */
  Username: string;
};
/**
 * Resource type definition for `AWS::DataZone::Connection`.
 * Connections enables users to connect their DataZone resources (domains, projects, and environments) to external resources/services (data, compute, etc)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html}
 */
export class DataZoneConnection extends $Resource<
  "AWS::DataZone::Connection",
  DataZoneConnectionProperties,
  DataZoneConnectionAttributes
> {
  public static readonly Type = "AWS::DataZone::Connection";
  constructor(
    logicalId: string,
    properties: DataZoneConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneConnection.Type, properties, options);
  }
}
