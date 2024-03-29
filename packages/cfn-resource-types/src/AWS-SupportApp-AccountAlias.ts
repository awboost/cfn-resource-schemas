import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SupportApp::AccountAlias`.
 * An AWS Support App resource that creates, updates, reads, and deletes a customer's account alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html}
 */
export type SupportAppAccountAliasProperties = {
  /**
   * An account alias associated with a customer's account.
   * @minLength `1`
   * @maxLength `30`
   * @pattern `^[\w\- ]+$`
   */
  AccountAlias: string;
};
/**
 * Attribute type definition for `AWS::SupportApp::AccountAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html#aws-resource-supportapp-accountalias-return-values}
 */
export type SupportAppAccountAliasAttributes = {
  /**
   * Unique identifier representing an alias tied to an account
   * @minLength `29`
   * @maxLength `29`
   * @pattern `^[\w\- ]+$`
   */
  AccountAliasResourceId: string;
};
/**
 * Resource type definition for `AWS::SupportApp::AccountAlias`.
 * An AWS Support App resource that creates, updates, reads, and deletes a customer's account alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html}
 */
export class SupportAppAccountAlias extends $Resource<
  "AWS::SupportApp::AccountAlias",
  SupportAppAccountAliasProperties,
  SupportAppAccountAliasAttributes
> {
  public static readonly Type = "AWS::SupportApp::AccountAlias";
  constructor(
    logicalId: string,
    properties: SupportAppAccountAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SupportAppAccountAlias.Type, properties, options);
  }
}
