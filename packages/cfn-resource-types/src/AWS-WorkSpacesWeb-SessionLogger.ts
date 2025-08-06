import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::SessionLogger Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-sessionlogger.html}
 */
export type WorkSpacesWebSessionLoggerProperties = {
  AdditionalEncryptionContext?: EncryptionContextMap;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
   */
  CustomerManagedKey?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[ _\-\d\w]+$`
   */
  DisplayName?: string;
  EventFilter: EventFilter;
  LogConfiguration: LogConfiguration;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::SessionLogger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-sessionlogger.html#aws-resource-workspacesweb-sessionlogger-return-values}
 */
export type WorkSpacesWebSessionLoggerAttributes = {
  AssociatedPortalArns: string[];
  CreationDate: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  SessionLoggerArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.EncryptionContextMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.Event`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-event.html}
 */
export type Event =
  | "WebsiteInteract"
  | "FileDownloadFromSecureBrowserToRemoteDisk"
  | "FileTransferFromRemoteToLocalDisk"
  | "FileTransferFromLocalToRemoteDisk"
  | "FileUploadFromRemoteDiskToSecureBrowser"
  | "ContentPasteToWebsite"
  | "ContentTransferFromLocalToRemoteClipboard"
  | "ContentCopyFromWebsite"
  | "UrlLoad"
  | "TabOpen"
  | "TabClose"
  | "PrintJobSubmit"
  | "SessionConnect"
  | "SessionStart"
  | "SessionDisconnect"
  | "SessionEnd"
  | "UrlBlockByContentFilter";
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.EventFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-eventfilter.html}
 */
export type EventFilter =
  | {
      All: Unit;
    }
  | {
      /**
       * @minLength `1`
       * @maxLength `100`
       */
      Include: Event[];
    };
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.FolderStructure`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-folderstructure.html}
 */
export type FolderStructure = "Flat" | "NestedByDate";
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-logconfiguration.html}
 */
export type LogConfiguration = {
  S3?: S3LogConfiguration;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.LogFileFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-logfileformat.html}
 */
export type LogFileFormat = "JSONLines" | "Json";
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.S3LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-s3logconfiguration.html}
 */
export type S3LogConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * @pattern `^[0-9]{12}$`
   */
  BucketOwner?: string;
  FolderStructure: FolderStructure;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\d\w\-_/!().*']+$`
   */
  KeyPrefix?: string;
  LogFileFormat: LogFileFormat;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::SessionLogger.Unit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-sessionlogger-unit.html}
 */
export type Unit = Record<string, any>;
/**
 * Definition of AWS::WorkSpacesWeb::SessionLogger Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-sessionlogger.html}
 */
export class WorkSpacesWebSessionLogger extends $Resource<
  "AWS::WorkSpacesWeb::SessionLogger",
  WorkSpacesWebSessionLoggerProperties,
  WorkSpacesWebSessionLoggerAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::SessionLogger";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebSessionLoggerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWebSessionLogger.Type, properties, options);
  }
}
