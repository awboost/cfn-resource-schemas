import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResilienceHubV2::Service`.
 * Creates a resilience-managed service with associated systems, input sources, assertions, and service functions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-service.html}
 */
export type ResilienceHubV2ServiceProperties = {
  /**
   * Assertions associated with this service.
   * @maxLength `20`
   */
  Assertions?: AssertionDefinition[];
  /**
   * Systems associated with this service.
   * @maxLength `1000`
   */
  AssociatedSystems?: AssociatedSystem[];
  /**
   * Dependency discovery state.
   */
  DependencyDiscovery?: "ENABLED" | "DISABLED" | "INITIALIZING";
  /**
   * The description of the service.
   * @maxLength `615`
   */
  Description?: string;
  /**
   * Input sources for this service.
   * @maxLength `20`
   */
  InputSources?: InputSourceDefinition[];
  /**
   * The KMS key ID for encrypting service data.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^((arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:((key/[a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+)))|([a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+))$`
   */
  KmsKeyId?: string;
  /**
   * The name of the service.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  PermissionModel?: PermissionModel;
  /**
   * The ARN of the resilience policy to associate.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  PolicyArn?: string;
  /**
   * AWS regions for the service.
   * @minLength `1`
   * @maxLength `10`
   */
  Regions: string[];
  /**
   * Configuration for automatic report generation on a Service.
   */
  ReportConfiguration?: ServiceReportConfiguration;
  /**
   * Tags assigned to the service.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ResilienceHubV2::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-service.html#aws-resource-resiliencehubv2-service-return-values}
 */
