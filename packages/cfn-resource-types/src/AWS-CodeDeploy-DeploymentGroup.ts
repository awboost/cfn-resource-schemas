import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::CodeDeploy::DeploymentGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html}
 */
export type CodeDeployDeploymentGroupProperties = {
  /**
   * Information about the Amazon CloudWatch alarms that are associated with the deployment group.
   */
  AlarmConfiguration?: AlarmConfiguration;
  /**
   * The name of an existing CodeDeploy application to associate this deployment group with.
   */
  ApplicationName: string;
  /**
   * Information about the automatic rollback configuration that is associated with the deployment group. If you specify this property, don't specify the Deployment property.
   */
  AutoRollbackConfiguration?: AutoRollbackConfiguration;
  /**
   * A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. Duplicates are not allowed.
   */
  AutoScalingGroups?: string[];
  /**
   * Information about blue/green deployment options for a deployment group.
   */
  BlueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
  /**
   * The application revision to deploy to this deployment group. If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.
   */
  Deployment?: Deployment;
  /**
   * A deployment configuration name or a predefined configuration name. With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).
   */
  DeploymentConfigName?: string;
  /**
   * A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.
   */
  DeploymentGroupName?: string;
  /**
   * Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.
   */
  DeploymentStyle?: DeploymentStyle;
  /**
   * The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.
   */
  ECSServices?: ECSService[];
  /**
   * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.
   */
  Ec2TagFilters?: EC2TagFilter[];
  /**
   * Information about groups of tags applied to Amazon EC2 instances. Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.
   */
  Ec2TagSet?: EC2TagSet;
  /**
   * Information about the load balancer to use in a deployment.
   */
  LoadBalancerInfo?: LoadBalancerInfo;
  /**
   * The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.
   */
  OnPremisesInstanceTagFilters?: TagFilter[];
  /**
   * Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.
   */
  OnPremisesTagSet?: OnPremisesTagSet;
  /**
   * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
   */
  OutdatedInstancesStrategy?: string;
  /**
   * A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.
   */
  ServiceRoleArn: string;
  /**
   * The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
   */
  Tags?: Tag[];
  /**
   * Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.
   */
  TerminationHookEnabled?: boolean;
  /**
   * Information about triggers associated with the deployment group. Duplicates are not allowed.
   */
  TriggerConfigurations?: TriggerConfig[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.Alarm`.
 * Specifies a CloudWatch alarm to use for an AWS CodeDeploy deployment group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarm.html}
 */
export type Alarm = {
  /**
   * The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.
   */
  Name?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.AlarmConfiguration`.
 * Configures CloudWatch alarms for an AWS CodeDeploy deployment group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html}
 */
export type AlarmConfiguration = {
  /**
   * A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.
   */
  Alarms?: Alarm[];
  /**
   * Indicates whether the alarm configuration is enabled.
   */
  Enabled?: boolean;
  /**
   * Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.
   */
  IgnorePollAlarmFailure?: boolean;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.AutoRollbackConfiguration`.
 * Configures automatic rollback for an AWS CodeDeploy deployment group when a deployment is not completed successfully.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html}
 */
export type AutoRollbackConfiguration = {
  /**
   * Indicates whether a defined automatic rollback configuration is currently enabled.
   */
  Enabled?: boolean;
  /**
   * The event type or types that trigger a rollback.
   */
  Events?: string[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.BlueGreenDeploymentConfiguration`.
 * Information about blue/green deployment options for a deployment group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html}
 */
export type BlueGreenDeploymentConfiguration = {
  /**
   * Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
   */
  DeploymentReadyOption?: DeploymentReadyOption;
  /**
   * Information about how instances are provisioned for a replacement environment in a blue/green deployment.
   */
  GreenFleetProvisioningOption?: GreenFleetProvisioningOption;
  /**
   * Information about whether to terminate instances in the original fleet during a blue/green deployment.
   */
  TerminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.BlueInstanceTerminationOption`.
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. BlueInstanceTerminationOption does not apply to Lambda deployments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html}
 */
export type BlueInstanceTerminationOption = {
  /**
   * The action to take on instances in the original environment after a successful blue/green deployment.
   */
  Action?: string;
  /**
   * For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).
   */
  TerminationWaitTimeInMinutes?: number;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.Deployment`.
 * Specifies an AWS CodeDeploy application revision to be deployed to instances in the deployment group. If you specify an application revision, your target revision is deployed as soon as the provisioning process is complete.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html}
 */
export type Deployment = {
  /**
   * A description of the deployment.
   */
  Description?: string;
  /**
   * If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
   */
  IgnoreApplicationStopFailures?: boolean;
  /**
   * Information about the location of stored application artifacts and the service from which to retrieve them.
   */
  Revision: RevisionLocation;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.DeploymentReadyOption`.
 * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html}
 */
export type DeploymentReadyOption = {
  /**
   * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.
   */
  ActionOnTimeout?: string;
  /**
   * The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.
   */
  WaitTimeInMinutes?: number;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.DeploymentStyle`.
 * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html}
 */
export type DeploymentStyle = {
  /**
   * Indicates whether to route deployment traffic behind a load balancer.
   */
  DeploymentOption?: string;
  /**
   * Indicates whether to run an in-place or blue/green deployment.
   */
  DeploymentType?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.EC2TagFilter`.
 * Information about an Amazon EC2 tag filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html}
 */
export type EC2TagFilter = {
  /**
   * The tag filter key.
   */
  Key?: string;
  /**
   * The tag filter type.
   */
  Type?: string;
  /**
   * The tag filter value.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.EC2TagSet`.
 * Specifies information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same template as EC2TagFilters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagset.html}
 */
export type EC2TagSet = {
  /**
   * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.
   */
  Ec2TagSetList?: EC2TagSetListObject[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.EC2TagSetListObject`.
 * The EC2TagSet property type specifies information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same template as EC2TagFilters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.html}
 */
export type EC2TagSetListObject = {
  /**
   * A list that contains other lists of Amazon EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
   */
  Ec2TagGroup?: EC2TagFilter[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.ECSService`.
 * Contains the service and cluster names used to identify an Amazon ECS deployment's target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html}
 */
export type ECSService = {
  /**
   * The name of the cluster that the Amazon ECS service is associated with.
   */
  ClusterName: string;
  /**
   * The name of the target Amazon ECS service.
   */
  ServiceName: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.ELBInfo`.
 * The ELBInfo property type specifies information about the Elastic Load Balancing load balancer used for an CodeDeploy deployment group. If you specify the ELBInfo property, the DeploymentStyle.DeploymentOption property must be set to WITH_TRAFFIC_CONTROL for AWS CodeDeploy to route your traffic using the specified load balancers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-elbinfo.html}
 */
export type ELBInfo = {
  /**
   * For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.
   */
  Name?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.GitHubLocation`.
 * Specifies the location of an application revision that is stored in GitHub.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-githublocation.html}
 */
export type GitHubLocation = {
  /**
   * The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.
   */
  CommitId: string;
  /**
   * The GitHub account and repository pair that stores the application revision to be deployed.
   */
  Repository: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.GreenFleetProvisioningOption`.
 * Information about the instances that belong to the replacement environment in a blue/green deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.html}
 */
export type GreenFleetProvisioningOption = {
  /**
   * The method used to add instances to a replacement environment.
   */
  Action?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.LoadBalancerInfo`.
 * Specifies information about the load balancer or target group used for an AWS CodeDeploy deployment group. For AWS CloudFormation to use the properties specified in LoadBalancerInfo, the DeploymentStyle.DeploymentOption property must be set to WITH_TRAFFIC_CONTROL.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html}
 */
export type LoadBalancerInfo = {
  /**
   * An array that contains information about the load balancers to use for load balancing in a deployment. If you're using Classic Load Balancers, specify those load balancers in this array.
   */
  ElbInfoList?: ELBInfo[];
  /**
   * An array that contains information about the target groups to use for load balancing in a deployment. If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.
   */
  TargetGroupInfoList?: TargetGroupInfo[];
  /**
   * The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.
   */
  TargetGroupPairInfoList?: TargetGroupPairInfo[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSet`.
 * Specifies a list containing other lists of on-premises instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html}
 */
export type OnPremisesTagSet = {
  /**
   * A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
   */
  OnPremisesTagSetList?: OnPremisesTagSetListObject[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.OnPremisesTagSetListObject`.
 * Specifies lists of on-premises instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.html}
 */
export type OnPremisesTagSetListObject = {
  /**
   * Information about groups of on-premises instance tags.
   */
  OnPremisesTagGroup?: TagFilter[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.RevisionLocation`.
 * Defines the location of the CodeDeploy application revision to deploy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-revisionlocation.html}
 */
export type RevisionLocation = {
  /**
   * Specifies the location of an application revision that is stored in GitHub.
   */
  GitHubLocation?: GitHubLocation;
  /**
   * The type of application revision.
   */
  RevisionType?: string;
  /**
   * Information about the location of application artifacts stored in Amazon S3.
   */
  S3Location?: S3Location;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.S3Location`.
 * Information about the location of application artifacts stored in Amazon S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html}
 */
export type S3Location = {
  /**
   * The name of the Amazon S3 bucket where the application revision is stored.
   */
  Bucket: string;
  /**
   * The file type of the application revision.
   */
  BundleType?: string;
  /**
   * The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. If the ETag is not specified as an input parameter, ETag validation of the object is skipped.
   */
  ETag?: string;
  /**
   * The name of the Amazon S3 object that represents the bundled artifacts for the application revision.
   */
  Key: string;
  /**
   * A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. If the version is not specified, the system uses the most recent version by default.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.Tag`.
 * Information about a tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TagFilter`.
 * Specifies which on-premises instances to associate with the deployment group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html}
 */
export type TagFilter = {
  /**
   * The on-premises instance tag filter key.
   */
  Key?: string;
  /**
   * The on-premises instance tag filter type
   */
  Type?: string;
  /**
   * The on-premises instance tag filter value.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TargetGroupInfo`.
 * Specifies information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. The DeploymentStyle.DeploymentOption property must be set to WITH_TRAFFIC_CONTROL for CodeDeploy to route your traffic using the specified target groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgroupinfo.html}
 */
export type TargetGroupInfo = {
  /**
   * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.
   */
  Name?: string;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TargetGroupPairInfo`.
 * The TargetGroupInfo property type specifies information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. The DeploymentStyle.DeploymentOption property must be set to WITH_TRAFFIC_CONTROL for CodeDeploy to route your traffic using the specified target groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html}
 */
export type TargetGroupPairInfo = {
  /**
   * The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.
   */
  ProdTrafficRoute?: TrafficRoute;
  /**
   * One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.
   */
  TargetGroups?: TargetGroupInfo[];
  /**
   * An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment.
   */
  TestTrafficRoute?: TrafficRoute;
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TrafficRoute`.
 * Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-trafficroute.html}
 */
export type TrafficRoute = {
  /**
   * The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.
   */
  ListenerArns?: string[];
};
/**
 * Type definition for `AWS::CodeDeploy::DeploymentGroup.TriggerConfig`.
 * Information about notification triggers for the deployment group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html}
 */
export type TriggerConfig = {
  /**
   * The event type or types that trigger notifications.
   */
  TriggerEvents?: string[];
  /**
   * The name of the notification trigger.
   */
  TriggerName?: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.
   */
  TriggerTargetArn?: string;
};
/**
 * Resource type definition for AWS::CodeDeploy::DeploymentGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html}
 */
export class CodeDeployDeploymentGroup extends $Resource<
  "AWS::CodeDeploy::DeploymentGroup",
  CodeDeployDeploymentGroupProperties,
  Record<string, never>
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
