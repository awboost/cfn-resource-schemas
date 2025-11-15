import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for Dev::FSx::StorageVirtualMachine
 */
export type DevFSxStorageVirtualMachineProperties = {
  ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration;
  FileSystemId: string;
  Name: string;
  RootVolumeSecurityStyle?: string;
  SvmAdminPassword?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `Dev::FSx::StorageVirtualMachine`.
 */
export type DevFSxStorageVirtualMachineAttributes = {
  ResourceARN: string;
  StorageVirtualMachineId: string;
  UUID: string;
};
/**
 * Type definition for `Dev::FSx::StorageVirtualMachine.ActiveDirectoryConfiguration`.
 */
export type ActiveDirectoryConfiguration = {
  NetBiosName?: string;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
};
/**
 * Type definition for `Dev::FSx::StorageVirtualMachine.SelfManagedActiveDirectoryConfiguration`.
 */
export type SelfManagedActiveDirectoryConfiguration = {
  DnsIps?: string[];
  DomainJoinServiceAccountSecret?: string;
  DomainName?: string;
  FileSystemAdministratorsGroup?: string;
  OrganizationalUnitDistinguishedName?: string;
  Password?: string;
  UserName?: string;
};
/**
 * Type definition for `Dev::FSx::StorageVirtualMachine.Tag`.
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for Dev::FSx::StorageVirtualMachine
 */
export class DevFSxStorageVirtualMachine extends $Resource<
  "Dev::FSx::StorageVirtualMachine",
  DevFSxStorageVirtualMachineProperties,
  DevFSxStorageVirtualMachineAttributes
> {
  public static readonly Type = "Dev::FSx::StorageVirtualMachine";
  constructor(
    logicalId: string,
    properties: DevFSxStorageVirtualMachineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DevFSxStorageVirtualMachine.Type, properties, options);
  }
}
