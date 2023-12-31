import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::EMR::Studio
 * @see {@link https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateStudio.html}
 */
export type EMRStudioProperties = {
  /**
   * Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
   */
  AuthMode: "SSO" | "IAM";
  /**
   * The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
   * @minLength `6`
   * @maxLength `10280`
   * @pattern `^s3://.*`
   */
  DefaultS3Location: string;
  /**
   * A detailed description of the Studio.
   * @maxLength `256`
   */
  Description?: string;
  /**
   * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
   * @minLength `4`
   * @maxLength `256`
   * @pattern `^sg-[a-zA-Z0-9\-._]+$`
   */
  EngineSecurityGroupId: string;
  /**
   * Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
   * @maxLength `4096`
   * @pattern `^https://[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])(:[0-9]*)*([?/#].*)?$`
   */
  IdpAuthUrl?: string;
  /**
   * The name of relay state parameter for external Identity Provider.
   * @maxLength `256`
   */
  IdpRelayStateParameterName?: string;
  /**
   * A descriptive name for the Amazon EMR Studio.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9_-]+`
   */
  Name: string;
  /**
   * The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  ServiceRole: string;
  /**
   * A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
   * @minLength `1`
   */
  SubnetIds: string[];
  /**
   * A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
   */
  Tags?: Tag[];
  /**
   * The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  UserRole?: string;
  /**
   * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
   * @pattern `^(vpc-[0-9a-f]{8}|vpc-[0-9a-f]{17})$`
   */
  VpcId: string;
  /**
   * The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.
   * @pattern `^sg-[a-zA-Z0-9\-._]+$`
   */
  WorkspaceSecurityGroupId: string;
};
/**
 * Attribute type definition for `AWS::EMR::Studio`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#aws-resource-emr-studio-return-values}
 */
export type EMRStudioAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the EMR Studio.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  Arn: string;
  /**
   * The ID of the EMR Studio.
   * @minLength `4`
   * @maxLength `256`
   * @pattern `^es-[0-9A-Z]+`
   */
  StudioId: string;
  /**
   * The unique Studio access URL.
   * @maxLength `4096`
   * @pattern `^https://[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])(:[0-9]*)*([?/#].*)?$`
   */
  Url: string;
};
/**
 * Type definition for `AWS::EMR::Studio.Tag`.
 * An arbitrary set of tags (key-value pairs) for this EMR Studio.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-studio-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `[a-zA-Z+-=._:/]+$`
   */
  Value: string;
};
/**
 * Resource schema for AWS::EMR::Studio
 * @see {@link https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateStudio.html}
 */
export class EMRStudio extends $Resource<
  "AWS::EMR::Studio",
  EMRStudioProperties,
  EMRStudioAttributes
> {
  public static readonly Type = "AWS::EMR::Studio";
  public static readonly AttributeNames = [
    "Arn" as const,
    "StudioId" as const,
    "Url" as const,
  ];
  constructor(
    logicalId: string,
    properties: EMRStudioProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EMRStudio.Type,
      properties,
      EMRStudio.AttributeNames,
      options,
    );
  }
}
