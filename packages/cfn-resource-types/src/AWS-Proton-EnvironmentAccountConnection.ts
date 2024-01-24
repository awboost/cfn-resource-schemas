import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Proton::EnvironmentAccountConnection`.
 * Resource Schema describing various properties for AWS Proton Environment Account Connections resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html}
 */
export type ProtonEnvironmentAccountConnectionProperties = {
  /**
   * The Amazon Resource Name (ARN) of an IAM service role in the environment account. AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):iam::\d{12}:role/([\w+=,.@-]{1,512}[/:])*([\w+=,.@-]{1,64})$`
   */
  CodebuildRoleArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):iam::\d{12}:role/([\w+=,.@-]{1,512}[/:])*([\w+=,.@-]{1,64})$`
   */
  ComponentRoleArn?: string;
  /**
   * The environment account that's connected to the environment account connection.
   * @pattern `^\d{12}$`
   */
  EnvironmentAccountId?: string;
  /**
   * The name of the AWS Proton environment that's created in the associated management account.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z]+[0-9A-Za-z_\-]*$`
   */
  EnvironmentName?: string;
  /**
   * The ID of the management account that accepts or rejects the environment account connection. You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
   * @pattern `^\d{12}$`
   */
  ManagementAccountId?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. AWS Proton uses this role to provision infrastructure resources in the associated environment account.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):iam::\d{12}:role/([\w+=,.@-]{1,512}[/:])*([\w+=,.@-]{1,64})$`
   */
  RoleArn?: string;
  /**
     * <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
             <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
            <i>Proton User Guide</i>.</p>
     */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Proton::EnvironmentAccountConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#aws-resource-proton-environmentaccountconnection-return-values}
 */
export type ProtonEnvironmentAccountConnectionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the environment account connection.
   */
  Arn: string;
  /**
   * The ID of the environment account connection.
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  Id: string;
  /**
   * The status of the environment account connection.
   */
  Status: Status;
};
/**
 * Type definition for `AWS::Proton::EnvironmentAccountConnection.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-proton-environmentaccountconnection-status.html}
 */
export type Status = "PENDING" | "CONNECTED" | "REJECTED";
/**
 * Type definition for `AWS::Proton::EnvironmentAccountConnection.Tag`.
 * <p>A description of a resource tag.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-proton-environmentaccountconnection-tag.html}
 */
export type Tag = {
  /**
   * <p>The key of the resource tag.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>The value of the resource tag.</p>
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Proton::EnvironmentAccountConnection`.
 * Resource Schema describing various properties for AWS Proton Environment Account Connections resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html}
 */
export class ProtonEnvironmentAccountConnection extends $Resource<
  "AWS::Proton::EnvironmentAccountConnection",
  ProtonEnvironmentAccountConnectionProperties,
  ProtonEnvironmentAccountConnectionAttributes
> {
  public static readonly Type = "AWS::Proton::EnvironmentAccountConnection";
  constructor(
    logicalId: string,
    properties: ProtonEnvironmentAccountConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ProtonEnvironmentAccountConnection.Type,
      properties,
      options,
    );
  }
}
