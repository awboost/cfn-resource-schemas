import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::Folder Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-folder.html}
 */
export type QuickSightFolderProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[\w\-]+$`
   */
  FolderId?: string;
  FolderType?: FolderType;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Name?: string;
  ParentFolderArn?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  SharingModel?: SharingModel;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QuickSight::Folder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-folder.html#aws-resource-quicksight-folder-return-values}
 */
export type QuickSightFolderAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) for the folder.</p>
   * @pattern `^arn:.*`
   */
  Arn: string;
  /**
   * <p>The time that the folder was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>The time that the folder was last updated.</p>
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::QuickSight::Folder.FolderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-folder-foldertype.html}
 */
export type FolderType = "SHARED" | "RESTRICTED";
/**
 * Type definition for `AWS::QuickSight::Folder.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-folder-resourcepermission.html}
 */
export type ResourcePermission = {
  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @minLength `1`
   * @maxLength `20`
   */
  Actions: string[];
  /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
                following:</p>
             <ul>
                <li>
                   <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     * @pattern `^arn:.*`
     */
  Principal: string;
};
/**
 * Type definition for `AWS::QuickSight::Folder.SharingModel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-folder-sharingmodel.html}
 */
export type SharingModel = "ACCOUNT" | "NAMESPACE";
/**
 * Type definition for `AWS::QuickSight::Folder.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-folder-tag.html}
 */
export type Tag = {
  /**
   * <p>Tag key.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>Tag value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of the AWS::QuickSight::Folder Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-folder.html}
 */
export class QuickSightFolder extends $Resource<
  "AWS::QuickSight::Folder",
  QuickSightFolderProperties,
  QuickSightFolderAttributes
> {
  public static readonly Type = "AWS::QuickSight::Folder";
  constructor(
    logicalId: string,
    properties: QuickSightFolderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightFolder.Type, properties, options);
  }
}
