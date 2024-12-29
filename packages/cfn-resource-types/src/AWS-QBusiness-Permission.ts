import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::Permission Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html}
 */
export type QBusinessPermissionProperties = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Actions: string[];
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `^arn:aws:iam::[0-9]{12}:role/[a-zA-Z0-9_/+=,.@-]+$`
   */
  Principal: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  StatementId: string;
};
/**
 * Definition of AWS::QBusiness::Permission Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-permission.html}
 */
export class QBusinessPermission extends $Resource<
  "AWS::QBusiness::Permission",
  QBusinessPermissionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::QBusiness::Permission";
  constructor(
    logicalId: string,
    properties: QBusinessPermissionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessPermission.Type, properties, options);
  }
}
