import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::LakeFormation::Tag`.
 * A resource schema representing a Lake Formation Tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html}
 */
export type LakeFormationTagProperties = {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId?: string;
  /**
   * The key-name for the LF-tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([{a-zA-Z}{\s}{0-9}_.:\/=+\-@%]*)$`
   */
  TagKey: string;
  /**
   * A list of possible values an attribute can take.
   * @minLength `1`
   * @maxLength `1000`
   */
  TagValues: string[];
};
/**
 * Resource type definition for `AWS::LakeFormation::Tag`.
 * A resource schema representing a Lake Formation Tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html}
 */
export class LakeFormationTag extends $Resource<
  "AWS::LakeFormation::Tag",
  LakeFormationTagProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::Tag";
  constructor(
    logicalId: string,
    properties: LakeFormationTagProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LakeFormationTag.Type, properties, options);
  }
}
