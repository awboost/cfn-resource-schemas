import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html}
 */
export type CodeDeployDeploymentGroupProperties = {
  AlarmConfiguration?: AlarmConfiguration;
  ApplicationName: string;
  AutoRollbackConfiguration?: AutoRollbackConfiguration;
  AutoScalingGroups?: string[];
  BlueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  Deployment?: Deployment;
  DeploymentConfigName?: string;
  DeploymentGroupName?: string;
  DeploymentStyle?: DeploymentStyle;
  ECSServices?: ECSService[];
  Ec2TagFilters?: EC2TagFilter[];
  Ec2TagSet?: EC2TagSet;
  LoadBalancerInfo?: LoadBalancerInfo;
  OnPremisesInstanceTagFilters?: TagFilter[];
  OnPremisesTagSet?: OnPremisesTagSet;
  OutdatedInstancesStrategy?: string;
  ServiceRoleArn: string;
  Tags?: Tag[];
  TerminationHookEnabled?: boolean;
  TriggerConfigurations?: TriggerConfig[];
};
/**
 * Attribute type definition for `AWS::CodeDeploy::DeploymentGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#aws-resource-codedeploy-deploymentgroup-return-values}
 */
export type CodeDeployDeploymentGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.Alarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarm.html}
 */
export type Alarm = {
  Name?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.AlarmConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html}
 */
export type AlarmConfiguration = {
  Alarms?: Alarm[];
  Enabled?: boolean;
  IgnorePollAlarmFailure?: boolean;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.AutoRollbackConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html}
 */
export type AutoRollbackConfiguration = {
  Enabled?: boolean;
  Events?: string[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.BlueGreenDeploymentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html}
 */
export type BlueGreenDeploymentConfiguration = {
  DeploymentReadyOption?: DeploymentReadyOption;
  GreenFleetProvisioningOption?: GreenFleetProvisioningOption;
  TerminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.BlueInstanceTerminationOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html}
 */
export type BlueInstanceTerminationOption = {
  Action?: string;
  TerminationWaitTimeInMinutes?: number;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html}
 */
export type Deployment = {
  Description?: string;
  IgnoreApplicationStopFailures?: boolean;
  Revision: RevisionLocation;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.DeploymentReadyOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html}
 */
export type DeploymentReadyOption = {
  ActionOnTimeout?: string;
  WaitTimeInMinutes?: number;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.DeploymentStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html}
 */
export type DeploymentStyle = {
  DeploymentOption?: string;
  DeploymentType?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.EC2TagFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html}
 */
export type EC2TagFilter = {
  Key?: string;
  Type?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.EC2TagSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagset.html}
 */
export type EC2TagSet = {
  Ec2TagSetList?: EC2TagSetListObject[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.EC2TagSetListObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.html}
 */
export type EC2TagSetListObject = {
  Ec2TagGroup?: EC2TagFilter[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.ECSService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html}
 */
export type ECSService = {
  ClusterName: string;
  ServiceName: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.ELBInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-elbinfo.html}
 */
export type ELBInfo = {
  Name?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.GitHubLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-githublocation.html}
 */
export type GitHubLocation = {
  CommitId: string;
  Repository: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.GreenFleetProvisioningOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.html}
 */
export type GreenFleetProvisioningOption = {
  Action?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.LoadBalancerInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html}
 */
export type LoadBalancerInfo = {
  ElbInfoList?: ELBInfo[];
  TargetGroupInfoList?: TargetGroupInfo[];
  TargetGroupPairInfoList?: TargetGroupPairInfo[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html}
 */
export type OnPremisesTagSet = {
  OnPremisesTagSetList?: OnPremisesTagSetListObject[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSetListObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.html}
 */
export type OnPremisesTagSetListObject = {
  OnPremisesTagGroup?: TagFilter[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.RevisionLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-revisionlocation.html}
 */
export type RevisionLocation = {
  GitHubLocation?: GitHubLocation;
  RevisionType?: string;
  S3Location?: S3Location;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html}
 */
export type S3Location = {
  Bucket: string;
  BundleType?: string;
  ETag?: string;
  Key: string;
  Version?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TagFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html}
 */
export type TagFilter = {
  Key?: string;
  Type?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TargetGroupInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgroupinfo.html}
 */
export type TargetGroupInfo = {
  Name?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TargetGroupPairInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html}
 */
export type TargetGroupPairInfo = {
  ProdTrafficRoute?: TrafficRoute;
  TargetGroups?: TargetGroupInfo[];
  TestTrafficRoute?: TrafficRoute;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TrafficRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-trafficroute.html}
 */
export type TrafficRoute = {
  ListenerArns?: string[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TriggerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html}
 */
export type TriggerConfig = {
  TriggerEvents?: string[];
  TriggerName?: string;
  TriggerTargetArn?: string;
};
/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html}
 */
export class CodeDeployDeploymentGroup extends $Resource<
  "AWS::CodeDeploy::DeploymentGroup",
  CodeDeployDeploymentGroupProperties,
  CodeDeployDeploymentGroupAttributes
> {
  public static readonly Type = "AWS::CodeDeploy::DeploymentGroup";
  constructor(
    logicalId: string,
    properties: CodeDeployDeploymentGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeDeployDeploymentGroup.Type, properties, options);
  }
}
