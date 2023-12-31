import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SecretsManager::RotationSchedule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html}
 */
export type SecretsManagerRotationScheduleProperties = {
  HostedRotationLambda?: HostedRotationLambda;
  RotateImmediatelyOnUpdate?: boolean;
  RotationLambdaARN?: string;
  RotationRules?: RotationRules;
  SecretId: string;
};
/**
 * Attribute type definition for `AWS::SecretsManager::RotationSchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html#aws-resource-secretsmanager-rotationschedule-return-values}
 */
export type SecretsManagerRotationScheduleAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SecretsManager::RotationSchedule.HostedRotationLambda`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html}
 */
export type HostedRotationLambda = {
  ExcludeCharacters?: string;
  KmsKeyArn?: string;
  MasterSecretArn?: string;
  MasterSecretKmsKeyArn?: string;
  RotationLambdaName?: string;
  RotationType: string;
  Runtime?: string;
  SuperuserSecretArn?: string;
  SuperuserSecretKmsKeyArn?: string;
  VpcSecurityGroupIds?: string;
  VpcSubnetIds?: string;
};
/**
 * Type definition for `AWS::SecretsManager::RotationSchedule.RotationRules`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html}
 */
export type RotationRules = {
  AutomaticallyAfterDays?: number;
  Duration?: string;
  ScheduleExpression?: string;
};
/**
 * Resource Type definition for AWS::SecretsManager::RotationSchedule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html}
 */
export class SecretsManagerRotationSchedule extends $Resource<
  "AWS::SecretsManager::RotationSchedule",
  SecretsManagerRotationScheduleProperties,
  SecretsManagerRotationScheduleAttributes
> {
  public static readonly Type = "AWS::SecretsManager::RotationSchedule";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SecretsManagerRotationScheduleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecretsManagerRotationSchedule.Type,
      properties,
      SecretsManagerRotationSchedule.AttributeNames,
      options,
    );
  }
}