export type ResilienceHubV2ServiceAttributes = {
  /**
   * The timestamp when the service was created.
   */
  CreatedAt: string;
  /**
   * Effective policy values computed from the associated policy.
   */
  EffectivePolicyValues: {
    AvailabilitySlo: {
      PolicyName: string;
      Value: number;
    };
    MultiAzDrApproach: {
      PolicyName: string;
      Value: string;
    };
    MultiAzRpo: {
      PolicyName: string;
      Value: number;
    };
    MultiAzRto: {
      PolicyName: string;
      Value: number;
    };
    MultiRegionDrApproach: {
      PolicyName: string;
      Value: string;
    };
    MultiRegionRpo: {
      PolicyName: string;
      Value: number;
    };
    MultiRegionRto: {
      PolicyName: string;
      Value: number;
    };
  };
  /**
   * The ARN of the service.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  ServiceArn: string;
  /**
   * The timestamp when the service was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.AssertionDefinition`.
 * An assertion about the service's resilience posture.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-assertiondefinition.html}
 */
export type AssertionDefinition = {
  /**
   * The text of the assertion.
   * @minLength `1`
   * @maxLength `1000`
   */
  Text: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.AssociatedSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-associatedsystem.html}
 */
export type AssociatedSystem = {
  /**
   * The system ARN.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  SystemArn: string;
  /**
   * User journey IDs associated with this system.
   * @maxLength `50`
   */
  UserJourneyIds?: string[];
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.CrossAccountRoleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-crossaccountroleconfiguration.html}
 */
export type CrossAccountRoleConfiguration = {
  /**
   * ARN of the cross-account IAM role.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):iam::[0-9]{12}:role\/(([^\/][\x21-\x7E]+\/){1,511})?[A-Za-z0-9_+=,.@-]{1,64}$`
   */
  CrossAccountRoleArn: string;
  /**
   * External ID for cross-account access.
   */
  ExternalId?: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.DisasterRecoverySource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-disasterrecoverysource.html}
 */
export type DisasterRecoverySource = {
  PolicyName?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.EffectivePolicyValues`.
 * Effective policy values computed from the associated policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-effectivepolicyvalues.html}
 */
export type EffectivePolicyValues = {
  AvailabilitySlo?: SloSource;
  MultiAzDrApproach?: DisasterRecoverySource;
  MultiAzRpo?: TargetSource;
  MultiAzRto?: TargetSource;
  MultiRegionDrApproach?: DisasterRecoverySource;
  MultiRegionRpo?: TargetSource;
  MultiRegionRto?: TargetSource;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.EksSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-ekssource.html}
 */
export type EksSource = {
  /**
   * ARN of the EKS cluster.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  ClusterArn: string;
  /**
   * EKS namespaces.
   * @minLength `1`
   * @maxLength `10`
   */
  Namespaces: string[];
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.InputSourceDefinition`.
 * An input source for the service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-inputsourcedefinition.html}
 */
export type InputSourceDefinition = {
  /**
   * Resource configuration for an input source. Provide exactly one field.
   */
  ResourceConfiguration: ResourceConfiguration;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.PermissionModel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-permissionmodel.html}
 */
export type PermissionModel = {
  /**
   * Cross-account role ARNs.
   * @maxLength `10`
   */
  CrossAccountRoleArns?: CrossAccountRoleConfiguration[];
  /**
   * Name of the invoker IAM role.
   * @pattern `^[A-Za-z0-9_+=,.@\-]{1,64}$`
   */
  InvokerRoleName: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.ReportOutputConfiguration`.
 * Configuration for a report output destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-reportoutputconfiguration.html}
 */
export type ReportOutputConfiguration = {
  /**
   * S3 configuration for report output.
   */
  S3?: S3ReportOutputConfiguration;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.ResourceConfiguration`.
 * Resource configuration for an input source. Provide exactly one field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-resourceconfiguration.html}
 */
export type ResourceConfiguration = {
  /**
   * ARN of a CloudFormation stack.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  CfnStackArn?: string;
  /**
   * S3 URL of a design file.
   */
  DesignFileS3Url?: string;
  Eks?: EksSource;
  /**
   * Resource tags to discover resources.
   * @minLength `1`
   * @maxLength `10`
   */
  ResourceTags?: ResourceTag[];
  /**
   * URL of a Terraform state file.
   */
  TfStateFileUrl?: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.ResourceTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * Tag key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Tag values.
   * @minLength `0`
   * @maxLength `10`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.S3ReportOutputConfiguration`.
 * S3 configuration for report output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-s3reportoutputconfiguration.html}
 */
export type S3ReportOutputConfiguration = {
  /**
   * Account ID of the bucket owner.
   * @pattern `^\d{12}$`
   */
  BucketOwner: string;
  /**
   * S3 bucket path where reports will be written.
   * @minLength `3`
   * @maxLength `512`
   * @pattern `^(s3://)?[a-z0-9][a-z0-9.-]{1,61}[a-z0-9](/.*)?$`
   */
  BucketPath: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.ServiceReportConfiguration`.
 * Configuration for automatic report generation on a Service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-servicereportconfiguration.html}
 */
export type ServiceReportConfiguration = {
  /**
   * Output destinations for generated reports.
   * @minLength `1`
   * @maxLength `1`
   */
  ReportOutput: ReportOutputConfiguration[];
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.SloSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-slosource.html}
 */
export type SloSource = {
  PolicyName?: string;
  Value?: number;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag value.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::Service.TargetSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-service-targetsource.html}
 */
export type TargetSource = {
  PolicyName?: string;
  Value?: number;
};
/**
 * Resource type definition for `AWS::ResilienceHubV2::Service`.
 * Creates a resilience-managed service with associated systems, input sources, assertions, and service functions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-service.html}
 */
export class ResilienceHubV2Service extends $Resource<
  "AWS::ResilienceHubV2::Service",
  ResilienceHubV2ServiceProperties,
  ResilienceHubV2ServiceAttributes
> {
  public static readonly Type = "AWS::ResilienceHubV2::Service";
  constructor(
    logicalId: string,
    properties: ResilienceHubV2ServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubV2Service.Type, properties, options);
  }
}
